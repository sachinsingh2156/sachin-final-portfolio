import { Award, Briefcase, MapPin, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'smartstudent.ai',
    duration: 'Jul 2025 – Feb 2026',
    location: 'Remote',
    type: 'Industry',
    current: false,
    description:
      'Built AI-powered education products end to end — SmartStudent academic platform and ScoreSure examination system with OCR-based evaluation.',
    responsibilities: [
      'Developed SmartStudent with 10+ modules and ScoreSure OCR-based automated evaluation',
      'Built React + TypeScript dashboards and Node.js/Express + Django backends for 5,000+ records',
      'Kept API response times under 200ms; CI/CD pipelines cut deployment time by 60%',
    ],
    impact: '10+ modules shipped · APIs under 200ms',
    skills: ['React', 'TypeScript', 'Node.js', 'Django', 'OCR', 'CI/CD'],
  },
  {
    title: 'Researcher & Developer',
    company: 'IIT Jodhpur · Commonwealth of Learning (COL), Canada',
    duration: 'Aug 2025 – Jun 2026',
    location: 'Jodhpur / Vancouver (remote)',
    type: 'Research',
    current: true,
    description:
      'Contributing to Teacher-in-the-Loop (teacherintheloop.ai) — a generative-AI platform for curriculum-aligned lesson plans, worksheets and assessments with mandatory teacher review before publication.',
    responsibilities: [
      'Built local LLM + RAG pipelines (Llama 3.2, Qwen2.5 via Ollama) over curricula and competency frameworks',
      'Added maths validation, AI safety guardrails, and LaTeX/PDF rendering; response time cut from minutes to seconds',
      'Supported pilots across India, Ghana, Jamaica, Kenya and Nigeria (300 teachers, 30 mentors)',
    ],
    impact: '1,500+ peer-reviewed OERs · AIED 2026 paper',
    skills: ['LLMs', 'RAG', 'Ollama', 'EdTech', 'Human-in-the-Loop'],
  },
  {
    title: 'Teaching Assistant',
    company: 'Indian Institute of Technology Jodhpur',
    duration: 'May 2024 – Present',
    location: 'Jodhpur, India',
    type: 'Academic',
    current: true,
    description:
      'Assisting in labs and coursework for 150+ M.Tech and B.Sc students across software engineering, cloud and AI foundations.',
    responsibilities: [
      'Conducted lab sessions for Software & Data Engineering and Virtualization & Cloud Computing',
      'Supported Foundations of AI, Visualization and Storytelling, and Foundations of Computing',
      'Guided students through programming assignments and project evaluation',
    ],
    impact: '150+ students mentored',
    skills: ['Teaching', 'Software Engineering', 'Cloud Computing', 'Mentoring'],
  },
  {
    title: 'Internship Coordinator',
    company: 'Indian Institute of Technology Jodhpur',
    duration: 'May – Jul 2024',
    location: 'Jodhpur, India',
    type: 'Leadership',
    current: false,
    description: 'Managed and mentored 11 summer interns, guiding them through research projects and professional development.',
    responsibilities: [
      'Coordinated internship programs for summer students',
      'Guided interns through research projects',
      'Ran coding tasks and technical evaluations',
    ],
    impact: '11 interns successfully mentored',
    skills: ['Project Management', 'Leadership', 'Research Guidance', 'Team Coordination'],
  },
  {
    title: 'Freelance Academic Writer',
    company: 'Paperpedia Pvt. Ltd.',
    duration: 'Sep 2023 – Present',
    location: 'Remote',
    type: 'Freelance',
    current: true,
    description: 'Creating high-quality academic content and technical scripts with a focus on programming languages.',
    responsibilities: [
      'Authored 50+ academic scripts in C, Java, and Python',
      'Researched thoroughly for technical accuracy',
      'Managed multiple projects with tight deadlines',
    ],
    impact: '50+ scripts delivered, 100% client satisfaction',
    skills: ['Technical Writing', 'Programming', 'Research', 'Time Management'],
  },
  {
    title: 'Full-Stack Intern',
    company: 'Web Stack Academy',
    duration: 'Feb – Apr 2024',
    location: 'Remote',
    type: 'Technical',
    current: false,
    description: 'Built user-friendly interfaces and integrated backend services in an Agile team.',
    responsibilities: [
      'Developed responsive front-ends with React.js',
      'Integrated backend services with Express.js and MongoDB',
      'Collaborated with a team of 5 using Agile, code reviews and sprint planning',
    ],
    impact: '30% higher user engagement, 20% better mobile accessibility',
    skills: ['React.js', 'Express.js', 'MongoDB', 'Agile'],
  },
  {
    title: 'Student Placement Coordinator',
    company: 'Jain (Deemed-to-be University)',
    duration: 'Aug 2023 – May 2024',
    location: 'Bangalore, India',
    type: 'Leadership',
    current: false,
    description: 'Coordinated placement activities for engineering students, liaising with companies and organising recruitment drives.',
    responsibilities: [
      'Liaised with recruiting companies and HR teams',
      'Organised campus recruitment drives and job fairs',
      'Supported peers in interview preparation',
    ],
    impact: 'Placement coordination for the entire batch',
    skills: ['Communication', 'Organisation', 'Leadership', 'Stakeholder Management'],
  },
  {
    title: 'IoT Intern',
    company: 'EMERTXE – The Future-Ready IT Institute',
    duration: 'Mar – May 2023',
    location: 'Bangalore, India',
    type: 'Technical',
    current: false,
    description: 'Online IoT internship with hands-on programming and SDLC-based project building.',
    responsibilities: [
      'Built foundational skills in C and microcontrollers',
      'Built IoT projects following the SDLC',
      'Completed NSDC / ESSCI affiliated program tasks',
    ],
    impact: 'Completed with Certificate ID EI23_007',
    skills: ['IoT', 'C Programming', 'Microcontrollers', 'Embedded Systems'],
  },
];

