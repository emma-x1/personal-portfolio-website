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
  bio = "I am a passionate software developer and data scientist. I'm completing my degree in computer science at the University of Waterloo and have experience in frontend and backend development, data analysis, and machine learning. In my spare time, I love to run, attend and run my own hackathons, and learn new technologies!",
  highlights = [
    "5+ years of experience in web development",
    "Specialized in React and TypeScript",
    "Strong focus on responsive design and accessibility",
  ],
  resumeUrl = "https://drive.google.com/file/d/1BWpdOBHXmjboB7NoyN2tEV86x8muUlgV/view?usp=sharing",
  githubUrl = "https://github.com/emma-x1",
  linkedinUrl = "https://www.linkedin.com/in/emmaxing/",
  profileImage = "https://cloud-aseqw8z2c-hack-club-bot.vercel.app/0emmaxing.jpg",
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
