import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  variant = 'default',
  whileHover = { y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
  ...props
}) {
  const variants = {
    default:
      'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md',
    glass: 'glass rounded-xl',
    elevated: 'bg-white dark:bg-slate-900 rounded-xl shadow-xl dark:shadow-2xl',
  };

  return (
    <motion.div
      className={`${variants[variant]} ${className} smooth-transition`}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.div>
  );
}
