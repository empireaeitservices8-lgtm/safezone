import Image from "next/image";
import { ShieldCheck, Droplets, Clock } from "lucide-react";

export interface ProtectionFeature {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const TWELVE_PROTECTIONS: ProtectionFeature[] = [
  {
    id: 1,
    number: "01",
    title: "Bamboo Fibre Fabric",
    description:
      "It absorbs moisture three to four times faster than normal cotton, keeping you completely dry and cool.",
    image: "/images/protection/bamboo-fibre.svg",
    tag: "Organic Botanical",
  },
  {
    id: 2,
    number: "02",
    title: "High Absorption",
    description:
      "The combination of bamboo fibre, cellulose / fluff pulp and SAPs provides fast absorption and high fluid-retention capacity.",
    image: "/images/protection/high-absorption.svg",
    tag: "Fast Lock Core",
  },
  {
    id: 3,
    number: "03",
    title: "Dry Surface Feel",
    description:
      "The ADL rapidly transfers menstrual fluid away from the cotton top sheet, helping the user feel drier.",
    image: "/images/protection/dry-surface.svg",
    tag: "ADL Technology",
  },
  {
    id: 4,
    number: "04",
    title: "Breathable Comfort",
    description:
      "Bamboo / cotton materials and a breathable back sheet can improve airflow and reduce heat and moisture accumulation.",
    image: "/images/protection/breathable-comfort.svg",
    tag: "360° Air Circulation",
  },
  {
    id: 5,
    number: "05",
    title: "Leak Protection SAP",
    description:
      "SAP, absorbent core construction, backsheet and four-wing design work together to reduce side and bottom leakage.",
    image: "/images/protection/leak-protection.svg",
    tag: "4-Wing Barrier",
  },
  {
    id: 6,
    number: "06",
    title: "Soft on Skin",
    description:
      "A soft cotton or bamboo-cotton top sheet can provide a smoother contact surface, particularly important for prolonged wear.",
    image: "/images/protection/soft-on-skin.svg",
    tag: "Gentle Touch",
  },
  {
    id: 7,
    number: "07",
    title: "Better Odour & Moisture Management",
    description:
      "Bamboo fibre has useful moisture-management properties, providing natural freshness and confidence throughout the day.",
    image: "/images/protection/odour-moisture.svg",
    tag: "Natural Freshness",
  },
  {
    id: 8,
    number: "08",
    title: "Unbelievable Absorption",
    description:
      "Bio-based SAPs 12x times more absorption in heavy flow. It helps you dry, comfortable and confident during long wear.",
    image: "/images/protection/unbelievable-absorption.svg",
    tag: "12x Heavy Flow Lock",
  },
  {
    id: 9,
    number: "09",
    title: "Wide Back Coverage",
    description:
      "Extra protection where you need it most with extended back design for overnight peace of mind and heavy days.",
    image: "/images/protection/wide-back-coverage.svg",
    tag: "Overnight Security",
  },
  {
    id: 10,
    number: "10",
    title: "Side Wall Protection",
    description:
      "Helps prevent side leaks, offering worry-free active movement and total confidence all day long.",
    image: "/images/protection/side-wall-protection.svg",
    tag: "3D Anti-Leak Walls",
  },
  {
    id: 11,
    number: "11",
    title: "Biodegradable",
    description:
      "Care for you & care for nature, crafted with earth-conscious biodegradable materials that protect the planet.",
    image: "/images/protection/biodegradable.svg",
    tag: "Eco-Conscious",
  },
  {
    id: 12,
    number: "12",
    title: "No Harmful Chemicals",
    description:
      "Free from harmful chemicals, chlorine, and harsh toxins — gentle protection for your skin & comfort.",
    image: "/images/protection/no-harmful-chemicals.svg",
    tag: "100% Toxin-Free",
  },
];

export default function TwelveProtectionsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden" id="twelve-protections">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blush/30 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/10 text-sage-dark text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-sage" />
            <span>Complete Care Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-3 md:mb-4 tracking-tight">
            12 Types of Protection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-light max-w-2xl font-medium leading-relaxed mb-4 md:mb-5">
            Engineered with organic bamboo, advanced bio-absorption, and 360° leak defenses for all-day comfort, hygiene, and confidence.
          </p>

          {/* 2 Highlight Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <button
              type="button"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-ivory hover:bg-sage text-charcoal hover:text-white border border-sage/40 hover:border-sage shadow-xs hover:shadow-md transition-all duration-300 font-heading font-semibold text-sm sm:text-base cursor-pointer"
            >
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-sage group-hover:text-white transition-colors" />
              <span>Upto 250ml Absorption</span>
            </button>
            <button
              type="button"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-ivory hover:bg-sage text-charcoal hover:text-white border border-sage/40 hover:border-sage shadow-xs hover:shadow-md transition-all duration-300 font-heading font-semibold text-sm sm:text-base cursor-pointer"
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sage group-hover:text-white transition-colors" />
              <span>8-12 Hrs Protection</span>
            </button>
          </div>

          <div className="w-20 md:w-24 h-1 bg-sage rounded-full" />
        </div>

        {/* 12 Types of Protection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TWELVE_PROTECTIONS.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col bg-ivory rounded-[24px] sm:rounded-[28px] overflow-hidden border border-sage-light/30 hover:border-sage shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Preview with accurate SVG match */}
              <div className="relative aspect-[4/3] w-full bg-white overflow-hidden flex items-center justify-center p-3 border-b border-gray-100">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={280}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Feature Tag */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-sage-dark border border-sage/20 shadow-xs">
                  {feature.tag}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-heading font-bold text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
