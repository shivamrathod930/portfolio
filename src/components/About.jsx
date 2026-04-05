import { motion } from 'framer-motion';
import { Section, Container, Card, SectionTitle } from './Common';

export default function About() {
  const skills = [
    '💡 Problem Solving',
    '🎨 Design thinking',
    '⚡ Performance',
    '🔒 Security',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="about" variant="dark">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better and discover what drives my passion for development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden md:block"
          >
            <Card variant="elevated" className="p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-4">🚀</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Building the future, one line of code at a time
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a passionate Frontend developer with over 2.5 years of experience building web applications.
                My journey in tech began with a curiosity about how things work, and it has evolved into a career
                focused on creating beautiful, functional, and user-centric digital experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I believe in continuous learning and staying updated
                with the latest industry trends.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Strengths</h3>
              <motion.div
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 smooth-transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800"
            >
              {[
                { number: '2+', label: 'Years' },
                { number: '10+', label: 'Projects' },
                { number: '10+', label: 'Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <motion.p
                    className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                    whileInView={{ scale: 1.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
