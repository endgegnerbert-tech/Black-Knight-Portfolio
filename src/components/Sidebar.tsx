"use client";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: "about" | "projects" | "contact") => void;
  onLogoClick?: () => void;
}

export default function Sidebar({ activeView, onViewChange, onLogoClick }: SidebarProps) {
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      onViewChange("about");
    }
  };

  return (
    <div className="w-64 md:w-80 shrink-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50">
      {/* Top: Name & Title */}
      <div>
        <button
          onClick={handleLogoClick}
          className="text-left hover:opacity-70 transition-opacity"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
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
  );
}
