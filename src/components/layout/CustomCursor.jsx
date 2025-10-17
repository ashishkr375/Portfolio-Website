import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);
    
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          position: 'fixed',
          zIndex: 99999,
          pointerEvents: 'none',
          width: '10px',
          height: '10px',
          backgroundColor: 'currentColor',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{
          position: 'fixed',
          zIndex: 99998,
          pointerEvents: 'none',
          width: '64px',
          height: '64px',
          border: '2px solid currentColor',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;