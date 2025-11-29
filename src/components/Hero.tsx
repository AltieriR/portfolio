import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Senior Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Specialized in Java & React
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building enterprise applications with modern technologies.
          Passionate about creating reusable, high-performance, bug-free code and making the user experience better.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a
            href="https://github.com/AltieriR?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/altieri-ricardo-dalagnollo-01b657121/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5547992568021&text=Ol%C3%A1+Altieri%2C+vim+atrav%C3%A9s+do+seu+portfólio%2C+teria+um+momento+para+conversarmos%3F++&type=phone_number&app_absent=0"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="mailto:altidala@hotmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
