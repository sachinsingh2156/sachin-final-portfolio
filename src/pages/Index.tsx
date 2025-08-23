import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Developed with ❤️ by Sachin Singh using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Sachin Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
