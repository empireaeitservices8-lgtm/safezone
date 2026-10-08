import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Heart, Sparkles, Leaf } from "lucide-react";

export const metadata = {
  title: "Our Approach | Safezone",
  description: "Our approach brings together comfort, hygiene, protection, innovation, and sustainability.",
};

export default function ApproachPage() {
  const steps = [
    {
      id: "comfort",
      title: "Comfort",
      icon: Heart,
      desc: "We believe personal care should feel effortless. Our products are designed with soft, gentle materials that move with you, ensuring you remain comfortable throughout the day.",
    },
    {
      id: "hygiene",
      title: "Hygiene",
      icon: CheckCircle2,
      desc: "Hygiene is the foundation of wellness. We employ strict quality standards and responsible manufacturing processes to deliver clean, safe products you can trust.",
    },
    {
      id: "protection",
      title: "Protection",
      icon: ShieldCheck,
      desc: "Confidence comes from reliable protection. Our sanitary pads and wellness products are engineered to provide dependable performance when you need it most.",
    },
    {
      id: "innovation",
      title: "Innovation",
      icon: Sparkles,
      desc: "We continuously look for better ways to do things. By integrating modern design and technology, we aim to elevate the standard of everyday personal care.",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      icon: Leaf,
      desc: "Caring for you means caring for the planet. We are dedicated to making environmentally responsible choices in our materials and processes to support a sustainable future.",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-10 sm:py-14 bg-ivory text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-charcoal mb-4 sm:mb-6">Our Approach</h1>
        <p className="text-base sm:text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed text-balance">
          Our approach brings together comfort, hygiene, protection, innovation, and sustainability to create products that support confidence throughout every stage of life.
        </p>
      </section>

      {/* Steps */}
      <section className="py-10 sm:py-14 md:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 md:space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div key={step.id} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 lg:gap-14 group`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-ivory-dark">
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <Icon className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 text-sage/30" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-sage-light flex items-center justify-center mb-4 sm:mb-6 text-sage-dark">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3 sm:mb-4">{step.title}</h2>
                  <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 md:py-16 bg-ivory-dark text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4 sm:mb-6">Experience It Yourself</h2>
        <Link href="/shop" className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium text-base sm:text-lg">
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
