import { motion } from 'motion/react';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const achievements = [
  {
    id: 'sih',
    title: 'SIH-2025 Nominee',
    description: 'Nominated for the Smart India Hackathon 2025 for innovative problem-solving and technical excellence.',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'hackathon',
    title: 'Web Development',
    description: 'Secured 3rd position in a campus level hackathon, showcasing advanced problem-solving and development skills.',
    icon: Star,
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Achievements</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognitions, certifications, and key achievements in my professional journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.id}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <div className="relative z-10">
                <h3 className="font-bold text-white mb-3 text-2xl">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
