import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Cloud, Database, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend Development",
      color: "text-blue-600",
      skills: [
        "React.js", "Vue.js", "Angular", "TypeScript", "JavaScript", 
        "HTML5", "CSS3", "Tailwind CSS", "SCSS", "Bootstrap",
        "Vue Store", "Redux", "Next.js", "Responsive Design"
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-600",
      skills: [
        "Node.js", "Express.js", "Python", ".NET Framework", 
        "RESTful APIs", "GraphQL", "Microservices", "API Integration",
        "Authentication & Authorization", "JWT", "OAuth"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-purple-600",
      skills: [
        "Microsoft Azure", "AWS", "Azure DevOps", "Docker", 
        "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code",
        "Azure Functions", "Azure Developer Associate", "Jenkins",
        "GitHub Actions", "Terraform"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-orange-600",
      skills: [
        "Microsoft Fabrics", "Power BI", "Tableau", "SQL", "MSSQL",
        "PostgreSQL", "Python", "Pandas", "ETL Pipelines", 
        "Data Transformation", "Jupyter Notebooks", "Data Analytics",
        "AWS S3", "Genesys", "Keycloak"
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "text-red-600",
      skills: [
        "Git", "GitHub", "Jira", "Confluence", "Optimizely CMS", 
        "Contentful", "Strapi", "Episerver", "Salesforce", 
        "Scrum", "Agile", "SAFe", "WebPack", "Vite", "Maven",
        "Postman", "Draw.io"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skills across the full technology stack, from frontend frameworks 
            to cloud infrastructure and data engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <category.icon className={`w-12 h-12 mx-auto mb-4 ${category.color}`} />
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
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