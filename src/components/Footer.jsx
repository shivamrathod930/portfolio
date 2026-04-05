import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '🐙', href: 'https://github.com/shivamrathod930', label: 'GitHub' },
    { icon: '💼', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '𝕏', href: 'https://twitter.com', label: 'Twitter' },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies and creative thinking.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleScroll(link.href)}
                  className="block text-slate-400 hover:text-blue-400 smooth-transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-blue-600 rounded-lg smooth-transition"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Mr. Shivam Rathod. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-400 text-sm">
            <motion.button
              className="hover:text-blue-400 smooth-transition"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              className="hover:text-blue-400 smooth-transition"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-slate-500 text-xs">
            Designed and built with{' '}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            {' '}by Mr. Shivam Rathod
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
