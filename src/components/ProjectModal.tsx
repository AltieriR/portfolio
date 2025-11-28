import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    demo: string;
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
        
        <div className="space-y-6 pt-4">
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
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Fully working tool</li>
              <li>• Responsive design across all devices</li>
              <li>• Integration testing coverage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Project Highlights</h4>
            <p className="text-muted-foreground">
              This project demonstrates advanced full-stack development capabilities,
              and modern tools use.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
