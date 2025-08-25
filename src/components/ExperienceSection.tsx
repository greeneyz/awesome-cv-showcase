import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "TMS Queue System",
      company: "TietoEvry",
      role: "Senior Software Engineer",
      duration: "Mar 2025 - Jul 2025",
      location: "Finland",
      technologies: ["Jira", "GitHub", "Spring Boot", "Keycloak", "Angular 18", "Docker", "JSON Server"],
      description: "The TMS Queue System was developed to streamline customer service management by allowing clients to obtain queues while enabling internal employees to adjust and manage them in real-time. Unlike traditional queue systems, this solution introduced dynamic queue handling and time optimization, improving efficiency for both service providers and end customers.",
      highlights: [
        "Implemented for the banking sector in Finland, where efficient time and queue management is critical",
        "Integrated Keycloak authentication into the Spring Boot backend for secure access control",
        "Developed frontend features in Angular 18, delivering a modern and responsive user experience",
        "Built and connected APIs between backend and frontend to enable seamless real-time queue management",
        "Delivered a secure, scalable, and user-friendly queue management system",
        "Enabled real-time queue adjustments, helping banks reduce waiting times and optimize service delivery"
      ]
    },
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
    },
    {
      title: "IDigi Development Platform",
      company: "Ilmarinen",
      role: "Senior Software Developer",
      duration: "Jul 2021 - Nov 2022",
      location: "Finland",
      technologies: ["React", "Redux", "Web UI", "Bootstrap", "REST API", "Confluence", "GitHub", "Episerver", "Google Cloud Platform", "Jenkins", "Optimizely CMS", "TypeScript", "IAM", "Jira"],
      description: "Modernized and architected Ilmarinen's web-based customer-facing platform, ensuring scalability, performance, and alignment with design and accessibility standards. The application facilitates self-service functionalities for insured individuals and employers while integrating securely with backend services and internal data systems.",
      highlights: [
        "Spearheaded frontend architecture design, aligning technical implementation with Ilmarinen's brand",
        "Actively collaborated with UI/UX teams and product stakeholders for pixel-perfect implementation",
        "Worked alongside testing team to identify edge cases and guarantee stability across releases",
        "Built dynamic and responsive UIs using ReactJS, Redux, and Bootstrap"
      ]
    },
    {
      title: "Kesko Telesales Renewal",
      company: "Kesko",
      role: "Senior Software Developer",
      duration: "Oct 2020 - Jun 2021",
      location: "Finland",
      technologies: ["Redux", "React", "Confluence", "Cascading Style Sheets (CSS)", "Jira", "GitHub", "Azure Functions", "Azure DevOps", "Node.js", "Salesforce Integrations"],
      description: "Single Page Application (SPA) designed to manage and streamline internal order entry and fulfillment processes. The application provided a rich, interactive UI with real-time updates and integrations with Salesforce for customer and order data, deployed on Microsoft Azure for scalability and high availability.",
      highlights: [
        "Led frontend development of SPA using ReactJS and Redux",
        "Developed real-time features and keyboard shortcut functionalities to boost user productivity",
        "Designed state management patterns with Redux to ensure application data consistency",
        "Built and integrated API endpoints using Microsoft Azure Function Apps"
      ]
    },
    {
      title: "HSE Mobile Application",
      company: "Neles (now part of Valmet)",
      role: "Senior Software Developer",
      duration: "May 2020 - Jul 2020",
      location: "Finland",
      technologies: ["Android Studio", "iOS Application Development", "Cordova", "JavaScript", "Legacy Code Maintenance", "Cross Platform Development", "Agile Development"],
      description: "Enhanced an existing Cordova-based cross-platform mobile application used internally by Neles personnel. The app, available on both Android and iOS, supported tasks such as monitoring valve statuses, capturing data on the field, and providing real-time updates to the central system.",
      highlights: [
        "Contributed to feature enhancements in legacy Cordova codebase",
        "Implemented new modules and user-facing features without introducing regressions",
        "Collaborated with team to analyze technical debt and identify opportunities for scalable improvements"
      ]
    },
    {
      title: "Metso Equipment Enhancement",
      company: "Metso Outotec",
      role: "Senior Software Developer",
      duration: "May 2020 - Jul 2020",
      location: "Finland",
      technologies: ["AngularJS", "Redux", "GitHub", "Node.js", "CI/CD", "JavaScript", "JSON Server", "Legacy Code Maintenance", "Cloud Deployment", "Agile Development"],
      description: "Enhanced an established AngularJS frontend application used internally by Metso Outotec. The application facilitates various business processes and requires continuous feature updates to adapt to evolving operational needs.",
      highlights: [
        "Contributed as Frontend Developer, adding new features and functionalities within the existing AngularJS codebase",
        "Ensured smooth integration of new features without impacting existing workflows or system stability",
        "Used JSON server for local development and version control to speed up development and improve team collaboration",
        "Leveraged Microsoft Azure cloud services to deploy the application, ensuring scalability, reliability, and adherence to security best practices"
      ]
    },
    {
      title: "Metsäverkko Forestry Management SPA",
      company: "Metsäverkko",
      role: "Senior Software Developer",
      duration: "Feb 2020 - Oct 2020",
      location: "Finland",
      technologies: ["AngularJS", "Azure DevOps", "Jira", "TypeScript", "Code Optimizations", "CSS", "Agile Development"],
      description: "Developed a responsive and feature-rich Single Page Application (SPA) using AngularJS to support Metsäverkko's forestry management operations. The SPA delivers real-time data and complex workflows essential for daily business processes.",
      highlights: [
        "Served as Full Stack Developer, driving both frontend and backend development tasks",
        "Restructured stylesheets and optimized code bundling to improve application performance and maintainability",
        "Led implementation of new features, ensuring alignment with client requirements and project objectives",
        "Actively participated in Agile ceremonies, collaborating closely with a diverse team"
      ]
    },
    {
      title: "Lyse Support Tool",
      company: "Lyse",
      role: "Software Developer",
      duration: "Jun 2019 - Jan 2020",
      location: "Norway",
      technologies: ["JavaScript", "TypeScript", "Angular 7", "Node.js", "Authentication & Authorisation", "JWT - JSON Web Token"],
      description: "Developed the frontend of the Lyse Support Tool using Angular 7 and Material-UI, focusing on creating an intuitive and responsive interface for internal support teams. The application facilitates streamlined issue tracking and resolution.",
      highlights: [
        "Worked as Software Developer, designing UI components with AngularJS and styling using SCSS and Material-UI design library",
        "Configured project environment with appropriate package managers for streamlined dependency management",
        "Implemented secure authentication on the frontend using JWT tokens to protect access and enhance security"
      ]
    },
    {
      title: "Lyse Application Enhancement",
      company: "Lyse",
      role: "Software Developer",
      duration: "Sept 2019 - Dec 2019",
      location: "Norway",
      technologies: ["UnixShell", "Node.js", "Angular 7", "Material UI"],
      description: "Worked on enhancing the existing Lyse Support Tool frontend, built primarily with Angular 7+ and Material-UI, with some modules implemented as standalone JSP applications.",
      highlights: [
        "Acted as Software Developer, delivering updates and refinements at the template and module level",
        "Made frontend changes within AngularJS 7+ framework and contributed to JSP module updates and deployments",
        "Ensured alignment of UI/UX elements with customer expectations and functional needs"
      ]
    },
    {
      title: "Lyse Ubisecure Templating",
      company: "Lyse",
      role: "Software Developer",
      duration: "Sept 2019 - Dec 2019",
      location: "Norway",
      technologies: ["JavaScript", "Linux, Ubuntu", "UnixShell", "Node.js"],
      description: "Performed UI template updates for applications hosted on a Linux-based Ubisecure server, a platform used for identity and access management.",
      highlights: [
        "Worked as Software Developer making UI changes directly in templates deployed on the Ubisecure environment",
        "Ensured compatibility and smooth operation within the Linux server infrastructure"
      ]
    },
    {
      title: "Data Analysis of Vehicle's CAN Data",
      company: "Millisecond Oy",
      role: "Data Engineer",
      duration: "Aug 2018 - Apr 2019",
      location: "Finland",
      technologies: ["Azure SQL Database", "React", "Tableau Practitioner", "Microsoft Power BI", "Python", "Flask", ".NET Framework", "ETL", "Data Engineering", "REST API", "PostgreSQL", "NoSQL", "MQTT", "Data Visualization", "Machine Learning"],
      description: "Developed a comprehensive telemetry system to collect, process, and visualize real-time data from heavy-duty mining vehicles and Bluetooth/Wi-Fi sensors distributed across mining areas. The platform supports cloud-based processing, monitoring, and machine learning-driven analytics.",
      highlights: [
        "Served as Data Engineer, designing and maintaining robust data pipelines to ingest raw telemetry from vehicles and sensors",
        "Performed extensive data cleaning, deduplication, and transformation to ensure high-quality datasets for analysis",
        "Addressed missing data challenges using statistical and domain-specific techniques",
        "Exported processed data in multiple formats (CSV, JSON, Parquet) for visualization and ML use",
        "Collaborated with data scientists to prepare feature-rich datasets",
        "Developed backend services to manage and expose data securely via RESTful APIs",
        "Designed scalable data models and managed cloud storage/databases",
        "Facilitated reliable, secure communication between IoT devices and backend using message queues or MQTT protocols",
        "Built web dashboards and visualization tools using modern frontend frameworks"
      ]
    },
    {
      title: "Frontend Development Dashboard",
      company: "Millisecond Oy",
      role: "Software Developer",
      duration: "Feb 2018 - Aug 2018",
      location: "Finland",
      technologies: ["HTML5", "JavaScript", "React", "ECMAScript-ES6/7", "Redux", "Node.js"],
      description: "Customized a ReactJS-based dashboard template to fit the specific needs of a key client. The dashboard features dynamic graphs and tables for real-time data visualization and insights.",
      highlights: [
        "Acted as Software Developer, tailoring an off-the-shelf ReactJS, Redux, and JavaScript template to meet client requirements",
        "Developed and integrated dashboard components including interactive graphs and data tables",
        "Ensured seamless state management using Redux to handle dynamic data updates and user interactions"
      ]
    },
    {
      title: "Sport's Arena Web Portal Customisation",
      company: "Unikie Oy",
      role: "Full Stack Developer",
      duration: "Aug 2017 - Dec 2017",
      location: "Finland",
      technologies: ["AngularJS", "Node.js", "PHP", "phpMyAdmin"],
      description: "Customized a Sports Arena web portal built with Angular 2, Node.js, and Laravel, designed to manage and deliver sports-related content and services to end users.",
      highlights: [
        "Served as Full Stack Developer, working on both frontend and backend components",
        "Customized Angular 2 frontend features to improve user interaction and UI responsiveness",
        "Developed backend logic and APIs using Node.js and PHP (Laravel framework)",
        "Managed database operations with phpMyAdmin, ensuring data integrity and efficient queries"
      ]
    },
    {
      title: "Data Analysis of Polio Vaccination Data",
      company: "Micromerger",
      role: "Software Developer",
      duration: "Nov 2011 - Aug 2012",
      location: "Pakistan",
      technologies: ["Java SDK", "Python", "MS Excel", "Pandas", "SQL"],
      description: "Developed a data analysis system to process weekly polio vaccination data collected by field teams visiting homes nationwide. The data was used to generate dashboards and charts to monitor vaccination coverage and support decision-making.",
      highlights: [
        "Software Developer responsible for handling data processing and visualization tasks",
        "Utilized Java SDK to develop a standalone desktop application embedding key charts",
        "Employed Python, Pandas, and SQL for data cleaning, transformation, and analysis",
        "Created dashboards and visualizations in MS Excel for reporting and insights"
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