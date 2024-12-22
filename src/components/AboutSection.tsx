import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Github, Linkedin } from "lucide-react";

interface AboutSectionProps {
  bio?: string;
  highlights?: string[];
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  profileImage?: string;
}

const AboutSection = ({
  bio = "I am a passionate software developer with expertise in building modern web applications. With a strong foundation in frontend development and a keen eye for design, I create engaging user experiences that combine functionality with aesthetic appeal.",
  highlights = [
    "5+ years of experience in web development",
    "Specialized in React and TypeScript",
    "Strong focus on responsive design and accessibility",
    "Experience with modern frontend frameworks and tools",
  ],
  resumeUrl = "#",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=professional",
}: AboutSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>

                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => window.open(resumeUrl, "_blank")}
                className="flex-1 sm:flex-none"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex-1 sm:flex-none"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(linkedinUrl, "_blank")}
                className="flex-1 sm:flex-none"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-full -rotate-6" />
              <div className="absolute inset-0 bg-primary/5 rounded-full rotate-6" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
