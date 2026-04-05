import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Button, Card, SectionTitle } from './Common';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'rathodshivam1943@gmail.com',
      href: 'mailto:rathodshivam1943@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      href: 'https://linkedin.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/shivamrathod930',
      href: 'https://github.com/shivamrathod930',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@johndoe',
      href: 'https://twitter.com',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="contact" variant="dark">
      <Container>
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together and create something amazing"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Methods */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                >
                  <Card
                    variant="elevated"
                    className="p-6 flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-4xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {method.label}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 smooth-transition">
                        {method.value}
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.div>
                  </Card>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card
              variant="elevated"
              className="p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent smooth-transition text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="John Doe"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent smooth-transition text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="john@example.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent smooth-transition text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project..."
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.div>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={submitStatus === 'success' ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-center font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
