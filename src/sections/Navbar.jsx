import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants/index.js';

// --- COMPONENT: INDIVIDUAL NAV LINK ---
const NavLink = ({ item, onClick, mobile = false, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      initial={mobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: mobile ? 0.1 + index * 0.1 : 0.5 + index * 0.1 }}
      className="relative"
    >
      <a
        href={item.href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group flex items-center gap-2 py-2 transition-all duration-300
          ${mobile ? 'text-2xl font-bold uppercase' : 'text-sm font-medium uppercase tracking-widest'}
          ${isHovered ? 'text-orange-500' : 'text-gray-300'}
        `}
      >
        {/* Decoration: // Prefix on Hover */}
        <span 
          className={`font-mono text-orange-500 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          //
        </span>
        
        <span className="relative">
           {item.name}
           {/* Underline Glitch Effect */}
           {!mobile && (
             <span className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`} />
           )}
        </span>
      </a>
    </motion.li>
  );
};

// --- MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* LOGO AREA */}
            <motion.a
              href="/"
              className="relative z-50 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                 {/* Tech Square Logo Placeholder */}
                 <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono text-xs border border-white group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-colors">
                    AK
                 </div>
                 <span className="text-white font-bold uppercase tracking-tight hidden sm:block">
                    Ashish <span className="text-gray-500 group-hover:text-orange-500 transition-colors">Kumar</span>
                 </span>
              </div>
            </motion.a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((item, index) => (
                  <NavLink key={item.id} item={item} index={index} />
                ))}
              </ul>
            </nav>

            {/* MOBILE MENU TOGGLE (HAMBURGER) */}
            <button
              onClick={toggleMenu}
              className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center border border-white/10 bg-[#0a0a0a] hover:border-orange-500/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                {/* Top Line */}
                <motion.span
                  className="absolute left-0 w-full h-0.5 bg-white origin-center"
                  animate={isOpen ? { top: '50%', rotate: 45, y: '-50%' } : { top: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Middle Line */}
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white"
                  animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Bottom Line */}
                <motion.span
                  className="absolute left-0 w-full h-0.5 bg-white origin-center"
                  animate={isOpen ? { bottom: '50%', rotate: -45, y: '50%' } : { bottom: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] sm:hidden flex flex-col pt-24 px-6"
          >
            {/* Background Grid for Mobile Menu */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Menu Header */}
            <div className="mb-8 pb-4 border-b border-white/10 flex justify-between items-center">
               <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System_Navigation</span>
               <span className="w-1.5 h-1.5 bg-orange-500 animate-pulse rounded-full"></span>
            </div>

            {/* Links */}
            <nav className="flex-1">
              <ul className="flex flex-col gap-6">
                {navLinks.map((item, index) => (
                  <NavLink 
                    key={item.id} 
                    item={item} 
                    index={index} 
                    mobile={true} 
                    onClick={closeMenu} 
                  />
                ))}
              </ul>
            </nav>

            {/* Mobile Footer Info */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-auto pb-10 text-center"
            >
               <div className="flex justify-center gap-4 mb-4">
                  <SocialIcon />
                  <SocialIcon />
                  <SocialIcon />
               </div>
               <p className="text-[10px] font-mono text-gray-600">
                  © 2024 ASHISH_KUMAR // SYSTEM_ONLINE
               </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Placeholder Social Icon
const SocialIcon = () => (
   <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-gray-500 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">
      <div className="w-2 h-2 bg-current rounded-full"></div>
   </div>
)

export default Navbar;