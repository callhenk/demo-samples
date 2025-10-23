import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import SearchModal from "./SearchModal";

const HeaderWithDualNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState("families");

  const topNavLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "News", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const audienceTabs = [
    { id: "professionals", label: "Health Professionals" },
    { id: "families", label: "Patients & Families" },
    { id: "services", label: "Departments & Services" },
    { id: "research", label: "Research" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[hsl(var(--hospital-border))]">
        {/* Top Navigation Bar */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--hospital-blue-strong))] flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[hsl(var(--hospital-text-strong))]">
                Hospital
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {topNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[hsl(var(--hospital-text-muted))] hover:text-[hsl(var(--hospital-blue-strong))] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-[hsl(var(--hospital-bg-soft))] rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-[hsl(var(--hospital-text-muted))]" />
              </button>

              <a
                href="#"
                className="hidden md:inline-block px-4 py-2 bg-[hsl(var(--hospital-blue-strong))] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Patient Portal
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-[hsl(var(--hospital-bg-soft))] rounded-lg"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Audience Navigation Bar */}
        <div className="bg-[hsl(var(--hospital-olive-nav))] border-t border-[hsl(var(--hospital-border))]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {audienceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAudience(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                    activeAudience === tab.id
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(var(--hospital-bg-soft))] border-t border-[hsl(var(--hospital-border))]"
          >
            <nav className="flex flex-col space-y-1 p-4">
              {topNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-[hsl(var(--hospital-text-muted))] hover:bg-white hover:text-[hsl(var(--hospital-blue-strong))] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="px-3 py-2 bg-[hsl(var(--hospital-blue-strong))] text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity mt-4"
              >
                Patient Portal
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default HeaderWithDualNav;
