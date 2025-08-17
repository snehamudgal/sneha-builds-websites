import { GraduationCap, MapPin, Calendar, Award, Target, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Manav Rachna International Institute of Research and Studies',
      period: '2020 - 2024',
      icon: GraduationCap
    },
    {
      degree: 'Class XII - Science Stream',
      institution: 'Rawal International School',
      period: 'Completed 2020',
      icon: Award
    },
    {
      degree: 'Class X',
      institution: 'Rawal International School',
      period: 'Completed 2018',
      icon: Award
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, education, and aspirations in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info & Description */}
          <div className="space-y-8">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-primary" />
                  <span>Who I Am</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="text-base leading-relaxed">
                  I'm a passionate Computer Science Engineer and Full-Stack Developer based in Faridabad, India. 
                  My journey in technology began with a curiosity about how digital solutions can solve real-world 
                  problems and has evolved into a deep commitment to creating innovative web applications and 
                  data-driven insights.
                </p>
                <p className="text-base leading-relaxed">
                  With expertise spanning from frontend technologies like React and JavaScript to backend 
                  development with Node.js and database management, I bring a holistic approach to software 
                  development. My experience in data visualization with Tableau and analytics with Python 
                  allows me to bridge the gap between technical implementation and business insights.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Faridabad, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <span className="w-4 h-4 text-primary font-bold">@</span>
                  <a href="mailto:snehamudgal04@gmail.com" className="hover:text-primary transition-colors">
                    snehamudgal04@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <span className="w-4 h-4 text-primary font-bold">#</span>
                  <a href="tel:9871823396" className="hover:text-primary transition-colors">
                    +91 9871823396
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Career Goals */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span>Career Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="text-base leading-relaxed">
                  I aspire to contribute to impactful projects that leverage cutting-edge technologies to 
                  create meaningful solutions. My goal is to continue growing as a full-stack developer 
                  while expanding my expertise in emerging technologies like AI, cloud computing, and 
                  advanced data analytics to drive innovation in the tech industry.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                <span>Education</span>
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <Card 
                      key={index}
                      className={`project-card animate-fade-in delay-${index * 100}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-1">{edu.degree}</h4>
                            <p className="text-muted-foreground mb-2">{edu.institution}</p>
                            <div className="flex items-center space-x-2 text-sm text-primary">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Key Achievements */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span>Key Highlights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span>Developed multiple full-stack web applications using modern technologies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span>Created comprehensive data visualization dashboards with Tableau</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span>Proficient in both frontend and backend development technologies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span>Strong foundation in data structures, algorithms, and problem-solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;