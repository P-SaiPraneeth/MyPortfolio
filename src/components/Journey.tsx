import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Rocket, GraduationCap } from 'lucide-react';

const journeySteps = [
  {
    id: 1,
    title: 'Learning Programming',
    description: 'Started my journey with basic algorithms and data structures, building a strong foundation in computer science principles.',
    icon: Code2,
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue',
  },
  {
    id: 2,
    title: 'Exploring Data Science',
    description: 'Dove deep into statistics, machine learning algorithms, and data visualization techniques to extract meaningful insights.',
    icon: Database,
    color: 'text-neon-purple',
    borderColor: 'border-neon-purple',
  },
  {
    id: 3,
    title: 'Building Real-World Projects',
    description: 'Applied theoretical knowledge to practical problems, developing full-stack applications and predictive models.',
    icon: Rocket,
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
  },
  {
    id: 4,
    title: 'Continuous Education',
    description: 'Constantly expanding my skill set through advanced courses, certifications, and hands-on experimentation.',
    icon: GraduationCap,
    color: 'text-white',
    borderColor: 'border-white',
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="relative py-32 px-4 md:px-8 max-w-6xl mx-auto" ref={containerRef}>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">My Journey</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A timeline of my evolution from a curious learner to a capable developer and data enthusiast.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full overflow-hidden hidden md:block">
          <motion.div
            className="w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-24">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border-4 border-gray-800 flex items-center justify-center z-10 hidden md:flex">
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, type: 'spring' }}
                >
                  <div className={`glass-panel p-8 rounded-2xl border-l-4 ${step.borderColor} hover:bg-white/5 transition-colors duration-300 relative group`}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className={`p-3 rounded-full bg-gray-900 border ${step.borderColor}`}>
                          <Icon className={`w-5 h-5 ${step.color}`} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
