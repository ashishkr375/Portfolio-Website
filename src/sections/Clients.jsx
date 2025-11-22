import { useEffect, useRef, useState } from 'react';
import { clientReviews } from '../constants/index.js';
import { 
  motion, 
  useMotionValue, 
  useAnimationFrame,
  useMotionValueEvent 
} from 'framer-motion';

const Clients = () => {
  return (
    <section className="c-space py-24 bg-[#050505] overflow-hidden relative select-none" id="clients">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>

      <div className="max-w-[1400px] mx-auto relative z-20">
        
        {/* Header - STATIC (No Animation) */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-3 px-4 py-1 border border-orange-500/20 bg-orange-500/5 rounded-full">
             <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
             <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">System_Logs // Live_Feed</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Client Feedback
          </h3>
        </div>

        {/* Draggable Infinite Track */}
        <InfiniteScrollTrack items={clientReviews} />
        
      </div>
    </section>
  );
};

const InfiniteScrollTrack = ({ items }) => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  
  // Motion Values
  const x = useMotionValue(0);
  
  // State to control auto-scrolling
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate items 4 times to ensure seamless looping on wide screens
  const loopedItems = [...items, ...items, ...items, ...items];

  // Measure content width once mounted
  useEffect(() => {
    if (containerRef.current) {
      // We calculate the width of ONE set of items to know when to reset
      // Total scrollWidth / 4 (since we duplicated 4 times)
      const totalWidth = containerRef.current.scrollWidth;
      setContentWidth(totalWidth / 2); // Reset halfway through
    }
  }, []);

  // The Game Loop for Auto-Scrolling
  useAnimationFrame((time, delta) => {
    if (!isDragging && !isHovering && contentWidth > 0) {
      // Move left by a small amount based on delta time (adjust 0.05 for speed)
      let moveBy = -0.05 * delta; 
      
      // Update X
      let newX = x.get() + moveBy;

      // Seamless Loop Logic:
      // If we've scrolled past half the content, snap back to 0
      if (newX <= -contentWidth) {
        newX = 0;
      }

      x.set(newX);
    }
  });

  // Handle dragging bounds manually to ensure loop feeling
  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth > 0 && isDragging) {
      if (latest <= -contentWidth) {
        x.set(0);
      } else if (latest > 0) {
        x.set(-contentWidth);
      }
    }
  });

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing px-8"
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // Loose constraints, we handle wrapping manually
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        dragElastic={0.1} // Adds a nice resistance feel
      >
        {loopedItems.map((item, index) => (
          <ReviewCard key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const ReviewCard = ({ item }) => {
  return (
    <div className="group relative shrink-0 w-[400px] md:w-[450px] h-[280px] bg-[#0a0a0a] border border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col overflow-hidden select-none">
      
      {/* Hover Overlay (Scanner) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
         <div className="w-full h-[1px] bg-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-scan-down" />
      </div>

      {/* Industrial Corner Markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20 group-hover:border-orange-500 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20 group-hover:border-orange-500 transition-colors" />

      {/* --- HEADER --- */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0e0e0e] z-10">
         <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span>ID: {item.id.toString().padStart(3, '0')}</span>
         </div>
         {/* Stars */}
         <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
               <svg key={i} className="w-2.5 h-2.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg>
            ))}
         </div>
      </div>

      {/* --- BODY --- */}
      <div className="p-6 flex-grow relative z-10 flex flex-col">
         
         {/* Review Text */}
         <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-4 group-hover:text-white transition-colors pointer-events-none">
            "{item.review}"
         </p>
         
         {/* Tags Row */}
         <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {item.tags && item.tags.slice(0, 3).map((tag, idx) => (
               <span key={idx} className="px-2 py-1 text-[9px] font-mono uppercase border border-white/10 text-gray-500 bg-[#050505] group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
                  {tag}
               </span>
            ))}
         </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="px-5 py-3 border-t border-white/5 bg-[#0c0c0c] flex items-center gap-3 z-10 group-hover:bg-[#111] transition-colors">
         <div className="relative w-10 h-10 overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-colors">
            <img 
               src={item.img} 
               alt={item.name} 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
            />
         </div>
         <div className="flex flex-col justify-center min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-wide truncate pointer-events-none">
               {item.name}
            </h4>
            <p className="text-[10px] text-gray-600 font-mono truncate group-hover:text-orange-500/70 transition-colors pointer-events-none">
               {item.position}
            </p>
         </div>
      </div>
    </div>
  );
};

export default Clients;