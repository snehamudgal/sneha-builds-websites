import { ExternalLink, Github, Monitor, Database, BarChart3, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing my skills, projects, and experience with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Monitor,
      liveDemo: '#',
      sourceCode: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Netflix Clone - Frontend',
      description: 'A Netflix-inspired streaming platform interface with dynamic content display, responsive design, and interactive features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      icon: Monitor,
      liveDemo: '#',
      sourceCode: '#',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: 'E-Commerce Store Master',
      description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and secure payment integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      icon: ShoppingCart,
      liveDemo: '#',
      sourceCode: '#',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'HR Tableau Project',
      description: 'Comprehensive HR analytics dashboard with interactive visualizations for employee performance, recruitment metrics, and workforce insights.',
      technologies: ['Tableau', 'Data Visualization', 'Analytics', 'SQL'],
      icon: BarChart3,
      liveDemo: '#',
      sourceCode: '#',
      gradient: 'from-orange-500 to-yellow-600'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving through various web development 
            and data visualization projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`project-card animate-fade-in delay-${index * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.sourceCode, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open('https://github.com', '_blank')}
            className="scale-hover"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;