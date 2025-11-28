import { useState } from "react"; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "English fluency evaluator",
    description: "Tool to evaluate english speech using Azure AI assessment service.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Orangingin - Illustration training in one tool",
    description: "Platform for searching images, creating and getting feedback of your illustration training.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Live chat messaging"],
    github: "https://gitlab.com/oranging",
    demo: "#"
  },
  {
    title: "This website",
    description: "Portfolio created using AI tools.",
    tech: ["React", "TypeScript", "AI-assisted"],
    github: "https://github.com/AltieriR/portfolio",
    demo: "https://altierir.github.io/portfolio"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-6 bg-muted/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDemoClick(project)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
