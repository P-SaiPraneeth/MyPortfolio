import { motion } from 'motion/react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

const ExcelIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.85858 5.00913L13.5269 3.03812C13.7381 2.99906 13.9463 3.16246 13.9463 3.37731V20.6191C13.9463 20.8359 13.7342 21.0003 13.5216 20.9591L2.85329 18.8954C2.61066 18.8485 2.43457 18.6366 2.43457 18.3897V5.51493C2.43457 5.26601 2.61317 5.0545 2.85858 5.00913ZM6.07187 15.2255H7.54546L8.72692 13.183C8.80776 13.0461 8.88238 12.9031 8.95078 12.7538C9.00675 12.8807 9.07515 13.0188 9.15599 13.1681L10.2986 15.2255H11.8413L9.89417 11.9743L11.7853 8.87158H10.3546L9.2524 10.7271C9.15289 10.9045 9.07515 11.0662 9.01918 11.2124C8.98184 11.1018 8.91038 10.9475 8.80482 10.7495L7.78857 8.87158H6.21669L8.03721 11.9967L6.07187 15.2255ZM13.9463 5.51495H20.8486C21.2432 5.51495 21.5631 5.83487 21.5631 6.22944V17.767C21.5631 18.1616 21.2432 18.4815 20.8486 18.4815H13.9463V5.51495Z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">impactful together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>

          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/P-SaiPraneeth', color: 'hover:text-white hover:border-white' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/p-sai-praneeth/', color: 'hover:text-neon-blue hover:border-neon-blue' },
              { icon: ExcelIcon, href: '#', color: 'hover:text-emerald-400 hover:border-emerald-400', title: 'Excel Work' },
              { icon: Mail, href: 'mailto:patnamsaipranith5820@gmail.com', color: 'hover:text-neon-purple hover:border-neon-purple' },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  className={`w-14 h-14 rounded-full glass-panel flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-neon-cyan uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/50 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-neon-cyan uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/50 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-neon-cyan uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/50 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Hello Sai, I'd like to talk about..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${
                isSuccess
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : isSuccess ? (
                'Message Sent!'
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-glass-border text-center flex flex-col items-center justify-center">
        <p className="text-gray-500 font-mono text-sm">
          Designed & Built by Sai Praneeth
        </p>
        <p className="text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
}
