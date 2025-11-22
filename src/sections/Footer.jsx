import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ashishkr375',
      icon: '/assets/github.svg',
      label: 'REPO_ACCESS'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashish-kumar-nitp/',
      icon: '/assets/linkedIN.jpg',
      label: 'PRO_NETWORK'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ashish_04_02',
      icon: '/assets/instagram.svg',
      label: 'VISUAL_FEED'
    }
  ];

  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-4 items-start justify-between mb-16">
          
          {/* 1. LEFT: BRAND & STATUS */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center bg-[#0a0a0a]">
                   <span className="font-mono font-bold text-white text-xs">AK</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-bold text-white uppercase tracking-wider">Ashish Kumar</span>
                   <span className="text-[10px] font-mono text-gray-500">FULL_STACK_ENGINEER</span>
                </div>
             </div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-900/30 bg-green-900/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">System_Online</span>
             </div>
          </div>

          {/* 2. CENTER: SOCIAL UPLINKS */}
          <div className="flex flex-col md:items-center gap-4">
             <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">Establish_Uplink</span>
             <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="group relative w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center hover:border-orange-500 transition-colors duration-300"
                  >
                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/20 group-hover:border-orange-500 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/20 group-hover:border-orange-500 transition-colors"></div>
                    
                    {/* Icon */}
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className={`w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 ${social.name === 'LinkedIn' ? 'rounded-full' : ''}`} 
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                       <span className="text-[9px] font-mono text-orange-500 bg-black/90 px-2 py-1 border border-white/10">
                          {social.label}
                       </span>
                    </div>
                  </motion.a>
                ))}
             </div>
          </div>

          {/* 3. RIGHT: LEGAL PROTOCOLS */}
          <div className="flex flex-col md:items-end gap-4">
             <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">Legal_Protocols</span>
             <div className="flex gap-6 text-xs text-gray-400 font-light">
                <a href="#" className="hover:text-orange-500 transition-colors relative group">
                   TERMS_&_CONDITIONS
                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors relative group">
                   PRIVACY_POLICY
                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
             </div>
             <div className="text-[10px] text-gray-600 font-mono">
                LAST_UPDATE: {new Date().toLocaleDateString()}
             </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[10px] text-gray-500 font-mono uppercase">
              © {currentYear} ASHISH KUMAR. ALL RIGHTS RESERVED.
           </p>

           {/* Animated Marquee / Status Line */}
           <div className="hidden md:flex items-center gap-4 overflow-hidden w-64 mask-image-gradient">
              <motion.div 
                 className="flex gap-8 whitespace-nowrap text-[9px] font-mono text-gray-700"
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                 <span>SYSTEM_STANDBY</span>
                 <span>//</span>
                 <span>AWAITING_INPUT</span>
                 <span>//</span>
                 <span>READY_FOR_NEW_PROJECTS</span>
                 <span>//</span>
                 <span>SYSTEM_STANDBY</span>
                 <span>//</span>
                 <span>AWAITING_INPUT</span>
                 <span>//</span>
                 <span>READY_FOR_NEW_PROJECTS</span>
              </motion.div>
           </div>

           <div className="text-[10px] text-gray-600 font-mono">
              LOC: INDIA // BIHAR
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;