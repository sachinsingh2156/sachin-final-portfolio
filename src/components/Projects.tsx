import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Zap, Hospital, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Prescription and Medicine Management System',
      description: 'AI-powered healthcare app for 3 roles (Doctor, Patient, Guardian) with voice and image input for prescription creation, achieving 95%+ NLP accuracy.',
      type: 'Course Project',
      duration: 'January – April 2024',
      impact: [
        '50+ active users',
        '95%+ NLP accuracy',
        '90% reduction in missed doses',
        '5+ minutes saved per prescription'
      ],
      technologies: ['Flutter', 'Django', 'Firebase', 'PostgreSQL', 'NLP', 'Voice Recognition'],
      icon: Hospital,
      features: [
        'Voice and image-based prescription creation',
        'Real-time medicine alerts with audio/visual cues',
        'Guardian notification system',
        'Dynamic medicine inventory tracking',
        'Full CRUD operations for prescriptions'
      ]
    },
    {
      title: 'Police Duty Management System',
      description: 'Live duty management system deployed for 1500+ police personnel in Jodhpur Police, automating shift scheduling and workload balancing.',
      type: 'Government Project',
      duration: 'June – August 2024',
      impact: [
        '1500+ active users',
        '70% reduction in manual errors',
        '2+ hours to 15 minutes efficiency gain',
        'Currently in production use'
      ],
      technologies: ['Django', 'React', 'SQLite', 'REST APIs', 'Tailwind CSS'],
      icon: Shield,
      features: [
        'Automated duty scheduling',
        'Role-based dashboards (Admin, Officer)',
        'Real-time assignment tracking',
        'Historical duty records and reporting',
        'Fair workload distribution algorithm'
      ]
    },
    {
      title: 'HomelyHub - Vacation Rental Marketplace',
      description: 'Robust marketplace web application connecting travelers with property owners for unique vacation rentals with advanced booking features.',
      type: 'React Project',
      duration: 'Personal Project',
      impact: [
        'Full-stack implementation',
        'Real-time booking system',
        'Mobile-responsive design',
        'Secure payment processing'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Payment APIs'],
      icon: Users,
      features: [
        'Property listing and search',
        'Real-time booking system',
        'User reviews and ratings',
        'Secure payment processing',
        'Mobile-optimized interface'
      ]
    },
    {
      title: 'Skin Cancer Classification Using Kernel Methods',
      description: 'Medical image classification system using KPCA and SVM for benign and malignant skin lesion detection with high accuracy.',
      type: 'ML Research Project',
      duration: 'Research Project',
      impact: [
        '92% accuracy achieved',
        '95% recall rate',
        'Minimized false negatives',
        'Cross-validation verified'
      ],
      technologies: ['Python', 'SVM', 'KPCA', 'Scikit-learn', 'OpenCV', 'Machine Learning'],
      icon: Zap,
      features: [
        'Advanced preprocessing with Min-Max Scaling',
        'Z-Score Normalization implementation',
        'Kernel PCA feature reduction',
        'SVM classification with optimization',
        'Comprehensive model evaluation'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning healthcare, government systems, and cutting-edge research
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass p-8 hover-glow group relative overflow-hidden">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-glow transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.impact.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium text-foreground">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                <div className="space-y-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="cyber" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
                <Button variant="glass" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;