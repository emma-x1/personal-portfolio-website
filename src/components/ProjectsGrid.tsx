import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather forecasting application with interactive maps and detailed weather data visualization.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ],
}: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
