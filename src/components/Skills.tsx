import { ArrowUpRight, BadgeCheck, Code2, Database, Cpu, Wrench, Layers, Smartphone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'C', level: 80 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Layers,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Django', level: 88 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
  },
  {
    title: 'ML & AI Frameworks',
    icon: Cpu,
    skills: [
      { name: 'Scikit-learn', level: 88 },
      { name: 'PyTorch', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'NLP', level: 80 },
      { name: 'OpenCV', level: 75 },
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'GCP', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
  {
    title: 'Mobile & Others',
    icon: Smartphone,
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Flutter', level: 85 },
      { name: 'Agile', level: 85 },
      { name: 'DevOps', level: 75 },
      { name: 'GraphQL', level: 70 },
    ],
  },
];

const certifications = [
  {
    name: 'IBM Full Stack Software Developer',
    issuer: 'IBM',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Tj5spea3y4tPSF5QzyO98SQih09RHANl/view?usp=sharing',
  },
  {
    name: 'Project Management',
    issuer: 'Simplilearn',
    year: '2025',
    link: 'https://drive.google.com/file/d/1UYVDEC5nkBVwhJL5noN3qj_mntLQW_Xk/view?usp=sharing',
  },
];

const Skills = () => (
  <section id="skills" className="section-shell scroll-mt-8">
    <SectionHeader
      eyebrow="Skills"
      title="Toolkit"
      subtitle="The languages, frameworks and platforms I reach for across the full stack."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {skillCategories.map(({ title, icon: Icon, skills }, i) => (
        <div
          key={title}
          className="reveal ios-glass rounded-[32px] p-7 hover:bg-ink/5 transition-all duration-300 group"
          style={{ transitionDelay: `${(i % 3) * 70}ms` }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-ink/5 flex items-center justify-center text-ink/60 group-hover:text-tiffany-ink transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-medium text-ink tracking-tight">{title}</h3>
          </div>
          <div className="space-y-3.5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm text-ink/80">{skill.name}</span>
                  <span className="text-[11px] text-ink/40 font-mono">{skill.level}%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-ink/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-tiffany to-blue-500 transition-[width] duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert) => (
        <a
          key={cert.name}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal ios-glass rounded-[32px] p-6 flex items-center justify-between gap-4 hover:bg-ink/5 transition-colors duration-300 group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-tiffany/[0.15] border border-tiffany/30 flex items-center justify-center text-tiffany-ink">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="text-ink font-medium tracking-tight">{cert.name}</h4>
              <p className="text-xs text-ink/40 mt-0.5">
                {cert.issuer} · {cert.year} · Verified
              </p>
            </div>
          </div>
          <div className="h-10 w-10 shrink-0 rounded-full bg-ink/5 flex items-center justify-center group-hover:bg-tiffany group-hover:text-black transition-all duration-300 text-ink/30">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Skills;
