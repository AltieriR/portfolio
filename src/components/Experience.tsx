import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Pitedu",
    period: "02/2025 - Present",
    description: "Led the learning platform development, as well as the integrations."
  },
  {
    title: "Full-Stack Developer",
    company: "Live!",
    period: "07/2024 - 02/2025",
    description: `Contributed to the development and maintenance of the production system that served all 
      internal business areas (with the help of Systêxtil ERP). Developed customizations within Systêxtil ERP.
      Led the integration of the Azure AI-powered captioning service and the outsourced sewing management system (GERFAC).`,
  },
  {
    title: "Online Shopper in Australia",
    company: "Woolworths Sydney",
    period: "02/2024 - 07/2024",
    description: "non-IT related // Personal shopping for Woolies customers.",
  },
  {
    title: "Full-Stack Developer",
    company: "WEG",
    period: "01/2017 - 08/2023",
    description: `Led the integration of core services of the project management platform such as Power BI Embedded, 
      Azure AD Single Sign-On (SSO), Camunda, Taskana and SalesForce CRM. 
      Contributed to the software development of WEG's project management platform, serving over 150 accounting assistants,
      project and contract managers. 
      Nonetheless, helped develop other few smaller systems`,
  },
  {
    title: "IT Assistant",
    company: "Artefatos de Borrachas WOLF",
    period: "07/2016 - 12/2016",
    description: `Help Desk, Active Directory, and software installation support, 
      assembling of Ethernet cables and computers repair.`,
  },
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
