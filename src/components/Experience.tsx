import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Pitedu",
    period: "02/2025 - Present",
    description: "Developed tools to make english learning easier."
  },
  {
    title: "Full-Stack Developer",
    company: "Live!",
    period: "07/2024 - 02/2025",
    description: "Built and maintained multiple enterprise applications using Java Spring Boot and React."
  },
  {
    title: "Full-Stack Developer",
    company: "WEG",
    period: "02/2017 - 12/2023",
    description: "Developed RESTful APIs and responsive web applications."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <CardDescription className="text-base font-medium text-foreground/70">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
