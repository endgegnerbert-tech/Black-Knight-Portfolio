"use client";

import { Project } from "@/types/Project";

interface ProjectsListViewProps {
  projects: Project[];
  onProjectClick: (slug: string) => void;
  activeSlug?: string;
}

export default function ProjectsListView({
  projects,
  onProjectClick,
  activeSlug,
}: ProjectsListViewProps) {
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
    <div className="min-h-full flex flex-col justify-start md:justify-center animate-fadeIn pt-4 pb-8 md:py-0">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onClick={() => onProjectClick(project.slug)}
          className="group cursor-pointer py-3 sm:py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all"
          style={{
            animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`,
          }}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
            {/* Project Title */}
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light transition-colors duration-300 tracking-tight ${
                activeSlug === project.slug
                  ? "text-white"
                  : "text-gray-400 group-hover:text-white"
              }`}
            >
              {project.title}
            </h2>

            {/* Meta */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors">
              <span>{getStatusLabel(project.status)}</span>
              <span>/</span>
              <span className="truncate max-w-[150px] md:max-w-none">
                {project.techStack?.slice(0, 2).join(", ")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
