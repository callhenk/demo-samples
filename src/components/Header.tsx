import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/")) {
      // External route, let default navigation happen
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerTint = scrolled
    ? "bg-white/85 dark:bg-neutral-900/75 ring-white/30 dark:ring-white/10 shadow-lg"
    : "bg-white/12 dark:bg-neutral-900/60 ring-white/10";
  const linkClass = scrolled
    ? "text-gray-900 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
    : "text-gray-200 hover:text-white";
  const iconClass = scrolled
    ? "text-gray-900 dark:text-gray-200"
    : "text-gray-200";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 safe-top pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 pointer-events-auto">
        <div
          className={`rounded-2xl backdrop-blur-md ring-1 shadow-lg ${containerTint}`}
        >
          <div className="flex items-center justify-between h-14 md:h-16 px-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src="/android-chrome-512x512.png"
                alt="Henk Logo"
                className="w-8 h-8 rounded-lg"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span
                className={`text-2xl font-logo tracking-tight drop-shadow-sm ${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
              >
                Henk
              </span>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`${linkClass} transition-colors cursor-pointer font-medium text-sm`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="hidden md:inline-flex bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jerome-callhenk/30min",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 ${iconClass} hover:text-white`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden px-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-200 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                  <Button
                    className="justify-start bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/jerome-callhenk/30min",
                        "_blank"
                      )
                    }
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
