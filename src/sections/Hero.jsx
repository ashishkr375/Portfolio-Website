import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium">
              👋 Hi, I'm Ashish Kumar
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Creating elegant solutions through code, one project at a time. 
            Passionate about building responsive and performant web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#about">
              <motion.button
                className="px-8 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                className="px-8 py-3 rounded-lg border border-primary-500/50 text-primary-400 font-medium hover:bg-primary-500/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-primary-500/50 flex justify-center p-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1.5 h-2 bg-primary-500 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 -left-12 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;

