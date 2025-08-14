import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                <MapPin className="w-3 h-3 mr-1" />
                Finland & Remote
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Asim
                <span className="block text-primary-light">Imtiaz</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
                Senior Software Engineer
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Versatile Full Stack Developer with strong expertise in modern JavaScript frameworks 
              (React.js, Vue.js, Angular, Node.js, TypeScript) and cloud-native development across 
              AWS and Azure. Building scalable web and backend systems with a focus on innovation 
              and excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-glow transition-all"
                onClick={() => scrollToSection('experience')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/20">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile image placeholder */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-card shadow-glow animate-float">
                <div className="w-full h-full rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-foreground/60">AI</div>
                </div>
              </div>
              {/* Floating tech badges */}
              <Badge className="absolute top-16 -left-8 bg-primary-foreground text-primary animate-float" style={{ animationDelay: '1s' }}>
                React
              </Badge>
              <Badge className="absolute top-32 -right-12 bg-primary-foreground text-primary animate-float" style={{ animationDelay: '2s' }}>
                Azure
              </Badge>
              <Badge className="absolute bottom-32 -left-16 bg-primary-foreground text-primary animate-float" style={{ animationDelay: '3s' }}>
                TypeScript
              </Badge>
              <Badge className="absolute bottom-16 -right-8 bg-primary-foreground text-primary animate-float" style={{ animationDelay: '4s' }}>
                Node.js
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/20"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};