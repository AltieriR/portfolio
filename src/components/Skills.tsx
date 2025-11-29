import { Card } from "@/components/ui/card";

const skills = {
  "Backend": ["Java", "Spring Boot/Framework", "REST APIs", "SOAP", "OracleSQL", "PostgreSQL", "MongoDB", "Java EE", "JSP", "Logging"],
  "Frontend": ["React", "JavaScript", "NPM", "ESBuild", "React Context/Redux", "ECMAScript 8+/CSS Modules", "Bootstrap"],
  "DevOps": ["Docker", "CI/CD", "Git", "Maven", "Elastic ELK", "Grafana (Prometheus)", "Hostinger", "AWS", "Nginx", "LDAP", "Spring Security/OAuth2"],
  "Testing": ["JUnit", "Jest", "React Testing Library", "WireMock", "SoapUI Testing", "H2"],
  "Quality Assurance": ["SonarLint/Qube", "ESLint", "Postman/Insomnia/SwaggerUI/SoapUI"],
  "Project related": ["Scrum", "Kanban", "Jira", "Trello"]
};

const Skills = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
