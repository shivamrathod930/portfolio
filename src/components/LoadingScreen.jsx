import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Animation */}
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Portfolio
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex gap-2"
          variants={containerVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
              variants={dotVariants}
              animate="animate"
              transition={{
                delay: index * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-slate-600 dark:text-slate-400 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
