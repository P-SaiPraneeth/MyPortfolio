import { motion } from 'motion/react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    id: 'lpu',
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    score: 'CGPA: 8.03',
    date: "Aug '23 – Jun '27",
    icon: GraduationCap,
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 'ssk-inter',
    institution: 'Sainik School Korukonda',
    location: 'Vizianagaram, Andhra Pradesh',
    degree: 'Intermediate (PCMB)',
    score: 'Percentage: 75.6%',
    date: "Apr '21 – Mar '23",
    icon: BookOpen,
    color: 'from-neon-purple to-neon-cyan',
  },
  {
    id: 'ssk-matric',
    institution: 'Sainik School Korukonda',
    location: 'Vizianagaram, Andhra Pradesh',
    degree: 'Matriculation',
    score: 'Percentage: 82.4%',
    date: "Apr '20 – Mar '21",
    icon: School,
    color: 'from-neon-cyan to-neon-blue',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Academic Timeline</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My educational background and academic achievements.
        </p>
      </div>

      <div className="space-y-8">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.id}
              className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden group flex flex-col md:flex-row items-start md:items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg relative z-10`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-grow relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  <span className="text-sm font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>
                <p className="text-lg text-gray-300 mb-1">{edu.degree}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
