import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Car,
  ChevronDown,
  Cloud,
  Cpu,
  FileHeart,
  GraduationCap,
  Hospital,
  Leaf,
  MessageSquare,
  Moon,
  Music,
  Scan,
  Shield,
  ShoppingBasket,
  Home,
  Users,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

type Visual = 'window' | 'ring' | 'bars' | 'terminal' | 'chart';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  impact: string[];
  technologies: string[];
  icon: LucideIcon;
  visual: Visual;
  /** Tailwind gradient classes for the preview area */
  tint: string;
  /** label shown inside ring / terminal visuals */
  mark: string;
}

const projects: Project[] = [
  {
    title: 'Teacher-in-the-Loop',
    subtitle: 'Commonwealth of Learning · teacherintheloop.ai',
    description:
      'Generative-AI platform producing curriculum-aligned lesson plans, worksheets and assessments with mandatory teacher review. Local open-source LLMs + RAG — no commercial APIs — preserving data sovereignty across five Commonwealth countries.',
    type: 'EdTech · Research',
    impact: ['1,500+ peer-reviewed OERs', 'Pilot: 300 teachers, 30 mentors', 'India, Ghana, Jamaica, Kenya, Nigeria'],
    technologies: ['Llama 3.2', 'Qwen2.5', 'Ollama', 'RAG', 'LaTeX/PDF', 'AI Safety Guardrails'],
    icon: Users,
    visual: 'ring',
    tint: 'from-tiffany/30 to-blue-600/10',
    mark: 'TiL',
  },
  {
    title: 'Conversational AI Teaching Assistant',
    subtitle: 'Local LLM Tutor for Classrooms',
    description:
      'Locally deployable AI tutor that explains topics through live chat and voice. Fine-tuned LLMs, RAG over lecture material, and context-aware speech synthesis in the teacher’s voice — grounded answers without cloud APIs.',
    type: 'EdTech · AI',
    impact: ['Multi-turn dialogue grounded in course content', 'Teacher-voice speech synthesis', 'Runs offline for low-resource classrooms'],
    technologies: ['Fine-tuned LLMs', 'RAG', 'Speech Synthesis', 'Python', 'TypeScript'],
    icon: MessageSquare,
    visual: 'window',
    tint: 'from-sky-500/25 to-transparent',
    mark: 'TUTOR',
  },
  {
    title: 'EMR System',
    subtitle: 'All India Institute of Ayurveda, Delhi',
    description:
      'Digital patient-record system for AIIA clinical workflows — replacing paper records with structured digital entries clinicians can store, search and retrieve.',
    type: 'Healthcare',
    impact: ['Paper → structured digital records', 'Searchable clinical entries', 'Built for AIIA Delhi workflows'],
    technologies: ['TypeScript', 'Python', 'REST APIs', 'PostgreSQL'],
    icon: FileHeart,
    visual: 'window',
    tint: 'from-emerald-500/25 to-transparent',
    mark: 'EMR',
  },
  {
    title: 'Adaptive Driving Behavior Recognition',
    subtitle: 'Few-/Zero-Shot Road Safety ML',
    description:
      'End-to-end ML pipeline that classifies driving as normal, drowsy or aggressive. Few-shot learning reaches 85–95% accuracy; a zero-shot detector handles unseen behaviours; TimeGPT adds temporal features.',
    type: 'ML Research',
    impact: ['85–95% few-shot accuracy', '70–85% zero-shot on unseen behaviours', 'TimeGPT temporal forecasting'],
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'TimeGPT'],
    icon: Car,
    visual: 'chart',
    tint: 'from-amber-500/20 to-transparent',
    mark: 'DRIVE',
  },
  {
    title: 'Smart Sleep Monitoring',
    subtitle: 'Sensor-Based ML · Published',
    description:
      'Sensor-based system that monitors sleep and uses machine learning to classify sleep patterns for low-cost home monitoring. Published in Tuijin Jishu / Journal of Propulsion Technology.',
    type: 'Healthcare · ML',
    impact: ['ML sleep-pattern classification', 'Low-cost home monitoring', 'Peer-reviewed publication (2024)'],
    technologies: ['Python', 'Machine Learning', 'Sensors', 'Scikit-learn'],
    icon: Moon,
    visual: 'bars',
    tint: 'from-indigo-500/25 to-transparent',
    mark: 'SLEEP',
  },
  {
    title: 'Real-Time IoT Anomaly Detection',
    subtitle: 'ESP32 → GCP BigQuery ML',
    description:
      'Air-quality monitoring pipeline: ESP32 with MQ135 sends readings via Google Apps Script into Sheets; BigQuery ML (ARIMA PLUS) detects anomalies, shown on a live Looker Studio dashboard.',
    type: 'IoT · Cloud',
    impact: ['Hardware-to-dashboard pipeline', 'ARIMA PLUS anomaly detection', 'Live Looker Studio views'],
    technologies: ['ESP32', 'MQ135', 'BigQuery ML', 'Looker Studio', 'GCP'],
    icon: Cloud,
    visual: 'terminal',
    tint: 'from-cyan-500/20 to-transparent',
    mark: 'bq ml detect --anomaly',
  },
  {
    title: 'Runtime-Adaptable Architectures',
    subtitle: 'Task Manager Case Study',
    description:
      'A Task Manager that switches at runtime between Layered Monolith, Modular Monolith, Microservices and Serverless styles while keeping a stable API and UI.',
    type: 'Research',
    impact: ['Runtime switching across 4 architectures', 'Zero-downtime transitions', 'Policy-based automated switching'],
    technologies: ['Django/FastAPI', 'React', 'Docker', 'Traefik/NGINX', 'Redis', 'PostgreSQL', 'Prometheus', 'Grafana'],
    icon: Cpu,
    visual: 'terminal',
    tint: 'from-slate-500/20 to-transparent',
    mark: 'arch switch --to microservices',
  },
  {
    title: 'AIIA App',
    subtitle: 'Ayurveda Medical Form Management',
    description:
      'Flutter app for the All India Institute of Ayurveda, Delhi, to digitally manage patient treatment forms and assessments for Panchakarma therapies.',
    type: 'Healthcare',
    impact: ['7 Ayurvedic treatment assessments', 'Firebase + Google Sheets sync', 'PDF report generation'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Sheets API', 'Riverpod', 'PDF'],
    icon: Leaf,
    visual: 'window',
    tint: 'from-emerald-500/25 to-transparent',
    mark: 'AIIA',
  },
  {
    title: 'EduTech Pro',
    subtitle: 'AI-Powered Educational Platform',
    description:
      'Two products — LearnHub and TestMaster — under one platform, with AI video transcription, summarisation and learning analytics.',
    type: 'EdTech · AI',
    impact: ['AI transcription & summarisation', 'Unified multi-product auth', 'Role-based access control'],
    technologies: ['Django 5.2', 'DRF', 'React 18', 'TypeScript', 'OpenAI GPT', 'Whisper', 'ChromaDB', 'PyTorch'],
    icon: GraduationCap,
    visual: 'ring',
    tint: 'from-tiffany/25 to-blue-600/10',
    mark: 'EDUTECH',
  },
  {
    title: 'NICU Progress Tracker',
    subtitle: 'AIIMS Jodhpur',
    description:
      'Web app for AIIMS Jodhpur neonatal ICUs to monitor premature infants, with Fenton growth charts and daily multi-parameter tracking.',
    type: 'Healthcare',
    impact: ['Fenton growth chart integration', 'Daily tracking across 4 categories', 'Role-based authentication'],
    technologies: ['Django 5.2', 'DRF', 'React 18', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    icon: Baby,
    visual: 'chart',
    tint: 'from-sky-500/25 to-transparent',
    mark: 'NICU',
  },
  {
    title: 'VegHigh',
    subtitle: 'Farm-to-Door Vegetable Delivery',
    description:
      'E-commerce platform connecting customers with local farms for fresh, organic vegetables, with WhatsApp ordering and real-time pricing.',
    type: 'E-commerce',
    impact: ['35+ vegetable varieties', '12-hour delivery guarantee', 'WhatsApp ordering'],
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router'],
    icon: ShoppingBasket,
    visual: 'bars',
    tint: 'from-lime-500/25 to-transparent',
    mark: 'VEG',
  },
  {
    title: 'Smart Prescription System',
    subtitle: 'Medicine Management for 3 Roles',
    description:
      'AI healthcare app for doctors, patients and guardians with voice and image input for prescriptions and real-time medicine alerts.',
    type: 'Healthcare · AI',
    impact: ['95%+ NLP accuracy', '90% fewer missed doses', '50+ active users'],
    technologies: ['Flutter', 'Django', 'Firebase', 'PostgreSQL', 'NLP', 'Voice Recognition'],
    icon: Hospital,
    visual: 'window',
    tint: 'from-indigo-500/25 to-transparent',
    mark: 'Rx',
  },
  {
    title: 'Police Duty Management',
    subtitle: 'Jodhpur Police · In Production',
    description:
      'Live duty management system for 1500+ police personnel, automating shift scheduling and fair workload distribution.',
    type: 'Government',
    impact: ['1500+ active users', '70% fewer manual errors', '2 hours → 15 minutes scheduling'],
    technologies: ['Django', 'React', 'SQLite', 'REST APIs', 'Tailwind CSS'],
    icon: Shield,
    visual: 'ring',
    tint: 'from-blue-600/25 to-transparent',
    mark: 'DUTY',
  },
  {
    title: 'HomelyHub',
    subtitle: 'Vacation Rental Marketplace',
    description:
      'Marketplace connecting travellers with property owners, with listings, search, real-time booking, reviews and secure payments.',
    type: 'Full-Stack',
    impact: ['Real-time booking', 'Secure payment processing', 'Mobile-first design'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Payment APIs'],
    icon: Home,
    visual: 'bars',
    tint: 'from-orange-500/20 to-transparent',
    mark: 'HOME',
  },
  {
    title: 'Skin Cancer Classification',
    subtitle: 'Kernel Methods for Medical Imaging',
    description:
      'Benign vs. malignant skin lesion detection using Kernel PCA and SVM, tuned to minimise false negatives.',
    type: 'ML Research',
    impact: ['92% accuracy', '95% recall', 'Cross-validation verified'],
    technologies: ['Python', 'SVM', 'KPCA', 'Scikit-learn', 'OpenCV'],
    icon: Scan,
    visual: 'chart',
    tint: 'from-rose-500/20 to-transparent',
    mark: 'KPCA',
  },
  {
    title: 'Therapy App',
    subtitle: 'AIIMS Rishikesh',
    description:
      'Cross-platform Flutter app to manage audio therapy patients, track playback sessions and generate reports for therapeutic interventions.',
    type: 'Healthcare',
    impact: ['5 platforms from one codebase', 'Session playback tracking', 'CSV reporting'],
    technologies: ['Flutter', 'Dart', 'SQLite', 'Riverpod', 'SharedPreferences', 'CSV'],
    icon: Music,
    visual: 'terminal',
    tint: 'from-violet-500/20 to-transparent',
    mark: 'flutter build --all-platforms',
  },
];

const INITIAL_COUNT = 6;

const ProjectVisual = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  switch (project.visual) {
    case 'window':
      return (
        <div className="w-3/4 h-3/4 bg-ink/5 rounded-xl border border-ink/5 backdrop-blur-md shadow-2xl flex flex-col p-6">
          <div className="w-9 h-9 rounded-full bg-tiffany/80 text-black flex items-center justify-center mb-4">
            <Icon className="w-4 h-4" />
          </div>
          <div className="h-2 w-1/2 bg-ink/20 rounded-full mb-2" />
          <div className="h-2 w-1/3 bg-ink/10 rounded-full mb-6" />
          <div className="grid grid-cols-3 gap-2 mt-auto">
            <div className="h-10 rounded-lg bg-ink/5 border border-ink/5" />
            <div className="h-10 rounded-lg bg-ink/10 border border-ink/5" />
            <div className="h-10 rounded-lg bg-ink/5 border border-ink/5" />
          </div>
        </div>
      );
    case 'ring':
      return (
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-ink/10 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border border-dashed border-ink/20 animate-spin-slow" />
          <span className="text-xl sm:text-2xl font-bold text-ink tracking-tighter">{project.mark}</span>
        </div>
      );
    case 'bars':
      return (
        <div className="flex gap-4 rotate-12 opacity-90">
          <div className="w-14 sm:w-16 h-28 sm:h-32 bg-ink/10 rounded-lg backdrop-blur-sm border border-ink/5" />
          <div className="w-14 sm:w-16 h-28 sm:h-32 bg-tiffany/30 rounded-lg backdrop-blur-sm border border-ink/5 mt-8 flex items-center justify-center">
            <Icon className="w-5 h-5 text-ink/60 -rotate-12" />
          </div>
          <div className="w-14 sm:w-16 h-28 sm:h-32 bg-ink/10 rounded-lg backdrop-blur-sm border border-ink/5" />
        </div>
      );
    case 'chart':
      return (
        <div className="w-3/4 h-2/3 flex items-end gap-2 sm:gap-3 px-2">
          {[40, 65, 50, 80, 60, 92, 75].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md border border-ink/5 ${i === 5 ? 'bg-tiffany/60' : 'bg-ink/10'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      );
    case 'terminal':
    default:
      return (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-48 h-1 bg-ink/20 rounded-full" />
          <div className="w-32 h-1 bg-ink/20 rounded-full" />
          <div className="w-40 h-1 bg-ink/20 rounded-full" />
          <div className="mt-4 px-4 py-2 bg-ink/5 border border-ink/10 rounded text-xs text-ink/60 font-mono">&gt; {project.mark}</div>
        </div>
      );
  }
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <article
    className="reveal group ios-glass p-1.5 rounded-[32px] hover:border-ink/10 transition-all duration-500 flex flex-col"
    style={{ transitionDelay: `${(index % 2) * 80}ms` }}
  >
    <div className="overflow-hidden rounded-[28px] relative aspect-[16/10] bg-ink/[0.03]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.tint} card-image-hover flex items-center justify-center`}>
        <ProjectVisual project={project} />
      </div>
      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-canvas/60 backdrop-blur-md border border-ink/5 text-[10px] font-medium text-ink/70 tracking-wider uppercase">
        {project.type}
      </span>
      <div className="absolute top-4 right-4 bg-canvas/60 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-5 h-5 text-ink" />
      </div>
    </div>

    <div className="p-5 flex flex-col gap-4 flex-1">
      <div>
        <h3 className="text-xl font-medium text-ink tracking-tight group-hover:text-tiffany-ink transition-colors">{project.title}</h3>
        <p className="text-sm text-ink/40 mt-1 font-light">{project.subtitle}</p>
      </div>
      <p className="text-sm text-ink/60 font-light leading-relaxed">{project.description}</p>
      <ul className="space-y-1.5">
        {project.impact.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-tiffany shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="section-shell scroll-mt-8">
      <SectionHeader
        eyebrow="Work"
        title="Selected Work"
        subtitle="AI for education and healthcare, clinical systems and research platforms — built for real users and real constraints."
        action={
          <a
            href="https://github.com/sachinsingh2156"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-tiffany-ink hover:text-ink transition-colors flex items-center gap-1"
          >
            View GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="ios-glass flex items-center gap-2 text-ink px-6 py-3.5 rounded-full font-medium text-sm hover:bg-ink/5 transition-colors"
          >
            {showAll ? 'Show fewer projects' : `Show all ${projects.length} projects`}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
