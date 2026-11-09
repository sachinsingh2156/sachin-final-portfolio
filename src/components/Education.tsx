import { GraduationCap, School } from 'lucide-react';
import SectionHeader from './SectionHeader';

const education = [
  {
    degree: 'PhD Scholar',
    field: 'Computer Science and Engineering',
    institution: 'Indian Institute of Technology Jodhpur',
    duration: 'Jul 2026 – Present',
    current: true,
    description:
      'Applied AI for education and healthcare devices — locally hosted LLMs with human-in-the-loop review, agentic AI for learning, and clinical ML systems.',
    icon: GraduationCap,
  },
  {
    degree: 'Master of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Indian Institute of Technology Jodhpur',
    duration: 'Jul 2024 – Jun 2026',
    current: false,
    description: 'Advanced coursework in ML, Software Engineering, Cloud Computing, and AI for Healthcare.',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science (Software Engineering)',
    institution: 'Jain (Deemed-to-be University)',
    duration: 'Jul 2020 – Jun 2024',
    current: false,
    description: 'Specialised in software engineering with a focus on full-stack development and project management.',
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary (Class 12)',
    field: 'Science',
    institution: 'NEB Board',
    duration: '2018',
    current: false,
    description: 'Science stream with Mathematics, Physics, Chemistry, and Biology.',
    icon: School,
  },
  {
    degree: 'Secondary (Class 10)',
    field: 'General',
    institution: 'SLC Board',
    duration: '2016',
    current: false,
    description: 'Strong foundation in mathematics and sciences.',
    icon: School,
  },
];

const Education = () => (
  <section id="education" className="section-shell scroll-mt-8">
    <SectionHeader
      eyebrow="Education"
      title="Academic Path"
      subtitle="From software engineering foundations to research-driven PhD work at IIT Jodhpur."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map(({ icon: Icon, ...edu }, i) => (
        <div
          key={edu.degree + edu.institution}
          className={`reveal ios-glass rounded-[32px] p-7 md:p-8 hover:bg-ink/5 transition-all duration-300 group relative overflow-hidden ${
            edu.current ? 'tiffany-glow' : ''
          }`}
          style={{ transitionDelay: `${(i % 2) * 80}ms` }}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-ink/5 flex items-center justify-center text-ink/60 group-hover:text-tiffany-ink transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {edu.current && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-tiffany/[0.15] border border-tiffany/30 text-[10px] font-medium text-tiffany-ink tracking-wider uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-tiffany" />
                  Current
                </span>
              )}
              <span className="tag font-mono">{edu.duration}</span>
            </div>
          </div>
          <h3 className="text-xl font-medium text-ink tracking-tight">{edu.degree}</h3>
          <p className="text-sm text-tiffany-ink mt-1">{edu.field}</p>
          <p className="text-sm text-ink/70 mt-3 font-medium">{edu.institution}</p>
          <p className="text-sm text-ink/50 mt-2 font-light leading-relaxed">{edu.description}</p>
          {edu.current && (
            <div className="absolute right-[-30px] bottom-[-50px] w-40 h-40 bg-gradient-to-br from-tiffany to-transparent rounded-full opacity-[0.15] blur-2xl pointer-events-none" />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Education;
