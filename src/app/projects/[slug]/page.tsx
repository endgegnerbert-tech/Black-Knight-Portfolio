"use client";

import { useRouter } from "next/navigation";
import { useState, use } from "react";
import { Projekte } from "@/data/Projekte";

type ActiveView = "details" | "projects" | "contact";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const [activeView, setActiveView] = useState<ActiveView>("details");

  const project = Projekte.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found</p>
      </section>
    );
  }

  const handleProjectClick = (projectSlug: string) => {
    if (projectSlug === slug) {
      setActiveView("details");
    } else {
      router.push(`/projects/${projectSlug}`);
    }
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

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-yellow-400";
      case "planned":
        return "text-blue-400";
      case "beta-test":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section className="min-h-screen flex text-white relative z-10">
      {/* Left Sidebar */}
      <div className="w-64 md:w-80 shrink-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50">
        {/* Top: Name & Title */}
        <div>
          <button
            onClick={() => router.push("/")}
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
              onClick={() => router.push("/")}
              className="block text-left w-full py-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setActiveView("projects")}
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
        {/* Project Details View */}
        {activeView === "details" && (
          <div className="h-full flex flex-col justify-center max-w-3xl animate-fadeIn">
            {/* Back Link */}
            <button
              onClick={() => setActiveView("projects")}
              className="text-gray-500 hover:text-white transition-colors text-sm mb-8 flex items-center gap-2 self-start"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </button>

            {/* Status */}
            <span className={`text-sm mb-4 ${getStatusStyles(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-8">
                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray-400 text-sm"
                    >
                      {tech}
                      {index < project.techStack!.length - 1 && (
                        <span className="text-gray-600 ml-3">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">
                  Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 flex items-start gap-3">
                      <span className="text-gray-600">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Link */}
            {project.projectUrl && project.projectUrl !== "/" && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mt-4"
              >
                Visit Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Projects List View */}
        {activeView === "projects" && (
          <div className="h-full flex flex-col justify-center animate-fadeIn">
            {Projekte.map((p, index) => (
              <div
                key={p.id}
                onClick={() => handleProjectClick(p.slug)}
                className={`group cursor-pointer py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all ${
                  p.slug === slug ? "opacity-100" : ""
                }`}
                style={{
                  animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8">
                  <h2
                    className={`text-2xl md:text-4xl lg:text-5xl font-light transition-colors duration-300 tracking-tight ${
                      p.slug === slug
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {p.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors whitespace-nowrap">
                    <span>{getStatusLabel(p.status)}</span>
                    <span>/</span>
                    <span>{p.techStack?.slice(0, 2).join(", ")}</span>
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
