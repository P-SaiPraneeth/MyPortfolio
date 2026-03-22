import { motion } from 'motion/react';
import { Github, Linkedin, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Data Analyst', 'ML Enthusiast', 'Full-Stack Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedRole === currentRole) {
      typingSpeed = 2000; // Pause at end of word
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedRole((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,243,255,0.8)] animate-pulse" />
            <span className="text-neon-cyan text-sm font-medium tracking-wide">
              Open to Internships / Full-Time Opportunities
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neon-blue/30 shadow-[0_0_30px_rgba(0,243,255,0.2)] mb-8 relative group"
          >
            <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img 
              src="/profile.jpeg" 
              alt="Sai Praneeth" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Sai Praneeth</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-3xl text-gray-300 font-light">
              I am a <span className="font-mono text-neon-blue font-semibold">{displayedRole}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I turn <span className="text-white">data into decisions</span> & <span className="text-white">ideas into applications</span>. 
            Building the future with code, algorithms, and a touch of creativity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/P-SaiPraneeth"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-neon-blue transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/p-sai-praneeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-neon-purple transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 group-hover:text-neon-purple transition-colors" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Sai_Praneeth_CV.pdf"
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Fun Fact / Stats Mock */}
          <motion.div 
            className="glass-panel inline-flex items-center gap-4 px-6 py-3 rounded-2xl border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-sm font-mono text-neon-cyan">
              Fun Fact: I debug best with a cup of coffee ☕
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent"
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
