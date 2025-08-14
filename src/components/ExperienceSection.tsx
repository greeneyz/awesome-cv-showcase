import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Video Archive Solution",
      company: "TietoEvry",
      role: "Software Architect",
      duration: "Mar 2024 - Mar 2025",
      location: "Finland",
      technologies: ["AWS", "Docker", "Maven", "Postman", "Node.js", "Keycloak", "Draw.io", "SAFe", "Angular", "Jira", "Confluence", "Scrum Master"],
      description: "Developed as part of a broader Smart Scheduling and Video Meeting platform, the Video Archive Solution enables the secure recording, storage, and playback of video meetings. Led end-to-end development and delivery, ensuring long-term accessibility of meeting data while complying with regulatory and business requirements.",
      highlights: [
        "Led end-to-end development and delivery of the Video Archive Solution",
        "Owned the product roadmap and ensured alignment with business goals",
        "Collaborated with Customer Success Managers for requirement validation",
        "Automated technical processes for streamlined development workflows"
      ]
    },
    {
      title: "Kela Archiving Solution",
      company: "Kela (Social Insurance Institution of Finland)",
      role: "Senior Software Engineer",
      duration: "Nov 2023 - Oct 2024",
      location: "Finland",
      technologies: ["Node.js", "Express.js", "TypeScript", "MS SQL Server", "Azure", "Genesys", "Keycloak", "REST API", "AWS S3", "Angular", "Authentication & Authorization"],
      description: "Developed an archiving solution to enable efficient storage, management, and retrieval of media files and metadata. Designed to integrate multiple data sources and systems, ensuring secure management of high volumes of video and audio content while maintaining compliance with national data protection standards.",
      highlights: [
        "Acted as lead backend developer and primary system architect",
        "Designed and implemented Node.js + TypeScript backend application",
        "Developed RESTful APIs consumed by Angular frontend",
        "Built secure authentication and role-based access using Keycloak"
      ]
    },
    {
      title: "Plandent Web Portal",
      company: "Plandent Finland",
      role: "Senior Software Developer",
      duration: "Jun 2023 - Nov 2023",
      location: "Finland",
      technologies: ["Vue.js", "Vuex Store", "Grunt", "SCSS", "Azure DevOps", "inRiver PIM", "Ekara", "Optimizely CMS", "TypeScript", "JavaScript", ".NET Framework", "REST API", "CI/CD", "Authentication & Authorisation", "Jira", "Confluence"],
      description: "Built a non-public B2B web application designed to support dental professionals with product search, ordering, and editorial content management. The platform features deep system integrations, role-based access, and a responsive, seamless user experience tailored to industry-specific workflows.",
      highlights: [
        "Worked as Full Stack Developer across frontend and backend layers",
        "Developed responsive UI components using Vue.js, Vue Store, TypeScript, and SCSS",
        "Built backend services and RESTful APIs using .NET Framework",
        "Integrated external systems such as Ekara and inRiver for real-time product synchronization"
      ]
    },
    {
      title: "Renewal of valmet.com",
      company: "Valmet",
      role: "Senior Software Developer",
      duration: "Oct 2022 - Present",
      location: "Finland",
      technologies: ["HTML5", "JavaScript", "jQuery", "Optimizely CMS", "Episerver", "TypeScript", "Vue.js", ".NET Framework", "Webpack", "SCSS", "API Integration", "Frontend Architecture"],
      description: "Full-scale renewal of valmet.com, aimed at enhancing user experience, aligning with updated branding, and enabling dynamic content delivery through Optimizely CMS. The solution required performance optimization, modern frontend architecture, and strong backend integration.",
      highlights: [
        "Acted as Full Stack Developer with strong focus on frontend tasks",
        "Led template development using Razor views within .NET Framework",
        "Configured Webpack for optimized bundling and improved site performance",
        "Refactored and modularized JavaScript, Vue.js components, and stylesheets"
      ]
    },
    {
      title: "Tuska 2022 Mobile App",
      company: "Tuska Festival",
      role: "Senior Software Developer",
      duration: "Jan 2022 - Jun 2022",
      location: "Finland",
      technologies: ["React Native", "JavaScript", "Contentful CMS", "Headless CMS", "Expo Client", "Mobile Application Architecture", "Agile Development"],
      description: "Delivered a robust and intuitive native mobile application to serve as the official digital companion for festival attendees. The app provided real-time updates, artist schedules, venue maps, and announcements, backed by a scalable content management setup.",
      highlights: [
        "Served as Full Stack Mobile Developer for development and architecture",
        "Built mobile app using React Native for cross-platform iOS and Android experience",
        "Integrated Contentful as headless CMS for dynamic content management",
        "Collaborated with festival stakeholders for tailored attendee needs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering high-impact solutions across diverse industries, 
            from enterprise-level applications to innovative mobile platforms.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground w-fit">
                    {exp.role}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
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