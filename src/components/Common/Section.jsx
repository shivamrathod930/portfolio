import { motion } from 'framer-motion';

export default function Section({
  id,
  children,
  className = '',
  variant = 'light',
  showPattern = false,
}) {
  const backgrounds = {
    light: 'bg-white dark:bg-slate-950',
    dark: 'bg-slate-50 dark:bg-slate-900',
    gradient: 'bg-gradient-to-br from-white to-blue-50 dark:from-slate-950 dark:to-slate-900',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[variant]} ${className} relative overflow-hidden smooth-transition`}
    >
      {showPattern && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:60px_60px]" />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
