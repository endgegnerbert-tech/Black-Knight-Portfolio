"use client";

import { useState } from "react";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: "about" | "projects" | "contact") => void;
  onLogoClick?: () => void;
}

export default function Sidebar({
  activeView,
  onViewChange,
  onLogoClick,
}: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      onViewChange("about");
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (view: "about" | "projects" | "contact") => {
    onViewChange(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="text-left hover:opacity-70 transition-opacity"
        >
          <h1 className="text-xl font-light tracking-tight">Black Knight</h1>
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/95 pt-20 px-6 animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="space-y-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => handleNavClick("about")}
              className={`block text-left w-full py-3 text-2xl transition-colors ${
                activeView === "about" ? "text-white" : "text-gray-500"
              }`}
            >
              {activeView === "about" && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-4" />
              )}
              About
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className={`block text-left w-full py-3 text-2xl transition-colors ${
                activeView === "projects" || activeView === "details"
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              {(activeView === "projects" || activeView === "details") && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-4" />
              )}
              Projects
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`block text-left w-full py-3 text-2xl transition-colors ${
                activeView === "contact" ? "text-white" : "text-gray-500"
              }`}
            >
              {activeView === "contact" && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-4" />
              )}
              Contact
            </button>
          </nav>

          <div className="absolute bottom-8 left-6 text-gray-600 text-xs space-y-2">
            <p>© 2025 Black Knight</p>
            <p>
              Design inspired by{" "}
              <a
                href="https://p5aholic.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Keita Yamada
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 lg:w-80 shrink-0 p-8 lg:p-12 flex-col justify-between border-r border-gray-800/50">
        {/* Top: Name & Title */}
        <div>
          <button
            onClick={handleLogoClick}
            className="text-left hover:opacity-70 transition-opacity"
          >
            <h1 className="text-3xl lg:text-4xl font-light tracking-tight mb-2">
              Black Knight
            </h1>
            <p className="text-gray-500 text-sm">Developer & Designer</p>
          </button>

          {/* Navigation */}
          <nav className="mt-12 space-y-1">
            <button
              onClick={() => onViewChange("about")}
              className={`block text-left w-full py-2 transition-colors ${
                activeView === "about"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {activeView === "about" && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-3" />
              )}
              About
            </button>
            <button
              onClick={() => onViewChange("projects")}
              className={`block text-left w-full py-2 transition-colors ${
                activeView === "projects" || activeView === "details"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {(activeView === "projects" || activeView === "details") && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-3" />
              )}
              Projects
            </button>
            <button
              onClick={() => onViewChange("contact")}
              className={`block text-left w-full py-2 transition-colors ${
                activeView === "contact"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {activeView === "contact" && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-3" />
              )}
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom: Copyright & Credits */}
        <div className="text-gray-600 text-xs space-y-2">
          <p>© 2025 Black Knight</p>
          <p>
            Design inspired by{" "}
            <a
              href="https://p5aholic.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Keita Yamada
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
