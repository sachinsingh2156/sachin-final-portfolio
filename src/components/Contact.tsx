import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sachinsingh2156@gmail.com',
      href: 'mailto:sachinsingh2156@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9971073804',
      href: 'tel:+919971073804'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'sachinsingh2.netlify.app',
      href: 'https://sachinsingh2.netlify.app'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'sachinsingh2156',
      href: 'https://github.com/sachinsingh2156',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sachinsingh2156',
      href: 'https://linkedin.com/in/sachinsingh2156',
      color: 'hover:text-secondary'
    },
    {
      icon: Mail,
      label: 'Academic Email',
      value: 'm24cse033@iitj.ac.in',
      href: 'mailto:m24cse033@iitj.ac.in',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined} 
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card/30 rounded-lg hover:bg-card/50 transition-all duration-300 group"
                  >
                    <social.icon className={`w-6 h-6 text-muted-foreground ${social.color} transition-colors`} />
                    <div>
                      <div className="text-sm text-muted-foreground">{social.label}</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {social.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-terminal-green rounded-full animate-pulse" />
                <div>
                  <div className="font-semibold text-terminal-green">Available for Opportunities</div>
                  <div className="text-sm text-muted-foreground">
                    Open to full-time roles, internships, and collaborations
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-card/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-card/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-card/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={6}
                  className="bg-card/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="neon" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for a dedicated developer, researcher, or team leader, 
              I'm excited to discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                <Mail className="w-5 h-5" />
                Schedule a Call
              </Button>
              <Button variant="glass" size="lg">
                <Github className="w-5 h-5" />
                View My Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;