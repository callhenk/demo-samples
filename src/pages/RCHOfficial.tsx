import { useEffect, useState } from "react";
import ConversationalAgent from "@/components/ConversationalAgent";

const RCHOfficial = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    // Fetch the RCH HTML and rewrite paths for correct asset loading
    fetch("/rch-official/index.html")
      .then((res) => res.text())
      .then((html) => {
        // Rewrite relative paths to be absolute from /rch-official/
        let rewrittenHtml = html
          // Fix CSS paths
          .replace(/href="css\//g, 'href="/rch-official/css/')
          // Fix image paths
          .replace(/src="images\//g, 'src="/rch-official/images/')
          // Fix JS paths
          .replace(/src="js\//g, 'src="/rch-official/js/')
          // Fix favicon paths
          .replace(/href="favicons\//g, 'href="/rch-official/favicons/');

        setHtmlContent(rewrittenHtml);
      })
      .catch((err) => console.error("Error loading RCH HTML:", err));
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      {/* RCH Website Content */}
      <div
        className="w-full h-full overflow-auto"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Conversational Agent Overlay */}
      <ConversationalAgent />
    </div>
  );
};

export default RCHOfficial;
