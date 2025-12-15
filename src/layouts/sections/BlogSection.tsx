import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { supabase } from '../../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  read_time: number;
  published_at: string;
}

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchPosts = async () => {
      if (!supabase) {
        // Fallback blog posts if Supabase is not configured
        const fallbackPosts: BlogPost[] = [
          {
            id: '1',
            title: '5 Signs Your Car Needs Immediate Service',
            slug: '5-signs-your-car-needs-immediate-service',
            excerpt: 'Learn how to keep your car in top condition with these essential maintenance tips tailored for Indian road conditions.',
            cover_image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
            read_time: 5,
            published_at: new Date().toISOString(),
          },
          {
            id: '2',
            title: 'Understanding OEM vs Aftermarket Parts',
            slug: 'understanding-oem-vs-aftermarket-parts',
            excerpt: 'Understanding the signs that indicate your car battery needs replacement and how to choose the right one.',
            cover_image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg',
            read_time: 4,
            published_at: new Date().toISOString(),
          },
          {
            id: '3',
            title: 'How to Extend Your Engine Life',
            slug: 'how-to-extend-your-engine-life',
            excerpt: 'A comprehensive guide to what different warning lights on your dashboard mean and when to seek professional help.',
            cover_image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg',
            read_time: 6,
            published_at: new Date().toISOString(),
          },
        ];
        setPosts(fallbackPosts);
        return;
      }

      const { data } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, cover_image, read_time, published_at')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (data) {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Section id="blog" className="py-16 lg:py-24 bg-slate-50">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-slate-600">
            Expert tips, maintenance guides, and automotive insights
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video bg-slate-200 overflow-hidden">
                {post.cover_image && !imageErrors.has(post.id) ? (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={() => {
                      setImageErrors((prev) => new Set(prev).add(post.id));
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    No image
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-slate-600 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time} min read</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <Button variant="outline" size="lg" as="a" href="/blog">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};
