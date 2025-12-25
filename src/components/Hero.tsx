"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Projekte } from "@/data/Projekte";

type ActiveView = "about" | "projects" | "contact";

export default function Hero() {
  const [activeView, setActiveView] = useState<ActiveView>("about");
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "beta-test":
        return "Beta";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Live";
      case "planned":
        return "Planned";
      default:
        return status;
    }
  };

  return (
    <section className="min-h-screen flex text-white relative z-10">
      {/* Left Sidebar */}
      <div className="w-64 md:w-80 schrink-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50">
        {/* Top: Name & Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Black Knight
          </h1>
          <p className="text-gray-500 text-sm">Developer & Designer</p>

          {/* Navigation */}
          <nav className="mt-12 space-y-1">
            <button
              onClick={() => setActiveView("about")}
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
              onClick={() => setActiveView("projects")}
              className={`block text-left w-full py-2 transition-colors ${
                activeView === "projects"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {activeView === "projects" && (
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-3" />
              )}
              Projects
            </button>
            <button
              onClick={() => setActiveView("contact")}
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

      {/* Right Content Area */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        {/* About View */}
        {activeView === "about" && (
          <div className="h-full flex flex-col justify-center max-w-3xl animate-fadeIn">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Creative Developer
              <br />
              <span className="text-gray-500">17 Years Old</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Passionate Full-Stack Developer from Starnberg, Germany, blending
              AI tools like Claude with hands-on coding to build innovative web
              apps that solve real problems.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I dive deep into projects every day—from sleek user interfaces to
              secure backends—while balancing my love for various sports like
              Tennis, Sailing, Judo. As a high school student juggling classes
              and part-time work, I turn ideas into live products through
              curiosity and relentless practice, always aiming for clean,
              scalable results that just work.
            </p>
          </div>
        )}

        {/* Projects View */}
        {activeView === "projects" && (
          <div className="h-full flex flex-col justify-center animate-fadeIn">
            {Projekte.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.slug)}
                className="group cursor-pointer py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all"
                style={{
                  animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8">
                  {/* Project Title */}
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors whitespace-nowrap">
                    <span>{getStatusLabel(project.status)}</span>
                    <span>/</span>
                    <span>{project.techStack?.slice(0, 2).join(", ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact View */}
        {activeView === "contact" && (
          <div className="h-full flex flex-col justify-center max-w-2xl animate-fadeIn">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-8">
              If you want to get in touch, feel free to reach out via email.
            </p>
            <a
              href="mailto:einar@black-knight.dev"
              className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline underline-offset-4 mb-8"
            >
              einar@black-knight.dev
            </a>
            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/endgegnerbert-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-8">
              I typically respond within 24-48 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
