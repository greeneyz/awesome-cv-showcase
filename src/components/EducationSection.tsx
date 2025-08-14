import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Masters in Global IT Management",
      specialization: "Work Informatics",
      institution: "University of Turku",
      location: "Finland",
      type: "Masters Degree",
      icon: GraduationCap
    },
    {
      degree: "Bachelor in Software Engineering",
      institution: "International Islamic University",
      location: "Islamabad, Pakistan",
      type: "Bachelor Degree",
      icon: GraduationCap
    },
    {
      degree: "Diploma in Big Data Analytics",
      institution: "Arcada University",
      location: "Helsinki, Finland",
      type: "Diploma",
      icon: BookOpen
    }
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      code: "AZ-204",
      issuer: "Microsoft",
      type: "Cloud Development",
      date: "May 2022"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      type: "Cloud Fundamentals",
      date: "Sept 2020"
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      type: "Data Engineering",
      date: "Jun 2023"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      code: "Foundational",
      issuer: "Amazon Web Services",
      type: "Cloud Fundamentals",
      date: "Aug 2023"
    },
    {
      name: "ITIL® Foundation Certification",
      code: "IT Service Management",
      issuer: "ITIL",
      type: "Service Management",
      date: "Apr 2015"
    }
  ];

  const courses = [
    {
      name: "Microsoft Fabrics Data Engineering",
      provider: "Microsoft",
      focus: "Data Engineering",
      date: "May 2025"
    },
    {
      name: "Microsoft Azure DevOps",
      provider: "Microsoft",
      focus: "DevOps & CI/CD",
      date: "Jun 2025"
    },
    {
      name: "The Data Scientist's Toolbox",
      provider: "Coursera",
      focus: "Data Science",
      date: "Sept 2016"
    },
    {
      name: "Machine Learning",
      provider: "Coursera",
      focus: "AI & ML",
      date: "Nov 2017"
    },
    {
      name: "Knowledge Management and Big Data in Business",
      provider: "Coursera",
      focus: "Data Management",
      date: "Nov 2017"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development across multiple disciplines, 
            combining academic excellence with industry-recognized certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <edu.icon className="w-6 h-6 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground leading-snug">
                        {edu.degree}
                      </CardTitle>
                      {edu.specialization && (
                        <p className="text-primary font-medium">{edu.specialization}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-medium text-foreground">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                  <Badge variant="outline" className="mt-2 text-primary border-primary">
                    {edu.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground leading-snug mb-1">
                        {cert.name}
                      </h4>
                      {cert.code && (
                        <p className="text-primary text-sm font-medium">Code: {cert.code}</p>
                      )}
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Professional Courses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Professional Courses</h3>
            </div>
            
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index + 7) * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground leading-snug mb-1">
                        {course.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{course.provider}</p>
                      <Badge variant="outline" className="mt-2 text-xs text-primary border-primary">
                        {course.focus}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Highlighted Roles */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-glow animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
              <CardHeader>
                <CardTitle className="text-lg">Highlighted Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span>Senior Software Engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    <span>Data Engineer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};