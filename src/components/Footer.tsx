import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-data-neutral text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DataAnalyst Portfolio</h3>
            <p className="text-background/80 leading-relaxed">
              Passionate about transforming data into insights. Ready to start my journey 
              in data analysis and contribute to data-driven decision making.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-background transition-colors">
                Home
              </a>
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">
                About
              </a>
              <a href="#skills" className="block text-background/80 hover:text-background transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-background/80 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Data Analyst Portfolio. Built with passion for data and analytics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;