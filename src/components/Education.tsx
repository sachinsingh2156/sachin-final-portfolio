import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Indian Institute of Technology Jodhpur',
      duration: '2024 – Present',
      grade: 'CGPA: 6.73 (Current)',
      status: 'current',
      description: 'Advanced coursework in ML, Software Engineering, Cloud Computing, and AI for Healthcare'
    },
    {
      degree: 'Bachelor of Technology', 
      field: 'Computer Engineering (Software Engineering)',
      institution: 'Jain (Deemed-to-be University)',
      duration: '2020 – 2024',
      grade: 'CGPA: 9.20',
      status: 'completed',
      description: 'Specialized in software engineering with focus on full-stack development and project management'
    },
    {
      degree: 'Higher Secondary (Class 12)',
      field: 'Science',
      institution: 'NEB Board',
      duration: '2018',
      grade: '79.50%',
      status: 'completed',
      description: 'Science stream with Mathematics, Physics, and Chemistry'
    },
    {
      degree: 'Secondary (Class 10)',
      field: 'General',
      institution: 'SLC Board', 
      duration: '2016',
      grade: '88.75%',
      status: 'completed',
      description: 'Strong foundation in mathematics and sciences'
    }
  ];

  const keyCourses = [
    'Machine Learning',
    'Software and Data Engineering', 
    'Virtualization and Cloud Computing',
    'Advanced Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Artificial Intelligence',
    'AI for Healthcare',
    'Software Quality Management',
    'Software Project Management'
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey focused on cutting-edge technology and innovation
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="glass p-8 hover-glow relative overflow-hidden">
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                {edu.status === 'current' && (
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    Current
                  </Badge>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Icon and Duration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-secondary">{edu.grade}</span>
                  </div>
                </div>

                {/* Center: Degree Info */}
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-foreground">{edu.field}</h4>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Courses */}
        <Card className="glass p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Key Courses Taken
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {keyCourses.map((course, index) => (
              <div 
                key={index}
                className="p-3 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors text-center"
              >
                <span className="text-sm font-medium text-foreground">{course}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;