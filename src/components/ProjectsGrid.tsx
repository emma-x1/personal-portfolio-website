import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description 1',
      imageUrl: 'image1.jpg',
      technologies: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/project1',
      liveUrl: 'https://project1.com',
      onOpenModal: () => setSelectedProject(projects[0]), // Ensure this property is included
    },

    {
      id: 2,
      title: 'Project 2',
      description: 'Description 2',
      imageUrl: 'https://via.placeholder.com/300',
      technologies: ['JavaScript', 'CSS'],
      githubUrl: 'https://github.com/project2',
      liveUrl: 'https://project2.com',
    },
    // Add more projects as needed
    // Other projects
  ];

  return (
    <div>
      <h1 className="text-center my-8 text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            onOpenModal={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSelectedProject(null)} />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto px-8">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="mt-4">{selectedProject.description}</p>
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto mt-4" />
              <div className="mt-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} className="mr-2">{tech}</Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Button as="a" href={selectedProject.githubUrl} target="_blank">
                  <Github className="w-4 h-4 mr-2" /> View on GitHub
                </Button>
                <Button as="a" href={selectedProject.liveUrl} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" /> View Live
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsGrid;


/*
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
*/