import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getAllPosts, BlogPost } from '../utils/blog';

export default function Blog() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1218] via-[#1a0f1e] to-[#120f24] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('blogTitle')}</h1>
          <p className="text-xl text-gray-300">{t('blogSubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl overflow-hidden border border-primary/20"
            >
              <img
                src={post.image}
                alt={language === 'en' ? post.title : post.titleKr}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ko-KR')}
                  </span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-primary">
                  {language === 'en' ? post.title : post.titleKr}
                </h2>
                <p className="text-gray-300 mb-4">
                  {language === 'en' ? post.excerpt : post.excerptKr}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-darker transition-colors"
                >
                  {t('readMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}