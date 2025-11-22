import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- 1. REUSABLE UI COMPONENTS ---

// The "Scanner" effect that moves across cards on hover
const HoverEffect = () => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:animate-scanner" />
    <div className="absolute inset-0 border border-blue-500/50" />
    {/* Corner Brackets */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500" />
  </div>
);

// Standard Card Wrapper
const BentoCard = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`relative group bg-black border border-white/10 hover:border-white/20 transition-colors overflow-hidden ${className}`}
    >
      <HoverEffect />
      <div className="p-6 h-full flex flex-col relative z-10">
        {children}
      </div>
      {/* Scanline Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20" />
    </motion.div>
  );
};

// --- 2. MICRO-INTERACTION VISUALS ---

const CodeScrolling = () => (
  <div className="font-mono text-[10px] text-green-500/50 overflow-hidden h-full leading-tight select-none">
    <motion.div
      animate={{ y: [0, -100] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="whitespace-nowrap">
          <span className="text-blue-400">const</span> module_{i} = require('lib-v{i}');
          <br />
          await <span className="text-yellow-400">compile</span>(module_{i});
        </div>
      ))}
    </motion.div>
  </div>
);

const StressTestGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
    <path d="M0 50 H100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <path d="M0 25 H100" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" strokeWidth="1" />
    <motion.path 
      d="M0 45 L10 42 L20 45 L30 35 L40 40 L50 20 L60 25 L70 10 L80 15 L90 5 L100 45"
      fill="none"
      stroke="#ef4444"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.rect x="0" y="0" width="100" height="50" fill="url(#grad)" opacity="0.2" />
  </svg>
);

const ServerLights = () => (
  <div className="flex gap-1 h-full items-center">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="w-1 h-8 bg-green-500 rounded-sm"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.5 + i * 0.2, repeat: Infinity }}
      />
    ))}
  </div>
);

// --- 3. MAIN COMPONENT ---

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ashishk.dd22.cs@nitp.ac.in');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#050505] text-white relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">System Overview</h2>
            <p className="text-xs font-mono text-blue-400 mt-1">/// STATUS: ONLINE ///</p>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-gray-500">
            <div>LOC: PATNA, IN</div>
            <div>UPTIME: 99.9%</div>
          </div>
        </div>

        {/* 
           COMPLEX BENTO GRID LAYOUT 
           Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-[auto_auto_auto] gap-4">

          {/* 1. PROFILE CARD (Span 2 cols, 2 rows on desktop for prominence) */}
          <BentoCard className="lg:col-span-2 lg:row-span-2 h-min-64" delay={0}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="relative">
                  <div className="w-20 h-20 border border-white/20 p-1">
                    <img src="/assets/p-photo.png" alt="Ashish" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 text-[10px] font-mono bg-blue-600 text-black px-1">
                    OP_ID: ASHISH
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 font-mono">ROLE_DEFINITION</div>
                  <h3 className="text-xl font-bold uppercase">Full Stack Engineer</h3>
                  <div className="flex gap-2 justify-end mt-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-green-400">AVAILABLE FOR HIRE</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-4">
                  I don't just write code; I engineer resilient systems. From architectural blueprints to high-stress production environments, I handle the full lifecycle. Specializing in <span className="text-white font-semibold">MERN Stack</span>, <span className="text-white font-semibold">Next.js</span>, and <span className="text-white font-semibold">Scalable Backend Infrastructure</span>.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex gap-4 font-mono text-xs text-gray-500">
                 <div>&gt; EXP_LEVEL: INTERMEDIATE</div>
                 <div>&gt; PROJECT_COUNT: 15+</div>
              </div>
            </div>
          </BentoCard>

          {/* 2. STAGE I: DESIGN & ARCHITECTURE */}
          <BentoCard className="lg:col-span-1 h-48" delay={0.1}>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">SYS_01</div>
            <h4 className="text-sm font-bold text-blue-400 mb-2">PHASE I: ARCHITECTURE</h4>
            <div className="flex items-center justify-center h-20 border border-dashed border-white/20 my-2 bg-white/5">
               <svg className="w-12 h-12 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
               </svg>
            </div>
            <p className="text-[10px] text-gray-400 font-mono mt-2 leading-tight">
              > Schema Design (SQL/NoSQL)<br/>
              > API Contract Definition<br/>
              > Component Atomic Structure
            </p>
          </BentoCard>

          {/* 3. STAGE II: DEVELOPMENT */}
          <BentoCard className="lg:col-span-1 h-48" delay={0.2}>
             <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">SYS_02</div>
             <h4 className="text-sm font-bold text-yellow-400 mb-2">PHASE II: CORE DEV</h4>
             <div className="h-20 bg-black border border-gray-800 p-2 relative overflow-hidden">
               <CodeScrolling />
               <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent" />
             </div>
             <div className="flex gap-2 mt-3">
               {['React', 'Node', 'Next', 'TS'].map(t => (
                 <span key={t} className="text-[9px] bg-white/10 px-1 text-gray-300">{t}</span>
               ))}
             </div>
          </BentoCard>

          {/* 4. STAGE III: STRESS TESTING */}
          <BentoCard className="lg:col-span-1 h-48" delay={0.3}>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">SYS_03</div>
            <h4 className="text-sm font-bold text-red-400 mb-2">PHASE III: STRESS TEST</h4>
            <div className="h-20 bg-red-900/10 border border-red-500/20 relative">
               <StressTestGraph />
               <div className="absolute top-1 right-1 text-[8px] text-red-500 animate-pulse">CRITICAL LOAD</div>
            </div>
            <p className="text-[10px] text-gray-400 font-mono mt-2 leading-tight">
              > Latency Checks<br/>
              > Load Balancing<br/>
              > Jest / Cypress Integration
            </p>
          </BentoCard>

          {/* 5. STAGE IV: DEPLOYMENT */}
          <BentoCard className="lg:col-span-1 h-48" delay={0.4}>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">SYS_04</div>
            <h4 className="text-sm font-bold text-green-400 mb-2">PHASE IV: DEPLOY</h4>
            <div className="flex justify-between items-center h-20 bg-green-900/5 border border-green-500/10 px-4">
               <div className="text-[10px] font-mono text-green-600">
                  STATUS: LIVE<br/>
                  PORT: 3000<br/>
                  SSL: TRUE
               </div>
               <ServerLights />
            </div>
            <div className="mt-2 w-full bg-gray-800 h-1">
               <motion.div 
                  className="h-full bg-green-500" 
                  animate={{ width: ["0%", "100%"] }} 
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
               />
            </div>
          </BentoCard>

          {/* 6. IMPACT & STATS (Wide bar) */}
          <BentoCard className="lg:col-span-2 lg:col-start-1 row-start-3 lg:row-auto" delay={0.5}>
            <div className="flex items-center justify-between mb-4">
               <h4 className="text-sm font-bold text-white">TELEMETRY DATA</h4>
               <div className="flex gap-1">
                 <span className="w-1 h-1 bg-white rounded-full"></span>
                 <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                 <span className="w-1 h-1 bg-white rounded-full opacity-25"></span>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-4 divide-x divide-white/10">
               <div className="text-center">
                 <div className="text-2xl font-mono text-white font-bold">2000+</div>
                 <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Req / Sec</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-mono text-white font-bold">10k+</div>
                 <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Users</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-mono text-white font-bold">99.9%</div>
                 <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Uptime</div>
               </div>
            </div>
          </BentoCard>

          {/* 7. COMMUNICATION UPLINK */}
          <BentoCard className="lg:col-span-2 row-start-4 lg:row-auto" delay={0.6}>
            <h4 className="text-sm font-bold text-white mb-4">ESTABLISH UPLINK</h4>
            <div className="flex gap-4 h-full items-center">
              <a 
                href="https://drive.google.com/file/d/13JMc3lwof9OvYwXMeBRum3tn8qQ5lJML/view" 
                target="_blank"
                className="flex-1 bg-white text-black h-12 flex items-center justify-center font-bold text-sm uppercase hover:bg-blue-500 hover:text-white transition-colors"
              >
                Init_Download [CV]
              </a>
              <button 
                onClick={handleCopy}
                className="flex-1 border border-white/20 text-white h-12 flex items-center justify-center font-mono text-xs uppercase hover:bg-white/5 transition-colors relative overflow-hidden"
              >
                {hasCopied ? (
                  <span className="text-green-500">>> TRANSMISSION COMPLETE</span>
                ) : (
                  <span className="animate-pulse">>> COPY_SECURE_ID [EMAIL]</span>
                )}
              </button>
            </div>
          </BentoCard>
          
        </div>
      </div>

      {/* Background Decor */}
      <style jsx global>{`
        @keyframes scanner {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scanner {
          animation: scanner 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;