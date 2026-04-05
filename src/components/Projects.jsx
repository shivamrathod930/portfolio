import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, Container, Card, Button, SectionTitle } from './Common';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with advanced filtering, payment integration, and admin dashboard.',
      image: '🛍️',
      tags: ['React', 'javaScript','tailwind.css','Redux-Tolkit'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop functionality and team collaboration.',
      image: '✅',
      tags: ['React', 'Moke Api','Redux-Toolkit', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#',
      },
    },
     {
      id: 3,
      title: 'Employee Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop functionality and team collaboration.',
      image: '✅',
      tags: ['React', 'Moke Api','Redux-Toolkit', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Todo App',
      description: 'Real-time collaborative task management tool ',
      image: '✅',
      tags: ['React', 'Moke Api','zustand', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

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
    <Section id="projects" variant="dark">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my best work and what I've built"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card
                variant="elevated"
                className="overflow-hidden h-full flex flex-col hover:shadow-2xl"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="text-7xl"
                    animate={hoveredProject === project.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={hoveredProject === project.id ? 'visible' : 'hidden'}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 text-center"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-center"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="primary" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
