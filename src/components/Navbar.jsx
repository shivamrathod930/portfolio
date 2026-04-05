import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Common';

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side - Dark mode and menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 smooth-transition"
              whiveHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              whileTap={{ scale: 0.95 }}
            >
              <div className="space-y-1.5 w-6">
                <motion.div
                  className="h-0.5 w-full bg-slate-900 dark:bg-white rounded"
                  animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
                />
                <motion.div
                  className="h-0.5 w-full bg-slate-900 dark:bg-white rounded"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.div
                  className="h-0.5 w-full bg-slate-900 dark:bg-white rounded"
                  animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg smooth-transition"
                whileHover={{ x: 10 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
