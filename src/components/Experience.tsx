import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'Indian Institute of Technology Jodhpur',
      duration: 'Current',
      location: 'Jodhpur, India',
      type: 'Academic',
      description: 'Assisting in labs and coursework for 150+ M.Tech students in advanced computer science courses.',
      responsibilities: [
        'Conducted lab sessions for Software & Data Engineering',
        'Mentored students in Virtualization & Cloud Computing',
        'Provided guidance on complex programming assignments',
        'Evaluated student projects and provided feedback'
      ],
      impact: '150+ students mentored',
      skills: ['Teaching', 'Software Engineering', 'Cloud Computing', 'Mentoring']
    },
    {
      title: 'Internship Coordinator',
      company: 'Indian Institute of Technology Jodhpur',
      duration: 'May – July 2024',
      location: 'Jodhpur, India',
      type: 'Leadership',
      description: 'Managed and mentored 11 summer interns, guiding them through research projects and professional development.',
      responsibilities: [
        'Coordinated internship programs for summer students',
        'Guided interns through research projects',
        'Conducted coding tasks and technical evaluations',
        'Organized professional development activities'
      ],
      impact: '11 interns successfully mentored',
      skills: ['Project Management', 'Leadership', 'Research Guidance', 'Team Coordination']
    },
    {
      title: 'Full-Stack Intern',
      company: 'Web Stack Academy',
      duration: 'February – April 2024',
      location: 'Remote',
      type: 'Technical',
      description: 'Developed user-friendly interfaces and integrated backend services, working in an Agile environment.',
      responsibilities: [
        'Developed responsive front-end interfaces using React.js',
        'Integrated backend services with Express.js and MongoDB',
        'Collaborated with team of 5 developers using Agile methodologies',
        'Implemented responsive web designs for mobile users',
        'Participated in code reviews and sprint planning'
      ],
      impact: '30% increase in user engagement, 20% improvement in mobile accessibility',
      skills: ['React.js', 'Express.js', 'MongoDB', 'Agile', 'Team Collaboration']
    },
    {
      title: 'Student Placement Coordinator',
      company: 'Jain (Deemed-to-be University)',
      duration: 'August 2023 – May 2024',
      location: 'Bangalore, India',
      type: 'Leadership',
      description: 'Coordinated placement activities for engineering students, liaising with companies and organizing recruitment drives.',
      responsibilities: [
        'Coordinated placement activities for engineering students',
        'Liaised with recruiting companies and HR teams',
        'Organized campus recruitment drives and job fairs',
        'Supported peer students in interview preparation',
        'Managed student-recruiter communication channels'
      ],
      impact: 'Successful placement coordination for entire batch',
      skills: ['Communication', 'Organization', 'Leadership', 'Stakeholder Management']
    },
    {
      title: 'Freelance Academic Writer',
      company: 'Paperpedia Pvt. Ltd.',
      duration: 'September 2023 – Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Creating high-quality academic content and technical scripts with focus on programming languages.',
      responsibilities: [
        'Authored 50+ academic scripts in C, Java, and Python',
        'Conducted thorough research for technical accuracy',
        'Ensured content meets client specifications',
        'Managed multiple projects with tight deadlines',
        'Maintained 100% client satisfaction rate'
      ],
      impact: '50+ scripts delivered, 100% client satisfaction',
      skills: ['Technical Writing', 'Programming', 'Research', 'Time Management']
    },
    {
      title: 'IoT Intern',
      company: 'EMERTXE - The Future-Ready IT Institute',
      duration: 'March – May 2023',
      location: 'Bangalore, India',
      type: 'Technical',
      description: 'Completed comprehensive online internship on Internet of Things (IoT) with hands-on exposure to foundational programming and SDLC-based project building.',
      responsibilities: [
        'Developed foundational programming skills in C & Micro-Controllers',
        'Built IoT projects following Software Development Life Cycle (SDLC)',
        'Worked with NSDC and ESSCI affiliated programs',
        'Completed hands-on IoT development tasks and assignments',
        'Collaborated with industry professionals and mentors'
      ],
      impact: 'Successfully completed IoT internship with Certificate ID: EI23_007',
      skills: ['IoT', 'C Programming', 'Microcontrollers', 'SDLC', 'Embedded Systems']
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Academic': return 'bg-primary/20 text-primary';
      case 'Leadership': return 'bg-secondary/20 text-secondary';
      case 'Technical': return 'bg-accent/20 text-accent';
      case 'Freelance': return 'bg-neon-purple/20 text-neon-purple';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diverse experience spanning academia, industry, and leadership roles
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass p-8 hover-glow relative overflow-hidden">
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge className={getTypeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-3">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & Skills */}
                <div className="space-y-6">
                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-secondary" />
                      <h5 className="text-lg font-semibold text-secondary">Impact</h5>
                    </div>
                    <p className="text-sm font-medium text-foreground bg-secondary/10 p-3 rounded-lg">
                      {exp.impact}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-lg font-semibold text-primary mb-3">Skills Applied</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-primary/30 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="glass p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold neon-text mb-2">150+</div>
            <div className="text-muted-foreground">Students Mentored</div>
          </Card>
          <Card className="glass p-6 text-center">
            <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold neon-text mb-2">5+</div>
            <div className="text-muted-foreground">Leadership Roles</div>
          </Card>
          <Card className="glass p-6 text-center">
            <Briefcase className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold neon-text mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;