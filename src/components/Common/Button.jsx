import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...props
}) {
  const baseStyles =
    'font-medium rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl dark:from-blue-500 dark:to-blue-600',
    secondary: 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-700',
    outline: 'border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-900/50',
    ghost: 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </motion.button>
  );
}
