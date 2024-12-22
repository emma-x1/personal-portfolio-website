import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const SkillsSection = ({
  skills = [
    {
      name: "React",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
      proficiency: 90,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=typescript",
      proficiency: 85,
      category: "Languages",
    },
    {
      name: "Node.js",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=nodejs",
      proficiency: 80,
      category: "Backend",
    },
    {
      name: "Python",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=python",
      proficiency: 75,
      category: "Languages",
    },
    {
      name: "AWS",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=aws",
      proficiency: 70,
      category: "DevOps",
    },
    {
      name: "Docker",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=docker",
      proficiency: 75,
      category: "DevOps",
    },
  ],
}: SkillsSectionProps) => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="space-y-8">
          {categories.map((category) => (
            <Card key={category} className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <TooltipProvider key={skill.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-12 h-12 mb-2"
                              />
                              <span className="text-sm font-medium">
                                {skill.name}
                              </span>
                              <Badge variant="secondary" className="mt-2">
                                {skill.proficiency}%
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Proficiency: {skill.proficiency}%</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
