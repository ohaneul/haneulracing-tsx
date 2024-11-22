import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-8 text-primary">Professional Racing Career</h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg mb-8 leading-relaxed"
        >
          As a semi-professional racing driver in the Porsche Cup series, I compete in the highly demanding
          992 GT3 Cup car, which requires precision driving skills and technical expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20"
        >
          <p className="text-xl italic text-primary">
            Every race is an opportunity to showcase both speed and racecraft while pushing the limits
            of performance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}