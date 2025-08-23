import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Cloud, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Technologies Mastered', value: '20+', icon: Brain },
    { label: 'Cloud Experience', value: '3+ Years', icon: Cloud },
    { label: 'Team Leadership', value: '150+ Students', icon: Users },
  ];

  const highlights = [
    'M.Tech in Computer Science from IIT Jodhpur',
    'Published Research in Sleep Monitoring Systems',
    'Teaching Assistant for 150+ M.Tech students',
    'Government Project: Police Duty Management System',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions at the intersection of 
            technology and real-world problems
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass p-6 text-center hover-glow">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing M.Tech in Computer Science at IIT Jodhpur, I'm passionate 
                about leveraging technology to solve real-world challenges. My journey spans 
                from developing AI-powered healthcare solutions to building government systems 
                that serve thousands of users.
              </p>
              <p>
                With expertise in full-stack development, machine learning, and cloud computing, 
                I've successfully delivered projects that combine technical innovation with 
                practical impact. My work has been recognized through published research and 
                real-world deployments.
              </p>
              <p>
                As a Teaching Assistant at IIT Jodhpur, I mentor students while continuously 
                expanding my knowledge in emerging technologies. I believe in the power of 
                continuous learning and collaborative innovation.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">Key Highlights</h3>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-3">Currently Focused On</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Machine Learning',
                  'Cloud Computing', 
                  'Full-Stack Development',
                  'Research',
                  'Teaching'
                ].map((focus) => (
                  <Badge key={focus} variant="secondary" className="bg-primary/10 text-primary">
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;