const summary = [
  { value: '150+', label: 'Students Mentored', icon: Users },
  { value: '5+', label: 'Leadership Roles', icon: Award },
  { value: '100%', label: 'Client Satisfaction', icon: Briefcase },
];

const Experience = () => (
  <section id="experience" className="section-shell scroll-mt-8">
    <SectionHeader
      eyebrow="Experience"
      title="Experience & Leadership"
      subtitle="Industry, international research collaboration, teaching and leadership — building systems that reach real users."
    />

    <div className="space-y-4">
      {experiences.map((exp) => (
        <article
          key={exp.title + exp.company}
          className="reveal ios-glass rounded-[32px] p-6 md:p-8 hover:bg-ink/5 transition-all duration-300 group grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Meta */}
          <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-2 flex-wrap items-center md:items-start">
            <span className="flex items-center gap-2 text-sm font-mono text-ink/70">
              {exp.current && <span className="h-2 w-2 rounded-full bg-tiffany shadow-[0_0_10px_rgba(129,216,208,0.8)]" />}
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink/40">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
            <span className="tag md:mt-2">{exp.type}</span>
          </div>

          {/* Role */}
          <div className="md:col-span-6">
            <h3 className="text-xl font-medium text-ink tracking-tight group-hover:text-tiffany-ink transition-colors">{exp.title}</h3>
            <p className="text-sm text-ink/50 mt-1">{exp.company}</p>
            <p className="text-sm text-ink/60 font-light leading-relaxed mt-4">{exp.description}</p>
            <ul className="mt-4 space-y-1.5">
              {exp.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-ink/60 font-light">
                  <span className="mt-[8px] h-1 w-1 rounded-full bg-ink/40 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & skills */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="rounded-2xl bg-tiffany/10 border border-tiffany/20 p-4">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium text-tiffany-ink mb-1.5">
                <Award className="w-3.5 h-3.5" />
                Impact
              </div>
              <p className="text-sm text-ink/80 leading-snug">{exp.impact}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      {summary.map(({ value, label, icon: Icon }) => (
        <div key={label} className="reveal ios-glass rounded-[28px] p-6 flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-ink/5 text-tiffany-ink">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-medium text-ink tracking-tight">{value}</div>
            <div className="text-xs text-ink/40">{label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
