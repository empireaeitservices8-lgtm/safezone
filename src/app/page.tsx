import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Heart, CheckCircle2 } from "lucide-react";
import KeyFeaturesButton from "@/components/product/KeyFeaturesButton";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Safezone Wellness"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/70 to-transparent md:w-3/4" />
          <div className="absolute inset-0 bg-ivory/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl pt-16 md:pt-0">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-charcoal mb-8 leading-[1.05] tracking-tight">
              Comfort.<br />
              Protection.<br />
              Confidence.
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-xl font-medium leading-relaxed">
              Thoughtfully designed personal hygiene and wellness solutions for everyday life.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/shop"
                className="px-10 py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-all duration-300 font-medium text-lg min-w-[200px] text-center shadow-sm"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 bg-white/60 backdrop-blur-md border border-charcoal/10 text-charcoal rounded-full hover:bg-white transition-all duration-300 font-medium text-lg min-w-[200px] text-center"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST / BENEFIT STRIP */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light/50 flex items-center justify-center mb-6 text-sage-dark">
                <Heart strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-heading font-bold text-charcoal mb-3">Thoughtfully Designed</h3>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-xs text-balance">
                Products created around everyday needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light/50 flex items-center justify-center mb-6 text-sage-dark">
                <CheckCircle2 strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-heading font-bold text-charcoal mb-3">Comfort First</h3>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-xs text-balance">
                A focus on comfort and ease of use.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light/50 flex items-center justify-center mb-6 text-sage-dark">
                <ShieldCheck strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-heading font-bold text-charcoal mb-3">Reliable Protection</h3>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-xs text-balance">
                Designed to support confidence throughout the day.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light/50 flex items-center justify-center mb-6 text-sage-dark">
                <Leaf strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-heading font-bold text-charcoal mb-3">Responsible Choices</h3>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-xs text-balance">
                A commitment toward environmentally responsible products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SHOP BY CATEGORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
              Find What Fits Your Routine
            </h2>
            <div className="w-24 h-1 bg-sage rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sanitary Pads",
                desc: "Everyday comfort & protection",
                href: "/shop/sanitary-pads",
                image: "/images/categories/sanitary-pads.jpg",
              },
              {
                title: "Wellness",
                desc: "For your overall well-being",
                href: "/shop/wellness",
                image: "/images/categories/wellness.jpg",
              },
              {
                title: "Personal Hygiene",
                desc: "Clean and gentle essentials",
                href: "/shop",
                image: "/images/categories/hygiene.jpg",
              },
              {
                title: "New Arrivals",
                desc: "Discover our latest additions",
                href: "/shop",
                image: "/images/categories/new-arrivals.png",
              },
            ].map((category) => (
              <Link key={category.title} href={category.href} className="group block h-full">
                <div className="relative h-[380px] rounded-[32px] p-7 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-charcoal/5">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle darkening gradient at bottom for crystal clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-300 group-hover:from-charcoal/95" />

                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm mb-5 leading-relaxed">{category.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blush transition-colors">
                      Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
              Made for Your Everyday
            </h2>
            <div className="w-24 h-1 bg-sage rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder Products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image src={item % 2 === 0 ? "/003.png" : "/001.png"} alt="Product Image" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-blush transition-colors">
                      <Heart className="w-5 h-5 text-charcoal" />
                    </button>
                  </div>
                  {item === 1 && (
                    <div className="absolute top-4 left-4 bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Best Seller
                    </div>
                  )}
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-3 bg-white/90 backdrop-blur text-charcoal font-semibold rounded-xl hover:bg-sage hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-1 text-xs text-charcoal-light uppercase tracking-wider">Sanitary Pads</div>
                  <Link href="/product/placeholder" className="text-lg font-heading font-semibold text-charcoal hover:text-sage transition-colors line-clamp-2 mb-2">
                    Safezone Everyday Comfort Pad - Pack of 10
                  </Link>
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-[#F5C518] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-charcoal-light ml-1">(4.8)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-charcoal">₹120</span>
                    <span className="text-sm text-charcoal-light line-through">₹150</span>
                  </div>
                  <KeyFeaturesButton />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY SAFEZONE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
              Personal Care, Reimagined
            </h2>
            <div className="w-24 h-1 bg-sage rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {[
              { num: "01", title: "Comfort", desc: "Designed around everyday comfort." },
              { num: "02", title: "Hygiene", desc: "Focused on responsible hygiene solutions." },
              { num: "03", title: "Protection", desc: "Products designed to support dependable everyday protection." },
              { num: "04", title: "Innovation", desc: "Modern product design and technology." },
              { num: "05", title: "Sustainability", desc: "A commitment toward environmentally responsible choices." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col p-6 bg-ivory rounded-[24px] border border-sage-light/30 hover:border-sage transition-colors">
                <span className="text-4xl font-heading font-bold text-sage-light mb-6">{feature.num}</span>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DESIGNED AROUND REAL NEEDS */}
      <section className="py-0 overflow-hidden bg-ivory-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[50vh] lg:h-auto min-h-[500px]">
            <Image
              src="/images/lifestyle.jpg"
              alt="Safezone Lifestyle"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 lg:px-20 xl:px-32">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
              Designed Around<br />Real Needs
            </h2>
            <p className="text-lg text-charcoal-light mb-12 max-w-lg leading-relaxed">
              We focus on developing high-quality sanitary pads and wellness products designed around the real needs of women.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sage before:via-sage-light before:to-transparent">
              {[
                "Thoughtful Product Design",
                "Carefully Selected Materials",
                "Modern Technology",
                "Stringent Quality Standards"
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-ivory-dark bg-sage text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-2xl bg-white/50 backdrop-blur shadow-sm border border-sage-light/20">
                    <h4 className="font-heading font-semibold text-charcoal text-lg">{step}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/our-approach" className="inline-flex items-center px-8 py-4 bg-white text-charcoal rounded-full hover:bg-sage hover:text-white shadow-sm transition-colors font-medium group">
                Discover Our Approach
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR MISSION */}
      <section className="py-32 bg-sage text-white relative overflow-hidden">
        {/* Abstract botanical shapes could go here as absolute background */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <Leaf className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm tracking-[0.3em] uppercase font-semibold mb-8 text-white/80">Our Mission</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight text-balance">
            "To create gentle, organic, and environmentally responsible personal and wellness care solutions that promote human well-being while protecting and caring for our planet."
          </p>
        </div>
      </section>

      {/* SECTION 8: ABOUT SAFEZONE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-12">
            About Safezone
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-charcoal-light leading-relaxed font-medium">
            <p>
              We are a wellness and personal hygiene company committed to creating safe, comfortable, and responsible hygiene solutions for everyday life.
            </p>
            <p>
              Our journey is driven by a simple purpose — to make personal care safer, more comfortable, and more accessible while caring for our planet.
            </p>
            <p>
              We focus on developing high-quality sanitary pads and wellness products designed around the real needs of women. By combining thoughtful product design, carefully selected materials, modern technology, and stringent quality standards, we aim to deliver protection and comfort women can trust every day.
            </p>
          </div>

          <div className="mt-16">
            <Link href="/about" className="inline-block px-8 py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="py-32 bg-ivory-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-8 leading-tight">
            Feel Comfortable.<br />
            Feel Confident.
          </h2>
          <p className="text-xl text-charcoal-light mb-12 max-w-2xl mx-auto">
            Discover personal hygiene and wellness products thoughtfully designed for everyday life.
          </p>
          <Link href="/shop" className="inline-block px-10 py-5 bg-sage text-white rounded-full hover:bg-charcoal transition-colors font-medium text-lg shadow-sm hover:shadow-md">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
