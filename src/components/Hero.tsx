import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
        url('https://images.unsplash.com/photo-1723572206884-cb2c3a7f99bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnNjaGUlMjA5OTIlMjBndDN8ZW58MHx8MHx8fDA%3D')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-transparent to-purple-900/50" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4 tracking-wider">Haneul Oh</h1>
        <h2 className="text-3xl text-pink-500 uppercase tracking-widest">
          {t('racingDriver')}
        </h2>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 1,
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pink-500 cursor-pointer"
      >
        <ChevronDown size={40} />
      </motion.button>
    </motion.div>
  );
}