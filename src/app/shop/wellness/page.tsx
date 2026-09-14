import Link from "next/link";
import { Filter, ChevronDown, Heart, Leaf } from "lucide-react";

export const metadata = {
  title: "Wellness | Safezone",
  description: "Everyday Wellness, Thoughtfully Designed. Discover our collection of wellness products.",
};

export default function WellnessPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-sage-light/30 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
          Everyday Wellness, Thoughtfully Designed
        </h1>
        <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Discover our growing collection of wellness products, carefully crafted to support your overall well-being.
        </p>
      </section>

      <section className="py-12 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-10 h-10 text-sage" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Coming Soon</h2>
            <p className="text-charcoal-light max-w-md mx-auto mb-8">
              We are currently developing a beautiful new line of wellness products. Check back soon!
            </p>
            <Link href="/shop" className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium">
              Explore Available Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
