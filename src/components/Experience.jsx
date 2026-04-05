import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from './Common';

export default function Experience() {
  const experiences = [
//     {
//       id: 1,
//       role: 'Senior Full Stack Developer',
//       company: 'Tech Solutions Inc.',
//       duration: '2022 - Present',
//       description:
//         'Leading the development of scalable web applications and mentoring junior developers. Architected microservices infrastructure that reduced load times by 60%.',
//       highlights: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
//     },
//     {
//       id: 2,
//       role: 'Full Stack Developer',
//       company: 'Digital Innovations Ltd.',
//       duration: '2020 - 2022',
//       description:
//         'Developed and maintained multiple client-facing applications. Implemented real-time features using WebSockets and improved overall application performance.',
//       highlights: ['React', 'Express.js', 'MongoDB', 'AWS'],
//     },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'Creative Studios',
      duration: '2018 - 2020',
      description:
        'Created responsive and interactive web interfaces for various clients. Collaborated with designers to bring prototypes to life using modern frameworks.',
      highlights: ['React', 'JavaScript', 'Tailwind CSS', 'Redux-Toolkit'],
    },
    {
      id: 4,
      role: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: '2016 - 2018',
      description:
        'Assisted in developing web pages and fix bugs. Gained experience in full-stack development and learned best practices from experienced developers.',
      highlights: ['JavaScript', 'HTML/CSS'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="experience" variant="light">
      <Container>
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and contributions"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-16 w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="relative mt-2">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg ring-4 ring-white dark:ring-slate-950"
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 pb-8 md:pb-12 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md group-hover:shadow-xl smooth-transition">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <motion.span
                            key={highlight}
                            className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700/40"
                            whileHover={{ scale: 1.08 }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline end indicator */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-xl" />
              <div className="relative px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                🎯 Currently Open for Opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
