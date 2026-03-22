import { motion } from 'motion/react';
import { BookOpen, Calendar, Code, Database, Server, Layout } from 'lucide-react';

export default function Training() {
  return (
    <section id="training" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Training</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Continuous learning and skill development through intensive training programs.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
          
          {/* Google Drive Link Logo */}
          <a 
            href="https://drive.google.com/file/d/12CV9vnTl5vLP1dRIwuEClhaDc5dUJhXX/view"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 md:top-8 md:right-8 hover:scale-110 transition-transform duration-300 z-20"
            title="View Certificate on Google Drive"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" 
              alt="Google Drive" 
              className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg"
            />
          </a>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white pr-12">Full-Stack Development using MERN</h3>
              <p className="text-neon-cyan font-mono text-sm">Cipher Schools</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-8 font-mono text-sm bg-white/5 inline-flex px-3 py-1 rounded-full border border-white/10">
            <Calendar className="w-4 h-4" />
            <span>Jun '25 - Jul '25</span>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              During my intensive training at Cipher Schools, I gained hands-on experience in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The program focused heavily on RESTful API integration and establishing seamless front-end to back-end connectivity. Through this training, I successfully developed and deployed interactive, responsive web projects that demonstrated my proficiency in state management, database operations, and user authentication using modern JavaScript frameworks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { name: 'MongoDB', icon: Database },
              { name: 'Express.js', icon: Server },
              { name: 'React.js', icon: Layout },
              { name: 'Node.js', icon: Code },
            ].map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300 hover:bg-white/10 transition-colors">
                  <Icon className="w-4 h-4 text-neon-cyan" />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
