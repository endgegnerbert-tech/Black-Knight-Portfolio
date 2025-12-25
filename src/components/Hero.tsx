"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Projekte } from "@/data/Projekte";
import Sidebar from "./Sidebar";
import AboutView from "./AboutView";
import ContactView from "./ContactView";
import ProjectsListView from "./ProjectsListView";

type ActiveView = "about" | "projects" | "contact";

export default function Hero() {
  const [activeView, setActiveView] = useState<ActiveView>("about");
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row text-white relative z-10">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Right Content Area */}
      <div className="flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto">
        {/* Mobile spacer for fixed header */}
        <div className="h-16 md:hidden" />

        {activeView === "about" && <AboutView />}

        {activeView === "projects" && (
          <ProjectsListView
            projects={Projekte}
            onProjectClick={handleProjectClick}
          />
        )}

        {activeView === "contact" && <ContactView />}
      </div>
    </section>
  );
}
