import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, className = '' }) {
     return (
          <motion.div
               className={`text-center mb-12 md:mb-16 ${className}`}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
          >
               <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                    {title}
               </h2>
               {subtitle && (
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                         {subtitle}
                    </p>
               )}
               <div className="mt-6 flex justify-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                    <div className="h-1 w-3 bg-blue-400 rounded-full" />
               </div>
          </motion.div>
     );
}
