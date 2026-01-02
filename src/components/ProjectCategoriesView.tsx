import { useState } from "react";

interface ProjectCategory {
  id: "ai" | "non-ai";
  label: string;
  icon: string;
}

interface ProjectCategoriesViewProps {
  onCategorySelect: (category: ProjectCategory) => void;
}

export default function ProjectCategoriesView({
  onCategorySelect,
}: ProjectCategoriesViewProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);

  const handleCategoryClick = (category: ProjectCategory) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const categories: ProjectCategory[] = [
    { id: "ai", label: "AI Projects", icon: "🤖" },
    { id: "non-ai", label: "Other Projects", icon: "📁" },
  ];

  return (
    <div className="min-h-full flex flex-col justify-start md:justify-center animate-fadeIn pt-4 pb-8 md:py-0">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          className={`group cursor-pointer py-6 sm:py-8 md:py-10 border-b border-gray-800/50 last:border-b-0 transition-all ${
            selectedCategory?.id === category.id ? "bg-gray-900" : ""
          }`}
          style={{
            animation: `fadeSlideIn 0.4s ease-out ${
              categories.indexOf(category) * 0.15
            }s both`,
          }}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-4xl md:text-5xl">{category.icon}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-400 group-hover:text-white transition-colors duration-300 tracking-tight">
              {category.label}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
