"use client";

import { Project } from "@/types/Project";
import Image from "next/image";

interface ProjectDetailViewProps {
  project: Project;
  onBackClick: () => void;
}

export default function ProjectDetailView({
  project,
  onBackClick,
}: ProjectDetailViewProps) {
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
    <div className="min-h-full flex flex-col justify-start py-8 max-w-3xl animate-fadeIn">
      {/* Back Link */}
      <button
        onClick={onBackClick}
        className="text-gray-500 hover:text-white transition-colors text-sm mb-8 flex items-center gap-2 self-start"
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
              <span key={index} className="text-gray-400 text-sm">
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
              <li
                key={index}
                className="text-gray-400 flex items-start gap-3"
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
        <div className="mb-8">
          <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Screenshots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
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
    </div>
  );
}
