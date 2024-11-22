import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const quickLinks = [
    { href: '#about', label: t('about') },
    { href: '#achievements', label: t('achievements') },
    { href: '#racing-profile', label: t('profile') },
    { href: '#simracing', label: t('simRacing') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <footer className="bg-gradient-to-b from-bg-gradient-2 to-bg-gradient-1 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">About Haneul Racing</h3>
            <p className="text-gray-300 mb-6">
              Professional racing driver competing in the Porsche Cup series. Dedicated to pushing the
              limits of performance and inspiring the next generation of Korean motorsport talent.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary hover:text-primary-darker transition-colors"
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-6">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-primary mr-3" />
                contact@haneulracing.com
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                Seoul, South Korea
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Haneul Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}