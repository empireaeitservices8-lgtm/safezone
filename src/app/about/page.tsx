import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Safezone",
  description: "We are a wellness and personal hygiene company committed to creating safe, comfortable, and responsible hygiene solutions for everyday life.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-24 bg-ivory text-center px-4">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6">Who We Are</h1>
        <p className="text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          We are a wellness and personal hygiene company committed to creating safe, comfortable, and responsible hygiene solutions for everyday life.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[32px] overflow-hidden mb-16">
            <Image
              src="/images/lifestyle.jpg"
              alt="Safezone Lifestyle"
              fill
              className="object-cover object-center"
            />
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">Our Purpose</h2>
            <p className="text-lg text-charcoal-light leading-relaxed mb-6 text-balance">
              Our journey is driven by a simple purpose — to make personal care safer, more comfortable, and more accessible while caring for our planet.
            </p>
            <p className="text-lg text-charcoal-light leading-relaxed text-balance">
              We focus on developing high-quality sanitary pads and wellness products designed around the real needs of women. By combining thoughtful product design, carefully selected materials, modern technology, and stringent quality standards, we aim to deliver protection and comfort women can trust every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-sage-light/30">
            <div>
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Quality & Responsibility</h3>
              <p className="text-charcoal-light leading-relaxed">
                Every product we create undergoes rigorous quality checks. We believe that what touches your skin should be safe, gentle, and effective.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">A Commitment to Care</h3>
              <p className="text-charcoal-light leading-relaxed">
                Beyond products, our commitment is to the overall well-being of women. We strive to provide knowledge and solutions for better period care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sage text-white text-center px-4">
        <h2 className="text-4xl font-heading font-bold mb-6">Experience the Difference</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto text-white/90">
          Discover our range of thoughtfully designed products that support your everyday routine.
        </p>
        <Link href="/shop" className="inline-block px-10 py-4 bg-white text-sage rounded-full hover:bg-charcoal hover:text-white transition-colors font-medium text-lg">
          Explore Products
        </Link>
      </section>
    </div>
  );
}
