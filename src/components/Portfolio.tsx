import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './portfolio/Navbar';
import Hero from './portfolio/Hero';
import Projects from './portfolio/Projects';
import Skills from './portfolio/Skills';
import About from './portfolio/About';
import Resume from './portfolio/Resume';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;