import { motion } from 'motion/react';
import { User, Code2, Database, BrainCircuit } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Database,
      title: 'Data Science & ML',
      description: 'Extracting insights and building predictive models using Python and Machine Learning.',
      color: 'text-neon-purple',
      bg: 'bg-neon-purple/10',
    },
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Building responsive, interactive web applications using the MERN stack.',
      color: 'text-neon-blue',
      bg: 'bg-neon-blue/10',
    },
    {
      icon: BrainCircuit,
      title: 'Problem Solver',
      description: 'Strong foundation in Data Structures and Algorithms with a passion for logical challenges.',
      color: 'text-neon-cyan',
      bg: 'bg-neon-cyan/10',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">About Me</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A glimpse into who I am, what I do, and what drives my passion for technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-neon-blue/30 text-neon-blue text-sm font-mono mb-2">
            <User className="w-4 h-4" />
            <span>Sai Praneeth Patnam</span>
          </div>
          
          <h3 className="text-3xl font-bold text-white leading-tight">
            Engineering the future through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-emerald-400">Code & Data</span>
          </h3>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a B.Tech Computer Science and Engineering student at Lovely Professional University, passionate about turning complex problems into elegant, efficient solutions.
            </p>
            <p>
              My core passion lies in Data Science and Machine Learning. Whether it's building predictive models for wind power generation or conducting exploratory data analysis on global sales, I love extracting meaningful insights from raw data.
            </p>
            <p>
              As a secondary interest, I also enjoy Full-Stack Development. I have hands-on experience building interactive and responsive web applications using the MERN stack, which allows me to bring data-driven ideas to life on the web.
            </p>
            <p>
              My technical journey spans across core languages like C++, Python, and Java. I thrive in collaborative environments, bringing adaptability, strong decision-making skills, and a relentless problem-solving mindset to every project I tackle.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-panel p-6 rounded-2xl flex gap-6 items-start group hover:border-white/20 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
