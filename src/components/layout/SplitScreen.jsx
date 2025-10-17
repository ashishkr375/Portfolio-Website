import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SplitScreen = ({ children }) => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const sections = containerRef.current.children;
      
      Array.from(sections).forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          section.style.transform = `translateX(${Math.min(0, rect.top / -2)}px)`;
          section.style.opacity = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children.map((child, index) => (
        <motion.section
          key={index}
          ref={ref}
          className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8"
          variants={childVariants}
          style={{
            position: 'relative',
            zIndex: children.length - index,
          }}
        >
          {child}
        </motion.section>
      ))}
    </motion.div>
  );
};

export default SplitScreen;