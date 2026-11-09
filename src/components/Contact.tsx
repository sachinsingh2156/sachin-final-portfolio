import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle, Mail, MapPin, Phone, Send, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { socials } from '@/lib/profile';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sachinsingh2156@gmail.com', href: 'mailto:sachinsingh2156@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-9971073804', href: 'tel:+919971073804' },
  { icon: MapPin, label: 'Location', value: 'New Delhi, India', href: null },
  { icon: Globe, label: 'Website', value: 'sachinsingh.com.np', href: 'https://sachinsingh.com.np' },
];

type Status = { kind: 'idle' | 'sending' | 'success' | 'error'; message: string };

const fieldClass =
  'w-full rounded-2xl bg-ink/5 border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-tiffany focus:ring-2 focus:ring-tiffany/30 transition';

const Contact = () => {
  const [status, setStatus] = useState<Status>({ kind: 'idle', message: '' });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: 'sending', message: 'Sending…' });

    const formData = new FormData(form);
    formData.append('access_key', '99a393e3-461a-4e51-9bfe-87a0b2858dfc');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setStatus({ kind: 'success', message: "Message sent successfully! I'll get back to you soon." });
        form.reset();
      } else {
        setStatus({ kind: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ kind: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  const sending = status.kind === 'sending';

  return (
    <section id="contact" className="section-shell scroll-mt-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Open to full-time roles, internships and collaborations. Drop a message and I'll get back to you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Info widgets */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="reveal ios-glass rounded-[32px] p-6 tiffany-glow">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tiffany" />
              </span>
              <span className="text-xs font-medium tracking-wide text-tiffany-ink uppercase">Available for opportunities</span>
            </div>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <div className="p-2.5 rounded-xl bg-ink/5 text-ink/60 group-hover:text-tiffany-ink transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-ink/40">{label}</div>
                      <div className="text-sm text-ink truncate">{value}</div>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3 group">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="reveal ios-glass rounded-[28px] p-5 flex flex-col items-start gap-6 hover:bg-ink/5 transition-colors group"
              >
                <div className="w-full flex justify-between items-start">
                  <Icon className="w-5 h-5 text-ink/60 group-hover:text-tiffany-ink transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-ink transition-colors" />
                </div>
                <span className="text-sm font-medium text-ink">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="reveal lg:col-span-7 ios-glass rounded-[32px] p-6 md:p-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-ink/50 font-medium">Name</span>
              <input name="name" placeholder="Your name" required className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-ink/50 font-medium">Email</span>
              <input name="email" type="email" placeholder="you@example.com" required className={fieldClass} />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-wider text-ink/50 font-medium">Subject</span>
            <input name="subject" placeholder="What's this about?" required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            <span className="text-[10px] uppercase tracking-wider text-ink/50 font-medium">Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project, opportunity, or just say hello!"
              required
              className={`${fieldClass} resize-none flex-1 min-h-[140px]`}
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={sending}
              className="group flex items-center justify-center gap-2 bg-tiffany text-black px-6 py-3.5 rounded-full font-medium text-sm hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(129,216,208,0.6)]"
            >
              <Send className={`w-4 h-4 ${sending ? 'animate-pulse' : 'group-hover:translate-x-0.5 transition-transform'}`} />
              {sending ? 'Sending…' : 'Send Message'}
            </button>

            {status.kind !== 'idle' && status.kind !== 'sending' && (
              <p
                role="status"
                className={`flex items-center gap-2 text-sm ${status.kind === 'success' ? 'text-tiffany-ink' : 'text-red-500'}`}
              >
                {status.kind === 'success' ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
