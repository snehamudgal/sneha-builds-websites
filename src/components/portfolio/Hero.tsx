import { Github, Linkedin, Mail, ArrowDown, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = ['React', 'Node.js', 'Python', 'SQL', 'Tableau'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Sneha Mudgal
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Computer Science Engineer & Fullstack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating innovative web solutions and bringing ideas to life through code. 
              I specialize in full-stack development with expertise in modern technologies and data visualization.
            </p>

            {/* Skills Highlight */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-primary hover:opacity-90 glow-hover"
              >
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="scale-hover"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://linkedin.com/in/sneha-mudgal-5a2649254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors scale-hover"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors scale-hover"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:snehamudgal04@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors scale-hover"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              <img
                src={profileImage}
                alt="Sneha Mudgal - Computer Science Engineer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-custom-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-custom-md animate-float">
                <Database className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#projects')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;