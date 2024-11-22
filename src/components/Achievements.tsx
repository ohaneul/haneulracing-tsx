import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Medal, Flag, Timer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Achievements() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Flag, value: '12+', label: 'Race Starts' },
    { icon: Medal, value: '2', label: 'Honorary Finishes' },
    { icon: Timer, value: '4th', label: 'Best Finish' },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-bg-gradient-1 via-bg-gradient-2 to-bg-gradient-3">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-primary">Racing Achievements</h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg mb-12 leading-relaxed"
        >
          Through years of dedication in professional motorsports, I've grown significantly as a driver.
          Each race weekend has shaped me into the competitor I am today.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 * index }}
              className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}