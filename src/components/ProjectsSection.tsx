import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
  features: string[];
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      longDescription:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051",
      ],
      features: [
        "User Authentication",
        "Product Management",
        "Shopping Cart",
        "Payment Integration",
      ],
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application",
      longDescription:
        "A real-time task management application with team collaboration features, task assignments, and progress tracking.",
      imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
      technologies: ["React", "Firebase", "Material UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      images: [
        "https://images.unsplash.com/photo-1605379399642-870262d3d051",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      ],
      features: [
        "Real-time Updates",
        "Team Collaboration",
        "Task Assignment",
        "Progress Tracking",
      ],
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A weather forecasting application with data visualization",
      longDescription:
        "A comprehensive weather dashboard that provides detailed weather forecasts with interactive charts and maps.",
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "D3.js", "Weather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      images: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051",
      ],
      features: [
        "Weather Forecast",
        "Interactive Charts",
        "Location Search",
        "Responsive Design",
      ],
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                title: project.title,
                description: project.description,
                imageUrl: project.imageUrl,
                technologies: project.technologies,
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
              }}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={{
              title: selectedProject.title,
              description: selectedProject.description,
              longDescription: selectedProject.longDescription,
              technologies: selectedProject.technologies,
              images: selectedProject.images,
              githubUrl: selectedProject.githubUrl,
              liveUrl: selectedProject.liveUrl,
              features: selectedProject.features,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
