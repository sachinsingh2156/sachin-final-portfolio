import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Cpu, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 80 },
        { name: 'SQL', level: 85 }
      ],
      color: 'primary'
    },
    {
      title: 'Web Technologies',
      icon: Layers,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Django', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ],
      color: 'secondary'
    },
    {
      title: 'ML & AI Frameworks',
      icon: Cpu,
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'OpenCV', level: 75 },
        { name: 'NLP', level: 80 }
      ],
      color: 'accent'
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'GCP', level: 70 }
      ],
      color: 'neon-purple'
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Kubernetes', level: 70 }
      ],
      color: 'neon-cyan'
    },
    {
      title: 'Mobile & Others',
      icon: Cloud,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'Agile', level: 85 },
        { name: 'DevOps', level: 75 }
      ],
      color: 'terminal-green'
    }
  ];

  const certifications = [
    {
      name: 'IBM Full Stack Software Developer',
      issuer: 'IBM',
      year: '2024',
      verified: true,
      link: 'https://drive.google.com/file/d/1Tj5spea3y4tPSF5QzyO98SQih09RHANl/view?usp=sharing'
    },
    {
      name: 'Project Management',
      issuer: 'Simply Learn',
      year: '2025',
      verified: true,
      link: 'https://drive.google.com/file/d/1UYVDEC5nkBVwhJL5noN3qj_mntLQW_Xk/view?usp=sharing'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass p-6 hover-glow group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 group-hover:shadow-glow"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="glass p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer group">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/30">
                      Verified
                    </Badge>
                  )}
                </div>
              </a>
            ))}
          </div>
        </Card>

        {/* Technical Proficiency Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="glass p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">5+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">20+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-3xl font-bold neon-text mb-2">15+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;