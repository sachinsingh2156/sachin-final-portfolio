import { ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { GOOGLE_SCHOLAR_URL } from '@/lib/profile';

const publications = [
  {
    title: 'Who Do Learners Ask for Help? Modeling Social Role Diversity in Agentic AI for Educational Help-Seeking',
    authors: 'R. David, S. Singh, S. Kalra',
    venue: 'International Conference on Artificial Intelligence in Education (AIED)',
    details: 'pp. 347–355',
    year: '2026',
  },
  {
    title:
      'Using AI Algorithms and Machine Learning in the Analysis of a Bio-Purification Method (Therapeutic Emesis, Known as “Vamana Karma”): Protocol for a Mixed Methods Study',
    authors: 'P. Rani, S. Kalra, S. Singh, R. David, A. R. Gupta, A. PV',
    venue: 'JMIR Research Protocols',
    details: '15(1), e79875',
    year: '2026',
  },
  {
    title: 'A Systematic Review Evaluating the Quality of Ayurveda Smartphone Applications (Android)',
    authors: 'P. Rani, P. V. Anandaraman, S. Kalra, A. R. Gupta, S. Singh, R. David, et al.',
    venue: 'European Journal of Integrative Medicine',
    details: '102606',
    year: '2026',
  },
  {
    title: 'Academates – Your Path to Personalized Learning',
    authors: 'A. Thapa, S. Singh, S. Maharjan, M. Yadav',
    venue: '2024 Int. Conf. on Communication, Computing and Internet of Things (IEEE IC3IoT)',
    details: null,
    year: '2024',
  },
  {
    title: 'Smart Sleep Monitoring System Using Machine Learning',
    authors: 'S. Singh, M. Yadav, P. Kumari, A. Thapa, S. Maharjan, S. S.',
    venue: 'Tuijin Jishu / Journal of Propulsion Technology',
    details: '45(2), 7122–7132',
    year: '2024',
  },
];

const Publications = () => (
  <section id="publications" className="section-shell scroll-mt-8">
    <SectionHeader
      eyebrow="Research"
      title="Publications"
      subtitle="Peer-reviewed work in AI for education and AI for healthcare — five publications indexed on Google Scholar."
      action={
        <a
          href={GOOGLE_SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-tiffany-ink hover:text-ink transition-colors flex items-center gap-1.5"
        >
          Google Scholar
          <ExternalLink className="w-4 h-4" />
        </a>
      }
    />

    <div className="space-y-4">
      {publications.map((pub, i) => (
        <article
          key={pub.title}
          className="reveal ios-glass rounded-[28px] p-6 md:p-7 hover:bg-ink/5 transition-all duration-300 group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center text-tiffany-ink group-hover:bg-tiffany/15 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-ink/40 md:mt-1">[{i + 1}]</span>
          </div>

          <div className="md:col-span-9">
            <h3 className="text-base md:text-lg font-medium text-ink tracking-tight leading-snug group-hover:text-tiffany-ink transition-colors">
              {pub.title}
            </h3>
            <p className="text-sm text-ink/50 mt-2 font-light">{pub.authors}</p>
            <p className="text-sm text-ink/60 mt-2">
              <span className="text-ink/80">{pub.venue}</span>
              {pub.details ? <span className="text-ink/40"> · {pub.details}</span> : null}
            </p>
          </div>

          <div className="md:col-span-2 flex md:justify-end items-start">
            <span className="tag font-mono">{pub.year}</span>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-8 flex justify-center">
      <a
        href={GOOGLE_SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ios-glass flex items-center gap-2 text-ink px-6 py-3.5 rounded-full font-medium text-sm hover:bg-ink/5 transition-colors"
      >
        View full profile on Google Scholar
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default Publications;
