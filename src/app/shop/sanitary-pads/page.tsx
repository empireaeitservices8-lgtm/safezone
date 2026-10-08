import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, Heart, Leaf } from "lucide-react";

export const metadata = {
  title: "Sanitary Pads | Safezone",
  description: "Comfort That Moves With You. Discover sanitary pads designed with everyday comfort.",
};

export default function SanitaryPadsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-8 sm:py-12 md:py-16 bg-blush text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-3 sm:mb-4">
          Comfort That Moves With You
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Discover sanitary pads designed with everyday comfort, hygiene and dependable protection in mind.
        </p>
      </section>

      <section className="py-6 sm:py-10 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-3 border-b border-gray-100 gap-3">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <button className="flex items-center gap-2 px-3.5 py-1.5 border border-gray-200 rounded-full text-xs sm:text-sm font-medium hover:border-charcoal transition-colors">
                <Filter className="w-3.5 h-3.5" />
                Filter
              </button>
              <span className="text-xs sm:text-sm text-charcoal-light">Showing 4 products</span>
            </div>
            
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs sm:text-sm text-charcoal-light">Sort by:</span>
              <button className="flex items-center gap-1 text-xs sm:text-sm font-medium text-charcoal">
                Featured
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
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
                  <Link href={`/product/pad-${item}`} className="text-base md:text-lg font-heading font-semibold text-charcoal hover:text-sage transition-colors line-clamp-2 mb-1">
                    Safezone Everyday Comfort Pad - Family Pack (40)
                  </Link>
                  <p className="text-[11px] md:text-xs text-sage-dark font-medium mb-2">
                    Sizes: XL, XXL, XXXL (40 Pads)
                  </p>
                  <div className="flex items-center gap-2 mb-1 pt-1">
                    <span className="text-base md:text-lg font-bold text-charcoal">₹680</span>
                    <span className="text-xs md:text-sm text-charcoal-light line-through">₹799</span>
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
