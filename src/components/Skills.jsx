import { motion } from 'framer-motion';
import { Section, Container, Card, SectionTitle } from './Common';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 20 },
        { name: 'MongoDB', level: 45 },
        { name: 'Express.js', level: 15 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 55 },
        { name: 'REST APIs', level: 29 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="skills" variant="light">
      <Container>
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I've mastered over the years"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card variant="elevated" className="p-8 h-full hover:shadow-2xl">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills - Badges */}
        <motion.div
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Also Familiar With
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Redux',
              'React',
              'JavaScript',
              'Redux-Toolkit',
              'zustand',
              'Tailwind.css'
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700/50 hover:shadow-md smooth-transition"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
