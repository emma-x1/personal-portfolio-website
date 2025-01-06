import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Project } from "/Users/emmaxing/personal-portfolio-website/src/types.tsx"; //

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
          <Github className="w-4 h-4 mr-1" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


/*
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  onOpenModal?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, githubUrl, liveUrl, onOpenModal }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer" onClick={onOpenModal}>
      <div className="p-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
        <img src={imageUrl} alt={title} className="w-full h-auto mt-2" />
        <div className="mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="mr-1 text-xs">{tech}</Badge>
          ))}
        </div>
      </div>
      <CardFooter className="p-2 border-t bg-gray-50">
        <div className="flex gap-1 w-full">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </Button>
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </Button>
          )}
        </div>
      </CardFooter>
    </div>
  );
};

export default ProjectCard;

*/

/*
interface ProjectCardProps {
  project?: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    onOpenModal: () => void;
  };
  onClick?: () => void;
}

const ProjectCard = ({
  project = {
    title: "Example Project",
    description:
      "A sample project showcasing various technologies and features.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  
  },
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div
        className="h-48 w-full bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
        onClick={onClick}
      />
      <CardContent className="p-4 flex-grow">
        <h3
          className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer"
          onClick={onClick}
        >
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t bg-gray-50">
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
*/