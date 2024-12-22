import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, Building2, ArrowRight } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const ExperienceSection = ({
  experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: "Leading frontend development for enterprise applications",
      achievements: [
        "Implemented new React component library reducing development time by 40%",
        "Led team of 5 developers in major platform redesign",
        "Improved application performance by 60%",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      company: "Digital Innovations Co.",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Full stack development for various client projects",
      achievements: [
        "Developed and launched 10+ client websites",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Mentored junior developers",
      ],
      technologies: ["Node.js", "React", "MongoDB", "AWS"],
    },
    {
      company: "StartUp Labs",
      position: "Junior Developer",
      period: "2018 - 2019",
      description: "Frontend development for startup products",
      achievements: [
        "Built responsive web applications",
        "Contributed to UI/UX improvements",
        "Participated in agile development process",
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js"],
    },
  ],
}: ExperienceSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                  {/* Left Column - Company Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">
                        {experience.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <CalendarDays className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-primary mb-2">
                      {experience.position}
                    </h4>
                  </div>

                  {/* Right Column - Details */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      {experience.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
