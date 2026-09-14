import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ivory-dark pt-16 pb-8 border-t border-sage-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image src="/logo.png" alt="Safezone" width={200} height={66} className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-charcoal-light text-sm max-w-sm mb-8 leading-relaxed">
              Personal hygiene & wellness, thoughtfully designed. We focus on developing high-quality sanitary pads and wellness products designed around the real needs of women.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/shop/sanitary-pads" className="text-sm text-charcoal-light hover:text-sage transition-colors">Sanitary Pads</Link></li>
              <li><Link href="/shop/wellness" className="text-sm text-charcoal-light hover:text-sage transition-colors">Wellness</Link></li>
              <li><Link href="/shop" className="text-sm text-charcoal-light hover:text-sage transition-colors">Personal Hygiene</Link></li>
              <li><Link href="/shop?sort=new" className="text-sm text-charcoal-light hover:text-sage transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-charcoal-light hover:text-sage transition-colors">About Us</Link></li>
              <li><Link href="/our-mission" className="text-sm text-charcoal-light hover:text-sage transition-colors">Our Mission</Link></li>
              <li><Link href="/our-approach" className="text-sm text-charcoal-light hover:text-sage transition-colors">Our Approach</Link></li>
              <li><Link href="/contact" className="text-sm text-charcoal-light hover:text-sage transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-5">Customer Care</h4>
            <ul className="space-y-3">
              <li><Link href="/shipping-policy" className="text-sm text-charcoal-light hover:text-sage transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-charcoal-light hover:text-sage transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="text-sm text-charcoal-light hover:text-sage transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-charcoal-light hover:text-sage transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-charcoal-light hover:text-sage transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-charcoal/10">
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-3">Contact</h4>
            <address className="not-italic text-sm text-charcoal-light leading-relaxed">
              Safezone<br />
              Febisel Building<br />
              Adinadu South, Karunagappally<br />
              Kollam – 690542<br />
              Kerala, India
            </address>
          </div>
          <div className="flex flex-col md:items-end justify-center space-y-2">
            <a href="tel:+919544114949" className="text-sm text-charcoal-light hover:text-sage transition-colors flex items-center">
              Mobile: +91 9544114949
            </a>
            <a href="https://wa.me/919544114949" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal-light hover:text-sage transition-colors flex items-center">
              WhatsApp: +91 9544114949
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-charcoal-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Safezone. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-xs text-charcoal-light/50">Designed thoughtfully for everyday life.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
