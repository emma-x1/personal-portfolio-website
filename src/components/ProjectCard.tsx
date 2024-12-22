import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project?: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
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
