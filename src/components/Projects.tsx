import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, BarChart3, Wind, Terminal } from 'lucide-react';

const projects = [
  {
    id: 'cp-analyzer',
    title: 'Competitive Programming Performance Analyzer',
    shortDesc: 'A C++ analytics engine to track progress, identify weak topics, and recommend problems.',
    fullDesc: 'Developed a C++-based analytics engine that acts as a data-driven mentor for competitive programmers. It tracks solved problems, calculates weakness scores by topic, and provides smart problem recommendations. Features include efficient hash map lookups, CSV data integration, and an interactive CLI interface.',
    icon: Terminal,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tech: ['C++', 'Data Structures', 'Algorithms', 'CLI'],
    impact: 'Automated weakness detection and smart problem recommendations.',
    github: 'https://github.com/P-SaiPraneeth/Competitive-Programming-Analytics/tree/main',
    demo: 'https://github.com/P-SaiPraneeth/Competitive-Programming-Analytics/tree/main',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'vg-sales',
    title: 'Video Game Sales Data Exploration',
    shortDesc: 'Statistical analysis & insights on global video game sales trends.',
    fullDesc: 'A comprehensive data exploration project analyzing decades of video game sales data. Uncovered trends in genre popularity, regional preferences, and publisher dominance using advanced statistical methods and interactive visualizations.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Jupyter'],
    impact: 'Identified key factors driving sales in NA vs JP markets.',
    github: 'https://github.com/P-SaiPraneeth/Video_Games_Sales_Analysis',
    demo: 'https://github.com/P-SaiPraneeth/Video_Games_Sales_Analysis',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'wind-power',
    title: 'Wind Power Generation Forecasting',
    shortDesc: 'Machine learning model for predicting wind energy generation.',
    fullDesc: 'Developed a predictive model using historical weather data and turbine characteristics to forecast wind power output. This project aims to improve grid stability and optimize renewable energy integration.',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
    tech: ['Scikit-Learn', 'XGBoost', 'Time Series Analysis', 'Python'],
    impact: 'Achieved 85% accuracy in 24-hour ahead forecasting.',
    github: 'https://github.com/P-SaiPraneeth/Wind_Power_Generation_Forecasting',
    demo: 'https://github.com/P-SaiPraneeth/Wind_Power_Generation_Forecasting',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Project Showcase Lab</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interactive case studies of my most impactful work in data science and development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="glass-panel rounded-3xl overflow-hidden cursor-none group relative h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              </div>

              {/* GitHub Link in Corner */}
              {project.github && project.github !== '#' && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-all hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                  title="View Source on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <motion.div layoutId={`icon-${project.id}`} className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </motion.h3>
                
                <motion.p layoutId={`desc-${project.id}`} className="text-gray-300 mb-6 line-clamp-2">
                  {project.shortDesc}
                </motion.p>

                {/* Hover Reveal Content */}
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="pt-4 border-t border-glass-border">
                    <p className="text-sm font-mono text-neon-blue mb-3">Impact: {project.impact}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">+{project.tech.length - 3}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative bg-[#0a0a0a]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-64 md:h-80 w-full">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div layoutId={`icon-${selectedProject.id}`} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <selectedProject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl md:text-5xl font-bold text-white">
                    {selectedProject.title}
                  </motion.h3>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-neon-blue rounded-full" />
                        Overview
                      </h4>
                      <motion.p layoutId={`desc-${selectedProject.id}`} className="text-gray-300 leading-relaxed text-lg">
                        {selectedProject.fullDesc}
                      </motion.p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-lg font-semibold text-neon-purple mb-2">Key Impact</h4>
                      <p className="text-gray-200 font-mono">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-mono">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors font-medium">
                        <Github className="w-5 h-5" />
                        View Source
                      </a>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white transition-all hover:shadow-lg hover:opacity-90 font-medium`}>
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
