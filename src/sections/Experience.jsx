import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workExperiences } from '../constants/index.js';

// --- 1. ICONS ---
const PathIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const CodeIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const BugIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 18h4m12-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const RocketIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ServerIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;

const pipelineStages = [
  { id: 'ARCH', label: 'Architecture', sub: 'Schema', value: 98, icon: <PathIcon /> },
  { id: 'DEV', label: 'Development', sub: 'Core Logic', value: 100, icon: <CodeIcon /> },
  { id: 'TEST', label: 'Stress Test', sub: 'Security', value: 85, icon: <BugIcon /> },
  { id: 'PROD', label: 'Deployment', sub: 'CI/CD', value: 92, icon: <RocketIcon /> },
  { id: 'INFRA', label: 'Infrastructure', sub: 'AWS/DB', value: 95, icon: <ServerIcon /> },
];

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="c-space py-24 bg-[#050505] relative overflow-hidden" id="work">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center">
           <div className="flex items-center gap-3 mb-4 px-4 py-1 border border-orange-500/20 bg-orange-500/5">
             <div className="w-1.5 h-1.5 bg-orange-500 rounded-none animate-pulse" />
             <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
               Career_History // Log
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight text-center">
            Professional <span className="text-gray-600">Trajectory</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          
          {/* === LEFT COLUMN: CYBERNETIC DASHBOARD === */}
          <div className="hidden lg:block col-span-1 h-[650px] sticky top-24">
            <div className="h-full w-full bg-[#0a0a0a] border border-white/10 flex flex-col relative overflow-hidden shadow-2xl group">
              
              {/* Scanner Overlay */}
              <div className={`absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(249,115,22,0.03)_50%,transparent_100%)] bg-[length:100%_200%] pointer-events-none z-0 ${activeIndex !== null ? 'animate-scan-fast' : 'animate-scan-slow'}`} />

              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 bg-[#0e0e0e] z-10 relative">
                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1 h-1 bg-gray-500" />
                    <div className="w-1 h-1 bg-gray-500" />
                    <div className="w-1 h-1 bg-gray-500" />
                    <div className={`w-1 h-1 ${activeIndex !== null ? 'bg-orange-500 animate-pulse' : 'bg-gray-500'}`} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 tracking-widest">SYSTEM_OP: MONITOR</span>
                </div>
                <div className="text-[9px] font-mono text-orange-500/80">
                   {activeIndex !== null ? '>> OVERCLOCKING <<' : 'STATUS: NORMAL'}
                </div>
              </div>

              {/* Main Dashboard Body */}
              <div className="flex-1 relative p-6 flex flex-col justify-between z-10">
                 
                 {/* Background Circuit Lines */}
                 <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0 V650" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M50 50 H300" stroke="white" strokeWidth="1" fill="none" />
                    <path d="M50 200 H200 L220 220" stroke="white" strokeWidth="1" fill="none" />
                    <path d="M50 500 H150" stroke="white" strokeWidth="1" fill="none" />
                 </svg>

                 {/* The Conduit Line */}
                 <div className="absolute left-[3.1rem] top-8 bottom-8 w-0.5 bg-[#1a1a1a] z-0 overflow-hidden">
                    <motion.div 
                      className="w-full bg-orange-500"
                      initial={{ height: '0%', top: '0%' }}
                      animate={{ 
                        height: activeIndex !== null ? '40%' : '20%', 
                        top: ['-20%', '120%'] 
                      }}
                      transition={{ 
                        duration: activeIndex !== null ? 1.5 : 4, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      style={{ position: 'absolute', boxShadow: '0 0 10px #f97316' }}
                    />
                 </div>

                 {/* Nodes */}
                 {pipelineStages.map((stage, idx) => (
                   <SystemNode 
                      key={stage.id} 
                      stage={stage} 
                      isOverclocked={activeIndex !== null}
                      index={idx}
                   />
                 ))}
              </div>

              {/* Footer Logs */}
              <div className="h-32 border-t border-white/10 bg-[#080808] p-4 font-mono text-[9px] text-gray-600 overflow-hidden relative">
                 <div className="absolute top-2 right-2 text-orange-500/50">LIVE_LOGS</div>
                 <div className="space-y-1 opacity-70">
                    <LogLine text="> INIT_SEQUENCE_START..." delay={0} />
                    <LogLine text="> CONNECTING_TO_DB_SHARD_01" delay={1} />
                    <LogLine text="> FETCHING_ASSETS [OK]" delay={2} />
                    <LogLine text={`> SYSTEM_LOAD: ${activeIndex !== null ? '98%' : '34%'}`} delay={0.5} key={activeIndex} />
                    <LogLine text="> OPTIMIZING_RENDER_PIPELINE..." delay={3} />
                 </div>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: EXPERIENCE LIST === */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
              {/* Guide Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px border-l border-dashed border-white/10 -z-10" />

              {workExperiences.map((item, index) => (
                <ExperienceCard 
                  key={index} 
                  item={item} 
                  index={index} 
                  isActive={activeIndex === index}
                  onHover={setActiveIndex}
                />
              ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan-fast { 0% { background-position: 0% 0%; } 100% { background-position: 0% 200%; } }
        @keyframes scan-slow { 0% { background-position: 0% 0%; } 100% { background-position: 0% 200%; } }
        .animate-scan-fast { animation: scan-fast 1s linear infinite; }
        .animate-scan-slow { animation: scan-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const SystemNode = ({ stage, isOverclocked, index }) => {
  return (
    <div className="relative flex items-center gap-6 z-10">
      {/* Hexagon/Square Container */}
      <div className="relative">
         {/* Rotating Ring */}
         <motion.div 
           className={`absolute -inset-2 border rounded-full border-dashed ${isOverclocked ? 'border-orange-500/50' : 'border-white/10'}`}
           animate={{ rotate: 360 }}
           transition={{ duration: isOverclocked ? 2 : 10, repeat: Infinity, ease: "linear" }}
         />
         
         {/* Core Icon */}
         <div className={`w-12 h-12 shrink-0 bg-[#0a0a0a] border flex items-center justify-center relative z-10 transition-all duration-300 ${
           isOverclocked 
           ? 'border-orange-500 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
           : 'border-white/10 text-gray-500'
         }`}>
            {stage.icon}
         </div>
      </div>

      {/* Data Panel */}
      <div className="flex-1 bg-[#0f0f0f] border border-white/5 p-2 flex items-center justify-between group">
         <div className="flex flex-col">
            <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isOverclocked ? 'text-white' : 'text-gray-500'}`}>
               {stage.label}
            </span>
            <div className="flex items-center gap-2">
               <span className="text-[9px] font-mono text-gray-600">// {stage.sub}</span>
            </div>
         </div>

         {/* Visual Health Bar */}
         <div className="flex flex-col items-end gap-1">
             <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                   <motion.div 
                     key={i}
                     className={`w-1 h-3 ${isOverclocked ? 'bg-orange-500' : 'bg-gray-700'}`}
                     animate={{ opacity: [0.3, 1, 0.3] }}
                     transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
                   />
                ))}
             </div>
             <span className="text-[9px] font-mono text-gray-500">
                {isOverclocked ? <RandomNumber /> : stage.value}%
             </span>
         </div>
      </div>
    </div>
  );
};

const RandomNumber = () => {
   const [num, setNum] = useState(99);
   useEffect(() => {
      const i = setInterval(() => setNum(Math.floor(Math.random() * 15) + 85), 100);
      return () => clearInterval(i);
   }, []);
   return <>{num}</>;
};

const LogLine = ({ text, delay }) => (
   <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
   >
      {text}
   </motion.div>
);

const ExperienceCard = ({ item, index, isActive, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative pl-12 md:pl-20 group cursor-default"
    >
      {/* Connector Dot */}
      <div className={`absolute left-4 md:left-8 top-8 -translate-x-1/2 w-3 h-3 bg-[#050505] border rotate-45 transition-all duration-300 ${
        isActive ? 'border-orange-500 bg-orange-500/20 scale-125' : 'border-white/20'
      }`} />
      
      {/* Horizontal Line */}
      <div className={`absolute left-4 md:left-8 top-8 w-8 md:w-12 h-px transition-all duration-300 ${
         isActive ? 'bg-orange-500' : 'bg-white/10'
      }`} />

      {/* Card Body */}
      <div className={`relative bg-[#0a0a0a] border transition-all duration-300 p-6 flex flex-col md:flex-row gap-6 overflow-hidden ${
        isActive 
          ? 'border-orange-500/50 bg-[#0f0f0f]' 
          : 'border-white/10 hover:border-white/20'
      }`}>
        
        {/* Scanning Light Effect */}
        {isActive && (
           <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent pointer-events-none"
           />
        )}

        {/* Logo Section */}
        <div className={`relative shrink-0 w-14 h-14 border p-2 transition-colors duration-300 bg-black ${
           isActive ? 'border-orange-500' : 'border-white/10'
        }`}>
           <img 
              src={item.icon} 
              alt={item.name} 
              className={`w-full h-full object-contain transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale'}`}
           />
        </div>

        {/* Text Content */}
        <div className="flex-1 z-10">
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className={`text-lg font-bold uppercase tracking-tight transition-colors ${
                 isActive ? 'text-white' : 'text-gray-300'
              }`}>
                 {item.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono px-2 py-1 border ${isActive ? 'border-orange-500/30 text-orange-400 bg-orange-500/5' : 'border-white/5 text-gray-500 bg-white/5'}`}>
                  {item.duration}
                </span>
              </div>
           </div>
           
           <p className={`text-sm font-mono mb-3 ${
              isActive ? 'text-orange-500' : 'text-gray-500'
           }`}>
              // {item.pos}
           </p>
           
           <p className="text-sm text-gray-400 leading-relaxed font-light border-l-2 border-white/5 pl-4">
              {item.title}
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;