import { 
  Database, 
  BarChart3, 
  Code, 
  Layers, 
  Globe, 
  FileSpreadsheet, 
  Brain,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'SQL', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Python', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'C++', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'C', level: 75, color: 'from-gray-500 to-gray-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-500' },
        { name: 'React', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Tableau', level: 90, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Data Visualization', level: 85, color: 'from-pink-500 to-pink-600' },
        { name: 'Pandas', level: 80, color: 'from-teal-500 to-teal-600' },
        { name: 'Advanced Excel', level: 88, color: 'from-green-500 to-green-600' }
      ]
    },
    {
      title: 'Core Skills',
      icon: Brain,
      skills: [
        { name: 'Critical Thinking', level: 92, color: 'from-violet-500 to-violet-600' },
        { name: 'DSA', level: 85, color: 'from-red-500 to-red-600' }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number; color: string } }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: `${skill.level}%`,
            animation: 'slideIn 1s ease-out forwards'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of 
            software development and data analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className={`space-y-6 animate-fade-in delay-${categoryIndex * 200}`}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`animate-slide-up`}
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <SkillBar skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Linux', 
              'Problem Solving', 'Team Collaboration', 'Agile Methodology'
            ].map((skill, index) => (
              <span
                key={skill}
                className={`skill-badge animate-fade-in delay-${index * 50}`}
              >
                <Zap className="w-4 h-4 mr-2" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;