import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 pt-20"
          >
            <div className="max-w-2xl mx-auto px-4">
              <div className="bg-white rounded-lg shadow-xl p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-[hsl(var(--hospital-bg-soft))] rounded-lg transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[hsl(var(--hospital-text-muted))]" />
                  <input
                    type="text"
                    placeholder="Search for health information, services, doctors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full pl-12 pr-4 py-3 border border-[hsl(var(--hospital-border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--hospital-blue-strong))] text-[hsl(var(--hospital-text-strong))]"
                  />
                </div>

                {/* Suggestions or Results */}
                {!searchQuery ? (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-[hsl(var(--hospital-text-muted))]">
                      Popular searches
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Emergency services",
                        "Appointments",
                        "Kids health",
                        "Teen health",
                        "Doctors",
                        "Visiting hours",
                      ].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => setSearchQuery(suggestion)}
                          className="p-3 text-left bg-[hsl(var(--hospital-bg-soft))] rounded-lg hover:bg-[hsl(var(--hospital-blue-bright))] hover:text-white transition-colors text-sm font-medium"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-[hsl(var(--hospital-text-muted))]">
                      Search results for "{searchQuery}"
                    </p>
                    {/* Placeholder result items */}
                    {[1, 2, 3].map((i) => (
                      <a
                        key={i}
                        href="#"
                        className="block p-3 hover:bg-[hsl(var(--hospital-bg-soft))] rounded-lg transition-colors"
                      >
                        <h4 className="font-semibold text-[hsl(var(--hospital-text-strong))] text-sm">
                          Result {i}: {searchQuery}
                        </h4>
                        <p className="text-xs text-[hsl(var(--hospital-text-muted))] mt-1">
                          Relevant content description
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
