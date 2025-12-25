"use client";

import { useRouter } from "next/navigation";
import { useState, use } from "react";
import { Projekte } from "@/data/Projekte";
import Sidebar from "@/components/Sidebar";
import ContactView from "@/components/ContactView";
import ProjectsListView from "@/components/ProjectsListView";
import ProjectDetailView from "@/components/ProjectDetailView";

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

  const handleViewChange = (view: "about" | "projects" | "contact") => {
    if (view === "about") {
      router.push("/");
    } else if (view === "projects") {
      setActiveView("projects");
    } else {
      setActiveView("contact");
    }
  };

  const handleProjectClick = (projectSlug: string) => {
    if (projectSlug === slug) {
      setActiveView("details");
    } else {
      router.push(`/projects/${projectSlug}`);
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row text-white relative z-10">
      <Sidebar
        activeView={activeView === "details" ? "projects" : activeView}
        onViewChange={handleViewChange}
        onLogoClick={handleLogoClick}
      />

      {/* Right Content Area */}
      <div className="flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto">
        {/* Mobile spacer for fixed header */}
        <div className="h-16 md:hidden" />

        {activeView === "details" && (
          <ProjectDetailView
            project={project}
            onBackClick={() => setActiveView("projects")}
          />
        )}

        {activeView === "projects" && (
          <ProjectsListView
            projects={Projekte}
            onProjectClick={handleProjectClick}
            activeSlug={slug}
          />
        )}

        {activeView === "contact" && <ContactView />}
      </div>
    </section>
  );
}
