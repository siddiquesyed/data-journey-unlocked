import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-data-analyst.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                <span className="text-primary">Data Analyst</span>
                <br />
                Enthusiast
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate about transforming raw data into meaningful insights. 
                As a fresh graduate, I'm eager to apply my analytical skills and 
                help organizations make data-driven decisions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            <img
              src={heroImage}
              alt="Data Analysis Workspace"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;