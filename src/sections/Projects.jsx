import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { myProjects } from '../constants/index.js';
import ProjectModal from '../components/ProjectModal';

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group relative bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-orange-500/50 transition-colors duration-300 flex flex-col h-full"
    >
      {/* Hover Overlay - Scanner Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
      </div>

      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-orange-500 transition-colors z-20" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-orange-500 transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 group-hover:border-orange-500 transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-orange-500 transition-colors z-20" />

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-black">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
        />
        {/* Project Logo Badge */}
        <div className="absolute top-3 left-3 bg-black/80 border border-white/10 p-1.5 backdrop-blur-sm z-10">
          <img src={project.logo} alt="logo" className="w-6 h-6 object-contain" />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col relative z-10">
        
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 font-light leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-2 py-1">
                <img src={tag.path} alt={tag.name} className="w-3 h-3" />
                <span className="text-[10px] font-mono text-gray-300 uppercase">{tag.name}</span>
              </div>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] font-mono text-gray-500 px-2 py-1 self-center">+{project.tags.length - 4}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-500 group-hover:text-orange-500 transition-colors">
              // VIEW_DETAILS
            </span>
            <div className="w-8 h-8 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="projects">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-orange-500"></span>
            <span className="h-px w-12 bg-orange-500/50"></span>
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Portfolio Index</span>
            <span className="h-px w-12 bg-orange-500/50"></span>
            <span className="w-2 h-2 bg-orange-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight text-center">
            Featured <span className="text-gray-600">Deployments</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < myProjects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-sm font-mono text-white uppercase tracking-widest flex items-center gap-2">
                Load_More_Data
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;