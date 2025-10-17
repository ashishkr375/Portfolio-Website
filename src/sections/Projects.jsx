import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { myProjects } from '../constants/index.js';
import ProjectModal from '../components/ProjectModal';

const projectCount = myProjects.length;

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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="project-card group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 line-clamp-2">{project.desc}</p>
          </div>
          <div className="p-2 bg-primary-500/10 rounded-lg">
            <img src={project.logo} alt="logo" className="w-8 h-8" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="tech-logo"
            >
              <img src={tag.path} alt={tag.name} className="w-5 h-5" />
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // Default show 6 on desktop
  
  // Determine how many to show based on screen size
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialCount = isMobile ? 3 : 6;
  const loadMoreCount = 3;
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + loadMoreCount);
  };

  const visibleProjects = myProjects.slice(0, visibleCount);
  const hasMore = visibleCount < myProjects.length;

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              View More Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        )}

        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={handleCloseModal}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-12 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary-500/10 rounded-full blur-xl" />
    </section>
  );
};

export default Projects;
