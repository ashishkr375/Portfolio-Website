import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

const AnimatedSkillCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  const iconVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2.5, bounce: 0 },
        opacity: { duration: 0.2 }
      }
    }
  };

  const cardVariants = {
    initial: { 
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    animate: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay * 0.2
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const glowVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: isHovered ? [1, 1.2, 1] : 1,
      opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-6 rounded-xl backdrop-blur-sm bg-black/20 border border-primary-500/20 overflow-hidden group"
    >
      {/* Animated background glow effect */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-primary-400/10 to-primary-500/20 rounded-xl blur-xl z-0"
      />

      {/* Card content */}
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-500">
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-primary-400"
          >
            <motion.path
              d={icon}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              variants={iconVariants}
              initial="initial"
              animate="animate"
            />
          </motion.svg>
        </div>

        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className="text-gray-400 leading-relaxed"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AnimatedSkillCard;