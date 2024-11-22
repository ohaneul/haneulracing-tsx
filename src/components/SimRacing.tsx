import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Trophy, Medal, Flag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SimRacing() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const virtualStats = [
    { icon: Monitor, label: 'Platform', value: 'iRacing' },
    { icon: Trophy, label: 'iRating', value: '2500+' },
    { icon: Medal, label: 'Safety Rating', value: 'A 4.99' },
    { icon: Flag, label: 'Main Series', value: 'Porsche Cup' },
  ];

  const achievements = [
    { value: '100+', label: 'Races' },
    { value: '15+', label: 'Wins' },
    { value: '30+', label: 'Podiums' },
  ];

  return (
    <section id="simracing" className="py-20 px-4 bg-gradient-to-br from-bg-gradient-1 via-bg-gradient-2 to-bg-gradient-3">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Sim Racing Career</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
        >
          Beyond real-world racing, I maintain a strong presence in the competitive sim racing scene,
          where I regularly compete in high-level events and championships.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Virtual Racing Profile</h3>
            <div className="space-y-4">
              {virtualStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="text-primary" />
                    <span>{label}:</span>
                  </div>
                  <span className="text-primary">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Virtual Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <span className="text-3xl font-bold text-primary mb-2">{value}</span>
                  <span className="text-sm text-gray-300">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}