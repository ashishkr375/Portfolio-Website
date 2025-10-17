import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { iconPaths } from '../constants/iconPaths';
import AnimatedSkillCard from '../components/AnimatedSkillCard';

const SkillCard = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="grid-container group hover:border-primary-500/50 transition-colors duration-300"
    >
      <div className="w-16 h-16 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
        <SketchIcon pathData={icon} width={40} height={40} />
      </div>
      <h3 className="grid-headtext group-hover:text-primary-400 transition-colors">{title}</h3>
      <p className="grid-subtext">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('ashishk.dd22.cs@nitp.ac.in');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="py-20 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate web developer with expertise in modern web technologies and a strong foundation in problem-solving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 blur-3xl -z-10" />
          
          <AnimatedSkillCard
            icon={iconPaths.frontend}
            title="Frontend Development"
            description="Expertise in React, Next.js, and modern CSS frameworks like Tailwind. Building responsive and performant web applications."
            delay={0}
          />
          <AnimatedSkillCard
            icon={iconPaths.backend}
            title="Backend Development"
            description="Strong foundation in Node.js, Express, and database design. Creating scalable and secure server solutions."
            delay={1}
          />
          <AnimatedSkillCard
            icon={iconPaths.problemSolving}
            title="Problem Solving"
            description="Active participant in competitive programming. Skilled in DSA and system design, with regular practice on platforms like LeetCode."
            delay={2}
          />
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <p className="text-gray-400">
                I'm a web developer based in Patna, India, with a passion for creating innovative software solutions. I specialize in full-stack development and have a strong foundation in data structures and algorithms.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-400">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="text-white font-medium">Languages</h5>
                  <ul className="text-gray-400 space-y-1">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>C++</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="text-white font-medium">Frameworks</h5>
                  <ul className="text-gray-400 space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/13JMc3lwof9OvYwXMeBRum3tn8qQ5lJML/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Download Resume
              </a>
              <div className="copy-container" onClick={handleCopy}>
                <button className="px-4 py-2 rounded-lg border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 transition-colors duration-200 flex items-center gap-2">
                  <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="w-5 h-5" />
                  <span>{hasCopied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 via-primary-500/10 to-transparent p-1">
              <img
                src="/assets/p-photo.png"
                alt="Ashish Kumar"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-12 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary-500/10 rounded-full blur-xl" />
    </section>
  );
};

export default About;
