import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="head-text text-center mb-4">My Work Experience</p>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Building impactful solutions across education, enterprise, and technology sectors
          </p>
        </motion.div>

        <div className="work-container">
          <div className="work-canvas relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/assets/moving.gif"
              alt="Animation"
            />
            {/* Glow effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-300/50 via-transparent to-transparent rounded-lg" />
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 relative">
              {/* Timeline line with glow */}
              <div className="absolute left-[52px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent" />
              
              {workExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setAnimationName(item.animation.toLowerCase());
                    setActiveIndex(index);
                  }}
                  onPointerOver={() => {
                    setAnimationName(item.animation.toLowerCase());
                    setActiveIndex(index);
                  }}
                  onPointerOut={() => setAnimationName('idle')}
                  className={`work-content_container group relative ${
                    activeIndex === index ? 'active-experience' : ''
                  }`}
                >
                  {/* Glow effect for active card */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="flex flex-col h-full justify-start items-center py-2">
                    {/* Logo with glow effect */}
                    <div className={`work-content_logo relative group-hover:scale-110 transition-transform duration-300 ${
                      activeIndex === index ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50' : ''
                    }`}>
                      <img className="w-full h-full rounded-lg" src={item.icon} alt={item.name} />
                      
                      {/* Glow overlay on hover */}
                      <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Animated connecting line */}
                    <div className={`work-content_bar relative ${
                      activeIndex === index ? 'bg-gradient-to-b from-blue-500 to-blue-500/30' : ''
                    }`}>
                      {activeIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-blue-500"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.5 }}
                          style={{ transformOrigin: 'top' }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    {/* Company name with glow */}
                    <p className={`font-bold text-lg mb-2 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                        : 'text-white-800'
                    }`}>
                      {item.name}
                    </p>
                    
                    {/* Position and duration */}
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className={`font-medium ${
                        activeIndex === index ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {item.pos}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500">{item.duration}</span>
                    </div>

                    {/* Job description with gradient on active */}
                    <p className={`text-sm leading-relaxed transition-all ease-in-out duration-500 ${
                      activeIndex === index 
                        ? 'text-white-800' 
                        : 'text-gray-400 group-hover:text-white-600'
                    }`}>
                      {item.title}
                    </p>

                    {/* Decorative line on active */}
                    {activeIndex === index && (
                      <motion.div
                        layoutId="activeLine"
                        className="mt-4 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-lg opacity-0 transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
                  }`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
