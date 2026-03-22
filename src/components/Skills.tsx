import { motion } from 'motion/react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
  { name: 'Seaborn', logo: 'https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg' },
  { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Windows', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg' },
];

const radarData = [
  { subject: 'Data Analysis', A: 90, fullMark: 100 },
  { subject: 'Machine Learning', A: 85, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'Data Visualization', A: 90, fullMark: 100 },
  { subject: 'SQL & Databases', A: 80, fullMark: 100 },
  { subject: 'Software Engineering', A: 75, fullMark: 100 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Tech Stack Grid */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
          My Tech Stack
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-neon-blue rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-32">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-[#0f1219] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 hover:-translate-y-2 hover:border-white/10 transition-all duration-300 shadow-lg group"
          >
            <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.logo} 
                alt={`${skill.name} logo`} 
                className={`max-w-full max-h-full object-contain drop-shadow-md ${skill.invert ? 'invert opacity-90' : ''}`}
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-gray-200 font-semibold text-base tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Skill Matrix Radar Chart */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
          Skill Matrix
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-neon-purple rounded-full"></div>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-8">
          A multidimensional overview of my core competencies in Data Science and Software Engineering.
        </p>
      </div>

      <motion.div
        className="glass-panel p-8 rounded-3xl h-[400px] md:h-[500px] max-w-4xl mx-auto flex items-center justify-center relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#aaa', fontSize: 14, fontWeight: 500 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#00f3ff"
              fill="#00f3ff"
              fillOpacity={0.3}
              isAnimationActive={true}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#00f3ff', fontWeight: 'bold' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

    </section>
  );
}
