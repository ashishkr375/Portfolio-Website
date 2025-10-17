import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, isOpen }) => (
  <ul className="nav-ul">
    {navLinks.map((item, index) => (
      <motion.li
        key={item.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="nav-li group"
      >
        <a 
          href={item.href} 
          className="nav-li_a relative"
          onClick={onClick}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
        </a>
      </motion.li>
    ))}
  </ul>
);

const Navbar = ({ onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    onThemeToggle();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-100/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-5">
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <img src="./assets/logo-white.png" alt="Ashish Kumar" className="w-32 h-auto"/>
          </motion.a>

          <div className="flex items-center gap-4">
            {/* <motion.button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-primary-500/5 hover:bg-primary-500/15'
                  : 'bg-primary-400/10 hover:bg-primary-400/20'
              } transition-all duration-300`}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-500'
                }`}
                initial={false}
                animate={{
                  rotate: theme === 'dark' ? 0 : 180,
                  scale: 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={theme === 'dark' 
                    ? "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    : "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  }
                />
              </motion.svg>
            </motion.button> */}

            <nav className="sm:flex hidden">
              <NavItems isOpen={false} />
            </nav>

            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex p-2 hover:bg-primary-500/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-5 h-0.5 bg-current transform transition-transform origin-center"
                  variants={{
                    open: { rotate: 45, y: 2 },
                    closed: { rotate: 0, y: 0 }
                  }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-current my-1"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-current transform transition-transform origin-center"
                  variants={{
                    open: { rotate: -45, y: -2 },
                    closed: { rotate: 0, y: 0 }
                  }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-sidebar"
          >
            <nav className="p-5">
              <NavItems onClick={closeMenu} isOpen={true} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;