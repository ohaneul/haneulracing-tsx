import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPostBySlug, BlogPost as BlogPostType } from '../utils/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then(setPost);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f1218] via-[#1a0f1e] to-[#120f24] text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1218] via-[#1a0f1e] to-[#120f24] text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-darker transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToBlog')}
          </Link>

          <img
            src={post.image}
            alt={language === 'en' ? post.title : post.titleKr}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ko-KR')}
            </span>
            <Clock className="w-4 h-4 ml-4 mr-2" />
            <span>{post.readTime} min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'en' ? post.title : post.titleKr}
          </h1>
          <p className="text-xl text-gray-300">
            {language === 'en' ? post.excerpt : post.excerptKr}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-invert prose-primary max-w-none"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ node, ...props }) => (
                <img className="rounded-xl w-full" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-primary hover:text-primary-darker" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </div>
  );
}