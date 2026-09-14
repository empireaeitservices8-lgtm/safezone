"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "Products",
    questions: [
      { q: "What products does Safezone offer?", a: "Safezone currently focuses on high-quality sanitary pads designed for everyday comfort and protection, along with a growing range of wellness and personal hygiene products." },
      { q: "How do I choose the right sanitary pad?", a: "Choosing the right pad depends on your flow and daily activities. We offer different absorbency levels and sizes to suit light to heavy flows, ensuring maximum comfort and protection." },
      { q: "What sizes are available?", a: "Our products are available in multiple sizes. Please check individual product pages for specific size information and pack details." },
      { q: "How many pads are included in each pack?", a: "Our standard packs usually contain 10 or 20 pads. Refer to the specific product description for exact quantities." },
      { q: "Are Safezone pads suitable for overnight use?", a: "Yes, we have products designed specifically for overnight use, offering wider coverage and higher absorbency for peaceful sleep." },
      { q: "What materials are used?", a: "We use carefully selected, gentle materials that are safe for your skin. Specific material compositions can be found on the product details page." },
    ]
  },
  {
    category: "Orders & Delivery",
    questions: [
      { q: "How do I place an order?", a: "You can place an order directly through our website by adding items to your cart and proceeding to checkout." },
      { q: "What payment methods are available?", a: "We accept all major credit/debit cards, UPI, Net Banking, and Wallet payments." },
      { q: "Do you offer Cash on Delivery?", a: "Yes, Cash on Delivery (COD) is available for select pin codes." },
      { q: "Where do you deliver?", a: "We deliver across India. You can enter your pin code on the checkout page to confirm delivery availability." },
      { q: "How long does delivery take?", a: "Standard delivery takes 3-5 business days depending on your location." },
      { q: "How much is shipping?", a: "Shipping is calculated at checkout based on your location and order value. We often offer free shipping on orders above a certain amount." },
    ]
  },
  {
    category: "Returns",
    questions: [
      { q: "What is the return policy?", a: "Due to the intimate nature of personal hygiene products, we generally do not accept returns. However, if you receive a damaged or incorrect product, please contact us within 48 hours for a replacement or refund." },
    ]
  }
];

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-sage-light/30">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-heading font-semibold text-charcoal group-hover:text-sage transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-charcoal-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-charcoal-light leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="py-24 bg-ivory text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
          Find answers to common questions about our products, orders, and policies.
        </p>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {faqData.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 pb-4 border-b-2 border-sage inline-block">{category.category}</h2>
              <div className="bg-ivory rounded-[32px] p-8 md:p-12 border border-sage-light/30">
                {category.questions.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
