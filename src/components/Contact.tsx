import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-8 text-primary">Join Our Community</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg mb-12"
        >
          Connect with us on Discord to join our racing community, share experiences, and stay updated
          on upcoming events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20"
        >
          <iframe
            src="https://discord.com/widget?id=1289900616419774534&theme=dark"
            width="100%"
            height="400"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}