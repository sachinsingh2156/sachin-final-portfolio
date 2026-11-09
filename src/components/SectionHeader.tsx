import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const SectionHeader = ({ eyebrow, title, subtitle, action }: SectionHeaderProps) => (
  <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
    <div>
      {eyebrow && (
        <span className="block text-xs font-medium tracking-wide text-tiffany-ink uppercase mb-3">{eyebrow}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
    {action}
  </div>
);

export default SectionHeader;
