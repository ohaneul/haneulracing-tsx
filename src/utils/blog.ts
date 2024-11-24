import matter from 'gray-matter';
import blogPosts from '../content/blog';

export interface BlogPost {
  slug: string;
  title: string;
  titleKr: string;
  date: string;
  readTime: string;
  excerpt: string;
  excerptKr: string;
  image: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return Object.entries(blogPosts).map(([slug, content]) => {
    const { data, content: markdown } = matter(content);
    
    return {
      slug,
      title: data.title,
      titleKr: data.titleKr,
      date: data.date,
      readTime: data.readTime,
      excerpt: data.excerpt,
      excerptKr: data.excerptKr,
      image: data.image,
      content: markdown,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}