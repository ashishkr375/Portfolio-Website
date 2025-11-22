import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// --- DATA ---
const codeFiles = [
  {
    id: 'profile',
    name: 'Profile.tsx',
    lang: 'tsx',
    content: `import { Developer } from '@universe/india';
interface Props {
  status: 'Building' | 'Deploying';
}
export const AshishProfile = () => {
  // Constant improvement
  const skills = ['React', 'Next.js', 'Node'];
  return (
    <div className="bio-card">
      <Name>Ashish Kumar</Name>
      <Role>Full Stack Architect</Role>
      <Status>🚀 Production Ready</Status>
    </div>
  );
};`
  },
  {
    id: 'config',
    name: 'stack.config.json',
    lang: 'json',
    content: `{
  "project": {
    "name": "Portfolio_v2",
    "mode": "Industrial",
    "version": "2.0.0"
  },
  "stack": {
    "frontend": "Next.js 14",
    "ui": "Tailwind CSS",
    "backend": "Express / PostgreSQL"
  },
  "performance": {
    "ssr": true,
    "score": 100
  }
}`
  },
  {
    id: 'env',
    name: '.env.local',
    lang: 'bash',
    content: `API_URL="https://api.ashish.dev"
# Database Config
DB_HOST="aws-cluster-01"
DB_REGION="ap-south-1"
# Socials
GITHUB="ashishkr375"
LINKEDIN="in/ashish-kumar"
# Status
OPEN_TO_WORK=true`
  }
];

// --- ROBUST TYPEWRITER HOOK ---
const useTypewriter = (text, speed = 30, isActive) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    if (!isActive) {
        return;
    }
    // Reset when text changes
    setDisplayedText('');
    index.current = 0;

    const interval = setInterval(() => {
      if (index.current < text.length) {
        // Increment index slightly randomly for realism (1-2 chars)
        // BUT always slice from the original text to ensure data integrity
        index.current += Math.random() > 0.5 ? 2 : 1;
        
        // Clamp index to length
        if (index.current > text.length) index.current = text.length;
        
        setDisplayedText(text.substring(0, index.current));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isActive]);

  return displayedText;
};

// --- IMPROVED SYNTAX HIGHLIGHTER ---
const SyntaxHighlighter = ({ code, lang }) => {
  const lines = code.split('\n');

  return (
    <div className="font-mono text-[12px] leading-6 whitespace-pre">
      {lines.map((line, i) => (
        <div key={i} className="flex min-h-[1.5em]">
          {/* Line Number */}
          <span className="w-8 text-gray-700 text-right pr-3 select-none shrink-0 font-mono text-[10px] pt-0.5 opacity-50">
            {i + 1}
          </span>
          
          {/* Code Line - Using a safer regex split to preserve all chars */}
          <span className="break-words">
            {/* Split by non-word characters but keep delimiters to ensure no missing symbols */}
             {line.split(/([a-zA-Z0-9_]+|[^a-zA-Z0-9_\s]+)/).map((token, idx) => {
                if (!token) return null;
                const colorClass = getSyntaxColor(token, line, lang);
                return <span key={idx} className={colorClass}>{token}</span>;
             })}
          </span>
        </div>
      ))}
    </div>
  );
};

