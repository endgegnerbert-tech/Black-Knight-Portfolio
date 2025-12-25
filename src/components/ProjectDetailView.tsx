"use client";

import { useState } from "react";
import { Project } from "@/types/Project";

interface ProjectDetailViewProps {
  project: Project;
  onBackClick: () => void;
}

export default function ProjectDetailView({
  project,
  onBackClick,
}: ProjectDetailViewProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
    <>
      <div className="min-h-full flex flex-col justify-start py-4 md:py-8 max-w-3xl animate-fadeIn">
        {/* Back Link */}
        <button
          onClick={onBackClick}
          className="text-gray-500 hover:text-white transition-colors text-sm mb-6 md:mb-8 flex items-center gap-2 self-start"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Projects
        </button>

        {/* Status */}
        <span className={`text-sm mb-3 md:mb-4 ${getStatusStyles(project.status)}`}>
          {getStatusLabel(project.status)}
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 md:mb-6 leading-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          {project.longDescription || project.description}
        </p>

        {/* Project Link - Moved above tech stack */}
        {project.projectUrl && project.projectUrl !== "/" && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6 md:mb-8 py-3 px-5 bg-white/10 hover:bg-white/20 rounded-lg w-fit"
          >
            Visit Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h3 className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-gray-400 text-sm px-3 py-1 bg-white/5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h3 className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-400 text-sm md:text-base flex items-start gap-3"
                >
                  <span className="text-gray-600">—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h3 className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Screenshots
              <span className="text-gray-600 text-xs ml-2 normal-case">(click to enlarge)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(screenshot)}
                  className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-gray-500 transition-all hover:scale-[1.02] cursor-zoom-in group"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-fadeIn cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
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
          </button>

          {/* Image */}
          <img
            src={lightboxImage}
            alt="Screenshot fullscreen"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Navigation hint */}
          <p className="absolute bottom-4 md:bottom-8 text-gray-500 text-sm">
            Click anywhere or press ESC to close
          </p>
        </div>
      )}
    </>
  );
}
