import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  titles?: string[];
  name?: string;
  description?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const HeroSection = ({
  titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ],
  name = "John Doe",
  description = "Building digital experiences that make a difference. Passionate about creating elegant solutions to complex problems.",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:example@example.com",
  },
}: HeroSectionProps) => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        strings: titles,
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      });
    }
  }, [titles]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{name}</h1>
        <div className="h-12 mb-6">
          <span
            ref={typewriterRef}
            className="text-xl md:text-2xl text-primary font-medium"
          />
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(socialLinks.github, "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(socialLinks.linkedin, "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(socialLinks.email, "_blank")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNextSection}
            className="rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
