import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Emergency Services", href: "#" },
      { name: "Cardiology", href: "#" },
      { name: "Neurology", href: "#" },
      { name: "Research", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "GDPR Statement", href: "/gdpr" },
      { name: "Cookie Statement", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-logo text-white drop-shadow-sm font-bold">
                RCH Melbourne
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The Royal Children's Hospital Melbourne is Australia's leading children's
              hospital, providing world-class pediatric care and research.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">1300 RCH (724)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@rch.org.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Parkville, Victoria 3052, Australia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/royalchildrenshospital"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/royal-children's-hospital"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/rchmelbourne"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Royal Children's Hospital Melbourne. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Now featuring AI-powered conversational support to assist patients and families.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
