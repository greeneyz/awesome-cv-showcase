import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Phone, Globe, Download } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asim.imtiaz@example.com",
      href: "mailto:asim.imtiaz@example.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/imtiazasim",
      href: "https://www.linkedin.com/in/imtiazasim",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/asim-imtiaz",
      href: "https://github.com/asim-imtiaz",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Finland & Remote",
      href: null,
      primary: false
    },
    {
      icon: Globe,
      label: "Available for",
      value: "Remote & On-site opportunities",
      href: null,
      primary: false
    }
  ];

  const availability = [
    "Full-time positions",
    "Consulting projects",
    "Technical mentoring",
    "Architecture reviews"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always excited to connect with fellow professionals and innovative teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slideIn">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <contact.icon className={`w-5 h-5 ${contact.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-primary-foreground shadow-glow">
              <CardHeader>
                <CardTitle className="text-xl">Currently Available For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Summary */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-glow transition-all"
                  size="lg"
                  onClick={() => {
                    // Create a temporary link to download PDF
                    const link = document.createElement('a');
                    link.href = '/Asim-Imtiaz-R.pdf';
                    link.download = 'Asim_Imtiaz_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/imtiazasim', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Certified Azure Developer Associate and AWS Cloud Practitioner with DevOps experience 
                  including cloud deployments, secure authentication using Keycloak, and infrastructure 
                  automation. I work fluently in agile environments, applying SAFe and Scrum methodologies 
                  to deliver high-impact software efficiently and collaboratively.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground">8+ Years Experience</Badge>
                  <Badge variant="outline" className="text-primary border-primary">Azure Certified</Badge>
                  <Badge variant="outline" className="text-primary border-primary">AWS Certified</Badge>
                  <Badge variant="outline" className="text-primary border-primary">Full Stack</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Designed for impact and performance
          </p>
        </div>
      </div>
    </section>
  );
};