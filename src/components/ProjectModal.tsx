import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, X } from "lucide-react";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: string[];
    githubUrl: string;
    liveUrl: string;
    features: string[];
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    title: "Example Project",
    description: "A brief description of the project",
    longDescription:
      "This is a detailed description of the project that explains its purpose, implementation details, and key features in depth. It provides comprehensive information about the technical challenges overcome and solutions implemented.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Responsive Design",
      "Real-time Updates",
      "User Authentication",
      "Data Visualization",
    ],
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About the Project</h3>
            <p className="text-gray-700">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-4 pt-4">
            <Button
              variant="outline"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
            <Button onClick={() => window.open(project.liveUrl, "_blank")}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
