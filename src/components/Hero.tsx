import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'Software Engineer',
    'Full-Stack Developer', 
    'ML Enthusiast',
    'Tech Innovator'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    if (displayText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
        {/* Profile Info */}
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>New Delhi, India</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold neon-text mb-4">
            Sachin Singh
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary typing">
              {displayText}
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            M.Tech Computer Science @ IIT Jodhpur | Building innovative solutions with AI, 
            full-stack development, and cloud technologies
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a 
            href="https://drive.google.com/file/d/1gBS8R7Rz4rkNwiFAzANTdndIANK143Ys/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="neon" size="hero" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
          <Button variant="glass" size="hero">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in">
          <a 
            href="https://github.com/sachinsingh2156"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow group"
          >
            <Github className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/sachinsingh2156"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover-glow group"
          >
            <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
          </a>
          <a 
            href="mailto:sachinsingh2156@gmail.com"
            className="p-3 glass rounded-full hover-glow group"
          >
            <Mail className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;