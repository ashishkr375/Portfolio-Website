import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import { CustomCursor, SplitScreen } from './components/layout';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Smooth scroll initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 0.8,
      lerp: 0.1,
      direction: 'vertical',
      gestureDirection: 'vertical',
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Stop scrolling when tab is not in focus
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.documentElement.style.scrollBehavior = '';
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen bg-dark-100 text-white relative">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        </div>
        <CustomCursor />
        <Navbar onThemeToggle={toggleTheme} />
        <SplitScreen>
          <Hero />
          <About />
          <Projects />
          <Clients />
          <WorkExperience />
          <Contact />
          <Footer />
        </SplitScreen>
      </main>
    </AnimatePresence>
  );
};

export default App;
