import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. CSS STYLES FOR SCROLLBAR & FIRE EFFECT ---
const customStyles = `
  /* Industrial Orange Scrollbar */
  .industrial-scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .industrial-scrollbar::-webkit-scrollbar-track {
    background: #0a0a0a;
    border-left: 1px solid #222;
  }
  .industrial-scrollbar::-webkit-scrollbar-thumb {
    background: #f97316; /* Orange-500 */
    border-radius: 0px;
  }
  .industrial-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #ea580c; /* Orange-600 */
  }

  /* Fire/Magma Text Animation */
  @keyframes magma-flow {
    0% { text-shadow: 0 0 2px #f97316, 0 0 5px #dc2626; color: #fff7ed; }
    50% { text-shadow: 0 0 5px #f97316, 0 0 10px #ea580c; color: #ffedd5; }
    100% { text-shadow: 0 0 2px #f97316, 0 0 5px #dc2626; color: #fff7ed; }
  }
  .fire-text {
    animation: magma-flow 2s infinite ease-in-out;
    font-weight: 800;
    display: inline-block;
  }
`;

// --- 2. HELPER TO HIGHLIGHT NUMBERS ---
const FireText = ({ text }) => {
  const parts = text.split(/(\d+(?:,\d+)*(?:\.\d+)?%?(?:\+)?)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (/^\d+(?:,\d+)*(?:\.\d+)?%?(?:\+)?$/.test(part)) {
          return <span key={i} className="fire-text mx-0.5">{part}</span>;
        }
        return part;
      })}
    </span>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project?.images || [project?.thumbnail];

  // Reset index on open
  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen]);

  // --- FIX: AGGRESSIVE SCROLL LOCKING ---
  useEffect(() => {
    if (isOpen) {
      // 1. Lock both body and html to prevent background scroll
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; 
      
      // 2. Inject Styles
      const styleSheet = document.createElement("style");
      styleSheet.innerText = customStyles;
      document.head.appendChild(styleSheet);

      return () => {
        // Cleanup
        document.body.style.overflow = '';
        document.documentElement.style.overflow = ''; 
        document.head.removeChild(styleSheet);
      };
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // z-[9999] ensures it is on top of everything
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-0 md:p-6"
          // Stop clicks from closing modal immediately, but allow background click
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f0f0f] w-full h-full md:h-[85vh] md:max-w-7xl border border-white/10 flex flex-col md:flex-row shadow-2xl relative group overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/80 border border-white/10 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* ================= LEFT: IMAGE GALLERY ================= */}
            <div className="w-full md:w-[55%] lg:w-[60%] bg-black relative flex flex-col h-[40vh] md:h-full border-b md:border-b-0 md:border-r border-white/10">
              
              {/* Main Image Area */}
              <div className="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    alt="Project Preview"
                    className="max-h-full max-w-full object-contain p-2 md:p-8"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors">
                      &lt;
                    </button>
                    <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors">
                      &gt;
                    </button>
                  </>
                )}

                {/* Counter Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 border border-white/10 px-3 py-1 text-[10px] font-mono text-orange-500">
                   FILE: {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="hidden md:flex h-24 bg-[#0a0a0a] border-t border-white/10 items-center gap-2 overflow-x-auto p-3 industrial-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`shrink-0 h-full aspect-video border-2 relative ${currentImageIndex === idx ? 'border-orange-500 opacity-100' : 'border-transparent opacity-40 hover:opacity-80'} transition-all`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      {currentImageIndex === idx && (
                         <div className="absolute inset-0 bg-orange-500/10 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ================= RIGHT: SCROLLABLE CONTENT ================= */}
            <div className="flex-1 flex flex-col w-full md:w-[45%] lg:w-[40%] bg-[#0f0f0f] h-[60vh] md:h-full overflow-hidden">
              
              {/* 
                 FIX: overscroll-contain
                 This prevents the scroll event from bubbling up to the body 
                 when you reach the top/bottom of this container.
              */}
              <div 
                className="flex-1 overflow-y-auto industrial-scrollbar overscroll-contain p-6 md:p-10 space-y-8"
                onWheel={(e) => e.stopPropagation()} // Extra safety measure
              >
                
                {/* Header */}
                <div>
                   <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Project_Details</span>
                   </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4 leading-none">
                    {project.title}
                  </h2>
                  
                  <div className="text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-orange-500/30 pl-5 py-1">
                    <FireText text={project.desc} />
                    {project.subdesc && (
                       <div className="mt-4 text-gray-500 text-sm font-light">
                          {project.subdesc}
                       </div>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 py-4 border-t border-b border-white/5">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      Live_Link
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                      GitHub_Repo
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-[10px] font-mono text-gray-500 uppercase mb-3">Tech_Stack_Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 px-3 py-2 hover:border-orange-500/50 transition-colors">
                        <img src={tag.path} alt="" className="w-4 h-4" />
                        <span className="text-[10px] text-gray-300 font-mono uppercase tracking-wider">{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta Data Grid */}
                <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6">
                  <MetaItem label="Category" value={project.category} />
                  <MetaItem label="Status" value={project.status} isStatus />
                  <MetaItem label="Role" value={project.role} />
                  <MetaItem label="Timeline" value={project.duration} />
                </div>
                
                {/* Features List */}
                {project.features && (
                   <div className="pt-2">
                      <h3 className="text-[10px] font-mono text-gray-500 uppercase mb-3">Key_Features</h3>
                      <ul className="space-y-2">
                         {project.features.map((feat, i) => (
                            <li key={i} className="text-xs text-gray-400 font-mono flex items-start gap-3">
                               <span className="text-orange-500">>></span>
                               {feat}
                            </li>
                         ))}
                      </ul>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

// Helper Component for Metadata
const MetaItem = ({ label, value, isStatus }) => (
  <div>
    <span className="text-[9px] font-mono text-gray-600 uppercase block mb-1">{label}</span>
    <span className={`text-sm font-bold uppercase ${isStatus ? 'text-green-500' : 'text-white'}`}>
      {value || 'N/A'}
    </span>
  </div>
);

export default ProjectModal;