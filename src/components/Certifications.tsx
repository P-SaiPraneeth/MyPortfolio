import { motion } from 'motion/react';
import { ShieldCheck, BadgeCheck, Award, FileCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 'oracle-ai',
    title: 'OCI Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2026',
    icon: ShieldCheck,
    color: 'from-red-500 to-orange-500',
    link: 'https://drive.google.com/file/d/1GV_XqVMeOLxfhKnLUdgIiwj6gfC99svm/view?usp=drive_link',
  },
  {
    id: 'deloitte-data',
    title: 'Data Analytics Simulation',
    issuer: 'Deloitte',
    year: '2025',
    icon: BadgeCheck,
    color: 'from-green-400 to-emerald-600',
    link: 'https://drive.google.com/file/d/1_fBpK5DWSYDiTXIa5xbHtsnnT9L1K2Ts/view',
  },
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    year: '2025',
    icon: Award,
    color: 'from-blue-400 to-cyan-600',
    link: 'https://drive.google.com/file/d/1mfIlvlFE3A6j1nhbUo7lW2m6cOwP6oky/view',
  },
  {
    id: 'infosys-dsa',
    title: 'Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    year: '2025',
    icon: FileCheck,
    color: 'from-purple-400 to-pink-600',
    link: 'https://drive.google.com/file/d/1bJ-QJgZCSdhtHpGLTdgPpAZi7nDN8AU1/view',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Certifications</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Professional certifications and verified achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              className="glass-panel p-6 rounded-3xl relative overflow-hidden group flex items-center gap-6 hover:bg-white/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative z-10 flex-1">
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-neon-cyan transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-neon-cyan">{cert.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="text-gray-400">{cert.year}</span>
                </div>
              </div>

              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
