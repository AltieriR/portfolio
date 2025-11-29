import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    key: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    previewVideo: string | null;
    projectHighlight?: ReactNode | null;
  };
}

const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            {project.previewVideo && (
              <iframe title="project-video" width="100%" height="315"
                src={project.previewVideo}>
              </iframe>
            )}
          </div>
          <h4 className="font-semibold mt-2 mb-3">Project Highlights</h4>

          {project.projectHighlight ? (
            project.projectHighlight
          ) : (
            <p className="text-muted-foreground">
              This project demonstrates advanced full-stack development capabilities,
              and modern tools use.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
