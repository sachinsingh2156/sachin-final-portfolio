import { Brain, Cloud, Code2, GraduationCap, Shield, Users, FileText, type LucideIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'AI for Education',
    description:
      'Locally hosted LLMs, RAG over curricula, and teacher-in-the-loop systems deployed internationally with the Commonwealth of Learning.',
    icon: Brain,
  },
  {
    title: 'AI for Healthcare',
    description:
      'Clinical and healthcare-device systems — from neonatal monitoring dashboards in daily use at AIIMS Jodhpur to Ayurveda clinical workflows at AIIA.',
    icon: Code2,
  },
  {
    title: 'Full-Stack & Cloud',
    description:
      'Production web platforms with React, Django, Node.js and cloud pipelines on GCP and AWS — research systems that ship to real users.',
    icon: Cloud,
  },
];

const highlights: { text: string; icon: LucideIcon }[] = [
  { text: 'PhD in Computer Science, IIT Jodhpur', icon: GraduationCap },
  { text: '5 peer-reviewed publications on Google Scholar', icon: FileText },
  { text: 'Teaching Assistant for 150+ M.Tech students', icon: Users },
  { text: 'Police Duty Management System — live for 1500+ personnel', icon: Shield },
];

const stats = [
  { value: '5', label: 'Publications' },
  { value: '5', label: 'Commonwealth Countries' },
  { value: '150+', label: 'Students Mentored' },
  { value: '1500+', label: 'OERs Published' },
];

const focus = ['AI for Education', 'AI for Healthcare', 'LLMs & RAG', 'Full-Stack Development', 'Research'];

const About = () => (
  <section id="about" className="section-shell scroll-mt-8">
    <SectionHeader
      eyebrow="About"
      title="What I Do"
      subtitle="Applied AI for education and healthcare — research systems that deploy at clinical and international scale."
    />

    {/* Services */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {services.map(({ title, description, icon: Icon }, i) => (
        <div
          key={title}
          className="reveal ios-glass p-8 rounded-[32px] hover:bg-ink/5 transition-all duration-300 group"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="w-12 h-12 rounded-2xl bg-ink/5 flex items-center justify-center text-ink/60 group-hover:text-tiffany-ink group-hover:scale-110 transition-all duration-300 mb-6">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium text-ink tracking-tight mb-3">{title}</h3>
          <p className="text-ink/50 text-sm leading-relaxed font-light">{description}</p>
        </div>
      ))}
    </div>

    {/* Story + highlights */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="reveal ios-glass rounded-[32px] p-8 md:p-10 lg:col-span-7">
        <h3 className="text-xl font-medium text-ink tracking-tight mb-5">My Journey</h3>
        <div className="space-y-4 text-ink/60 font-light leading-relaxed">
          <p>
            I'm a PhD student in Computer Science and Engineering at IIT Jodhpur, working on applied AI for education
            and healthcare devices. My education work includes Teacher-in-the-Loop with the Commonwealth of Learning
            (Vancouver, Canada) — locally hosted, retrieval-grounded LLMs with mandatory teacher review, serving five
            Commonwealth countries.
          </p>
          <p>
            On the healthcare side I build and deploy clinical systems end to end, including a neonatal monitoring
            dashboard in daily use at AIIMS Jodhpur and digital clinical workflows with AIIA Delhi. I have five
            peer-reviewed publications spanning agentic AI for learning and AI methods in healthcare.
          </p>
          <p>
            As a Teaching Assistant I mentor students while continuing to ship research software. I aim to contribute
            to AI for social good in education and health.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {focus.map((f) => (
            <span key={f} className="tag">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal ios-glass rounded-[28px] p-5 hover:bg-ink/5 transition-colors"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="text-3xl font-medium text-ink tracking-tight">{s.value}</div>
            <div className="text-xs text-ink/40 mt-1">{s.label}</div>
          </div>
        ))}
        <div className="reveal ios-glass rounded-[28px] p-5 col-span-2 space-y-3.5">
          {highlights.map(({ text, icon: Icon }) => (
            <div key={text} className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-ink/5 text-tiffany-ink shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm text-ink/70 leading-snug pt-1">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
