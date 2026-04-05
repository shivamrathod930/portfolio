import { motion } from 'framer-motion';
import { Button, Section, Container } from './Common';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <Section id="hero" variant="gradient" className="min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                👋 Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Mr. Shivam Rathod
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium">
                Frontend Developer & Creative Designer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                I craft beautiful, responsive web experiences with cutting-edge technologies. 
                Passionate about building products that make a difference.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Hire Me
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-8"
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-xl">
                    {social === 'GitHub' && '🐙'}
                    {social === 'LinkedIn' && '💼'}
                    {social === 'Twitter' && '𝕏'}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image/Illustration */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center justify-center"
          >
            <motion.div
              className="relative w-full h-96 md:h-full rounded-2xl overflow-hidden"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Gradient background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 opacity-20" />
              
              {/* Profile image area */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center rounded-2xl overflow-hidden">
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
