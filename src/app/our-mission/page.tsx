import Image from "next/image";
import Link from "next/link";
import { Heart, Globe, Sparkles } from "lucide-react";

export const metadata = {
  title: "Our Mission | Safezone",
  description: "To create gentle, organic, and environmentally responsible personal and wellness care solutions.",
};

export default function MissionPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-sage text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* subtle pattern or shape */}
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold mb-4 sm:mb-6 text-white/80">Our Mission</h1>
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight text-balance">
            "To create gentle, organic, and environmentally responsible personal and wellness care solutions that promote human well-being while protecting and caring for our planet."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6 text-sage-dark shadow-sm">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-2 sm:mb-3">Better for People</h3>
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                We prioritize gentle, high-quality materials that respect your body. Comfort and safety are at the core of every product we develop.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6 text-sage-dark shadow-sm">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-2 sm:mb-3">Better by Design</h3>
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                Thoughtful design meets modern technology. We focus on real needs to create solutions that offer reliable protection and peace of mind.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6 text-sage-dark shadow-sm">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-2 sm:mb-3">Better for the Planet</h3>
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                We are committed to environmentally responsible practices. From sourcing to packaging, we look for ways to reduce our impact.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Visual Break */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[48vh] min-h-[220px] sm:min-h-[300px]">
        <Image
          src="/images/hero.jpg"
          alt="Safezone Wellness"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply" />
      </section>
    </div>
  );
}
