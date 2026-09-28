import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, Heart, Leaf } from "lucide-react";

export const metadata = {
  title: "Shop All | Safezone",
  description: "Explore our collection of personal hygiene and wellness products.",
};

export default function ShopPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-16 bg-ivory text-center px-4">
        <h1 className="text-5xl font-heading font-bold text-charcoal mb-4">Shop Safezone</h1>
        <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
          Explore our collection of personal hygiene and wellness products.
        </p>
      </section>

      <section className="py-12 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-charcoal transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <span className="text-sm text-charcoal-light">Showing 4 products</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-charcoal-light">Sort by:</span>
              <button className="flex items-center gap-1 text-sm font-medium text-charcoal">
                Featured
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Products Grid Placeholder */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image src={item % 2 === 0 ? "/003.png" : "/001.png"} alt="Product Image" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-blush transition-colors">
                      <Heart className="w-5 h-5 text-charcoal" />
                    </button>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="mb-1 text-[10px] md:text-xs text-charcoal-light uppercase tracking-wider">Sanitary Pads</div>
                  <Link href={`/product/pad-${item}`} className="text-base md:text-lg font-heading font-semibold text-charcoal hover:text-sage transition-colors line-clamp-2 mb-2">
                    Safezone Everyday Comfort Pad - Pack of 10
                  </Link>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-base md:text-lg font-bold text-charcoal">₹120</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
