import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe, Code } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Code, label: "Years Experience", value: "8+" },
    { icon: Globe, label: "Countries Worked", value: "3+" },
    { icon: Award, label: "Certifications", value: "4+" },
    { icon: GraduationCap, label: "Degrees", value: "3" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate technology professional with a unique blend of technical expertise 
            and international experience, dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-slideIn">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 8 years of experience in software development, I've had the privilege of working 
                across multiple continents and with diverse teams. My journey began with a passion for 
                problem-solving and has evolved into expertise in building scalable, cloud-native applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in developing robust data engineering capabilities, designing and maintaining ETL pipelines, 
                performing data transformation using Python, Pandas, and SQL, and delivering actionable insights 
                through Power BI, Tableau, and Jupyter notebooks.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary">Innovation</Badge>
                <Badge variant="outline" className="text-primary border-primary">Quality</Badge>
                <Badge variant="outline" className="text-primary border-primary">Collaboration</Badge>
                <Badge variant="outline" className="text-primary border-primary">Continuous Learning</Badge>
                <Badge variant="outline" className="text-primary border-primary">Excellence</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Languages</h4>
              <div className="flex gap-4">
                <Badge className="bg-primary text-primary-foreground">English - Fluent</Badge>
                <Badge className="bg-primary text-primary-foreground">Finnish - Proficient</Badge>
              </div>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};