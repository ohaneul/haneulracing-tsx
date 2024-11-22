import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#achievements', label: t('achievements') },
    { href: '#racing-profile', label: t('profile') },
    { href: '#simracing', label: t('simRacing') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-darker bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Haneul Racing
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {theme === 'dark' ? <Sun className="text-primary" /> : <Moon className="text-primary" />}
            </motion.button>

            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Languages className="text-primary" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Korean' : 'Switch to English'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}