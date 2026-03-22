import { motion } from 'motion/react';
import { Home, User, BookOpen, Code, Briefcase, Award, Mail, BookMarked, FileBadge, Info } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: Info, label: 'About' },
  { id: 'journey', icon: User, label: 'Journey' },
  { id: 'training', icon: BookMarked, label: 'Training' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'certifications', icon: FileBadge, label: 'Certifications' },
  { id: 'achievements', icon: Award, label: 'Achievements' },
  { id: 'education', icon: BookOpen, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navigation({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (id: string) => void }) {
  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-panel rounded-full px-6 py-3 flex items-center gap-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative p-2 rounded-full transition-colors duration-300 group ${
              isActive ? 'text-neon-blue' : 'text-gray-400 hover:text-white'
            }`}
            aria-label={item.label}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-neon-blue/20 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <Icon size={20} className="relative z-10" />
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded border border-glass-border pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
          </button>
        );
      })}
    </motion.nav>
  );
}
