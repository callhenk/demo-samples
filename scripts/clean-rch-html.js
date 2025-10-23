#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RCH_HTML_PATH = path.join(__dirname, '../public/rch-official/index.html');

// List of patterns for broken external resources to remove
const BROKEN_PATTERNS = [
  // Ektron resources
  { selector: 'link[href*="ektron.stylesheet"]' },
  { selector: 'script[src*="ektron.javascript"]' },
  { selector: 'script[src*="/WorkArea/"]' },
  { selector: 'script[src*="/TemplateAssets/"]' },

  // External tracking/analytics that get blocked
  { selector: 'script[src*="typekit.net"]' },
  { selector: 'script[src*="clarity.ms"]' },
  { selector: 'script[src*="hotjar.com"]' },
  { selector: 'script[src*="googletagmanager.com"]' },
  { selector: 'script[src*="google-analytics"]' },
  { selector: 'script[src*="incapsula"]' },

  // Inline scripts that reference undefined global objects
  {
    selector: 'script',
    contains: ['Typekit.load', 'Ektron', 'tk.onload']
  }
];

function cleanRCHHTML() {
  try {
    console.log('📝 Cleaning RCH HTML file...');

    // Read the HTML file
    const html = fs.readFileSync(RCH_HTML_PATH, 'utf8');
    const $ = load(html);

    let removedCount = 0;

    // Remove broken external resources
    BROKEN_PATTERNS.forEach(pattern => {
      if (pattern.contains) {
        // For inline scripts, check content
        $('script').each((i, el) => {
          const content = $(el).html();
          if (content && pattern.contains.some(str => content.includes(str))) {
            $(el).remove();
            removedCount++;
          }
        });
      } else {
        // For external resources
        const removed = $(pattern.selector).length;
        $(pattern.selector).remove();
        removedCount += removed;
      }
    });

    // Remove all script tags that reference local js files (they're not loading properly in iframe)
    $('script[src*="js/"]').remove();
    removedCount += $('script[src*="js/"]').length;

    // Remove manifest.json reference (causing error)
    $('link[href*="manifest.json"]').remove();
    removedCount += 1;

    // Write the cleaned HTML back
    const cleanedHtml = $.html();
    fs.writeFileSync(RCH_HTML_PATH, cleanedHtml, 'utf8');

    console.log(`✅ Successfully cleaned RCH HTML`);
    console.log(`   Removed ${removedCount} broken resource references`);
    console.log(`   File: ${RCH_HTML_PATH}`);

  } catch (error) {
    console.error('❌ Error cleaning RCH HTML:', error.message);
    process.exit(1);
  }
}

cleanRCHHTML();
