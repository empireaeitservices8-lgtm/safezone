import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & Knowledge | Safezone",
  description: "Knowledge for Better Period Care. Educational content and articles.",
};

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Sanitary Pad",
    category: "Period Care",
    excerpt: "Understanding different absorbency levels, sizes, and materials to find what works best for your body and lifestyle.",
    date: "10 Sep, 2026",
  },
  {
    id: 2,
    title: "How Often Should You Change Your Pad?",
    category: "Hygiene",
    excerpt: "Best practices for maintaining personal hygiene during your menstrual cycle to prevent discomfort and infections.",
    date: "05 Sep, 2026",
  },
  {
    id: 3,
    title: "Understanding Menstrual Hygiene",
    category: "Education",
    excerpt: "A comprehensive guide to understanding and practicing good menstrual hygiene for overall well-being.",
    date: "28 Aug, 2026",
  },
  {
    id: 4,
    title: "Tips for More Comfortable Period Days",
    category: "Wellness",
    excerpt: "Simple lifestyle changes, dietary tips, and self-care routines to help you feel more comfortable during your period.",
    date: "15 Aug, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="py-24 bg-sage text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Knowledge for Better Period Care</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Educational content, tips, and insights for your everyday wellness.
        </p>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-ivory rounded-[32px] overflow-hidden border border-sage-light/30 hover:border-sage transition-colors">
                <div className="relative aspect-[3/2] bg-sage-light flex items-center justify-center overflow-hidden">
                  <BookOpen className="w-12 h-12 text-sage/40 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-sage-dark uppercase tracking-wider bg-white px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-charcoal-light">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-charcoal mb-3 group-hover:text-sage transition-colors line-clamp-2">
                    <Link href={`/blog/post-${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link href={`/blog/post-${post.id}`} className="inline-flex items-center text-sm font-semibold text-charcoal group-hover:text-sage transition-colors">
                      Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
