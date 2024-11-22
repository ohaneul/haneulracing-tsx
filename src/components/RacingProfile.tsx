import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Car, Hash } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function RacingProfile() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const details = [
    { icon: User, label: 'Name', value: 'Haneul Oh' },
    { icon: Car, label: 'Series', value: 'Porsche Cup' },
    { icon: Car, label: 'Car', value: 'Porsche 992 GT3 Cup' },
    { icon: Hash, label: 'Racing Number', value: '#24' },
  ];

  const seasonStats = [
    { value: '6', label: 'Races' },
    { value: '2', label: 'Honoraries' },
    { value: '4th', label: 'Best Finish' },
  ];

  return (
    <section id="racing-profile" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Race Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Driver Details</h3>
            <div className="space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
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
            <h3 className="text-2xl font-bold mb-6 text-primary">2023 Season</h3>
            <div className="grid grid-cols-3 gap-4">
              {seasonStats.map(({ value, label }) => (
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