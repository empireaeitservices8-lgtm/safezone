import Link from "next/link";
import { Filter, ChevronDown, Heart, Leaf } from "lucide-react";

export const metadata = {
  title: "Wellness | Safezone",
  description: "Everyday Wellness, Thoughtfully Designed. Discover our collection of wellness products.",
};

export default function WellnessPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-10 sm:py-14 bg-sage-light/30 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-3 sm:mb-4">
          Everyday Wellness, Thoughtfully Designed
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Discover our growing collection of wellness products, carefully crafted to support your overall well-being.
        </p>
      </section>

      <section className="py-8 sm:py-12 bg-white min-h-[350px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-10 sm:py-14 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ivory rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-2 sm:mb-3">Coming Soon</h2>
            <p className="text-sm sm:text-base text-charcoal-light max-w-md mx-auto mb-6">
              We are currently developing a beautiful new line of wellness products. Check back soon!
            </p>
            <Link href="/shop" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium text-sm sm:text-base">
              Explore Available Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