// Color Logic
const getSyntaxColor = (token, line, lang) => {
  const t = token.trim();
  if (!t) return ""; // Whitespace
  
  // Comments (Full line check)
  if (lang === 'bash' && line.trim().startsWith('#')) return "text-gray-500 italic";
  if (lang === 'tsx' && line.trim().startsWith('//')) return "text-gray-500 italic";

  // JSON Keys
  if (lang === 'json' && line.includes(':') && line.split(':')[0].includes(t)) return "text-blue-400";
  
  // Keywords
  if (['import', 'from', 'const', 'export', 'interface', 'return', 'default', 'function'].includes(t)) return "text-purple-400";
  if (['true', 'false', 'null', 'undefined'].includes(t)) return "text-orange-400";
  
  // Strings (Basic detection)
  if (t.startsWith('"') || t.startsWith("'") || t.endsWith('"') || t.endsWith("'")) return "text-green-400";
  if (lang === 'tsx' && (t.startsWith("'") || line.includes("'") && !line.includes("import"))) return "text-green-400";
  
  // Symbols
  if (['{', '}', '(', ')', '[', ']', '<', '>'].some(char => t.includes(char))) return "text-yellow-500";
  if (['=', ':', ';', '.', ','].includes(t)) return "text-gray-500";
  
  // Component Names (Capitalized words in TSX)
  if (lang === 'tsx' && /^[A-Z]/.test(t) && t.length > 1) return "text-yellow-200";

  return "text-gray-300";
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // 20ms speed = fast but readable typing
  const typedContent = useTypewriter(codeFiles[activeTab].content, 20, true);

  // Auto-switch tabs logic
  useEffect(() => {
    if (isHovering) return;
    
    // Wait for typing to likely finish + pause, then switch
    const switchTime = 5000; // 5 seconds total per tab
    
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % codeFiles.length);
    }, switchTime);
    
    return () => clearInterval(timer);
  }, [isHovering]);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#050505] text-white relative overflow-hidden pt-20" id="home">
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CODE EDITOR */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Backing Border */}
            <div className="absolute -top-1 -left-1 w-full h-full border border-white/10 bg-transparent z-0" />
            
            {/* Editor Container */}
            <div className="relative z-10 bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col h-[420px] max-w-xl mx-auto lg:mx-0">
              
              {/* Header */}
              <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between bg-[#0f0f0f]">
                <div className="flex items-center gap-3">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-red-500/20 border border-red-500/50 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-500/20 border border-yellow-500/50 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500/20 border border-green-500/50 rounded-full"></div>
                   </div>
                   <span className="ml-3 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                     Ashish_Workspace / {codeFiles[activeTab].name}
                   </span>
                </div>
              </div>

              {/* Main Layout */}
              <div className="flex flex-1 overflow-hidden">
                
                {/* Sidebar */}
                <div className="w-10 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-[#0c0c0c]">
                   <div className="text-gray-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg></div>
                   <div className="text-gray-700"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col bg-[#080808]">
                   
                   {/* Tab Bar */}
                   <div className="flex bg-[#0a0a0a] border-b border-white/10 overflow-x-auto no-scrollbar">
                      {codeFiles.map((file, idx) => (
                        <button
                          key={file.id}
                          onClick={() => setActiveTab(idx)}
                          className={`px-4 py-2 text-[10px] font-mono flex items-center gap-2 border-r border-white/5 transition-all whitespace-nowrap ${
                             activeTab === idx 
                             ? 'bg-[#080808] text-white border-t-2 border-t-orange-500' 
                             : 'text-gray-600 hover:bg-[#111] hover:text-gray-400 border-t-2 border-t-transparent'
                          }`}
                        >
                           {file.name}
                        </button>
                      ))}
                   </div>

                   {/* Code Viewport */}
                   <div className="flex-1 p-4 overflow-hidden font-mono text-[12px]">
                      <SyntaxHighlighter 
                        code={typedContent} 
                        lang={codeFiles[activeTab].lang} 
                      />
                      {/* Blinking Cursor (Standard Block) */}
                      <motion.div 
                        className="inline-block w-2 h-4 bg-orange-500 align-middle ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                   </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="h-6 bg-[#0f0f0f] border-t border-white/10 flex items-center justify-between px-3 text-[9px] font-mono text-gray-500">
                 <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-orange-400"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> BUSY</span>
                    <span>{codeFiles[activeTab].lang.toUpperCase()}</span>
                 </div>
                 <div>
                    Ln {typedContent.split('\n').length}, Col {typedContent.length}
                 </div>
              </div>
            </div>
          </motion.div>


          {/* RIGHT: TEXT CONTENT */}
          <div className="space-y-8 text-left">
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 mb-6">
                  <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">System Online</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[0.9]">
                   I BUILD <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                     DIGITAL
                   </span> <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                     REALITY.
                   </span>
                </h1>
             </motion.div>

             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="max-w-md border-l border-orange-500/30 pl-6"
             >
                <TypeAnimation
                   sequence={[
                     'Full Stack Engineer.',
                     1000,
                     'System Architect.',
                     1000,
                     'Performance Obsessive.',
                     1000
                   ]}
                   wrapper="p"
                   speed={50}
                   className="text-xl text-gray-400 font-mono"
                   repeat={Infinity}
                />
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                   Engineering precise, scalable web solutions. Moving beyond standard implementations to build robust digital ecosystems.
                </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex gap-4 pt-4"
             >
                <a href="#work" className="px-8 py-3 bg-white text-black font-bold text-sm uppercase hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                   View Projects
                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-mono text-sm uppercase hover:bg-white/5 transition-colors">
                   Contact_Me
                </a>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;