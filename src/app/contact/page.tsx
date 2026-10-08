"use client";

import { useState } from "react";
import { MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-10 sm:py-14 bg-ivory text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-3 sm:mb-4">We're Here for You</h1>
        <p className="text-base sm:text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Have a question about our products or your order? Reach out to us.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              
              <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory border border-sage-light/30">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-sage-dark shadow-sm">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal mb-1.5 sm:mb-2">Call Us</h3>
                  <p className="text-xs sm:text-sm text-charcoal-light mb-3">We're available Monday through Saturday to help with your inquiries.</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+919544114949" className="inline-flex font-semibold text-charcoal hover:text-sage transition-colors text-base sm:text-lg">
                      +91 95 44 11 49 49
                    </a>
                    <a href="tel:+919544114848" className="inline-flex font-semibold text-charcoal hover:text-sage transition-colors text-base sm:text-lg">
                      +91 95 44 11 48 48
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory border border-sage-light/30">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-sage-dark shadow-sm">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal mb-1.5 sm:mb-2">WhatsApp Us</h3>
                  <p className="text-xs sm:text-sm text-charcoal-light mb-3">Send us a quick message on WhatsApp for faster support.</p>
                  <a href="https://wa.me/919544114949" target="_blank" rel="noopener noreferrer" className="inline-flex font-semibold text-charcoal hover:text-sage transition-colors text-base sm:text-lg">
                    +91 95 44 11 49 49
                  </a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] bg-ivory border border-sage-light/30">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-sage-dark shadow-sm">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal mb-1.5 sm:mb-2">Visit Us</h3>
                  <address className="not-italic text-xs sm:text-sm text-charcoal-light leading-relaxed mb-3">
                    Safezone<br />
                    Febisel Building<br />
                    Adinadu South<br />
                    Karunagappally<br />
                    Kollam – 690542<br />
                    Kerala, India
                  </address>
                  <a href="https://maps.google.com/?q=Febisel+Building,Adinadu+South,Karunagappally,Kollam,Kerala" target="_blank" rel="noopener noreferrer" className="inline-flex font-semibold text-charcoal hover:text-sage transition-colors text-xs sm:text-sm">
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-fit relative">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-5 sm:mb-6">Send a Message</h3>
              
              {isSuccess && (
                <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p>Thank you for reaching out! We have received your message and will get back to you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-charcoal">Name</label>
                    <input type="text" id="name" required disabled={isSubmitting} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors text-sm disabled:opacity-50" placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-charcoal">Phone</label>
                    <input type="tel" id="phone" required disabled={isSubmitting} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors text-sm disabled:opacity-50" placeholder="Your phone number" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-charcoal">Email</label>
                  <input type="email" id="email" required disabled={isSubmitting} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors text-sm disabled:opacity-50" placeholder="Your email address" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-charcoal">Subject</label>
                  <input type="text" id="subject" required disabled={isSubmitting} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors text-sm disabled:opacity-50" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-charcoal">Message</label>
                  <textarea id="message" required disabled={isSubmitting} rows={4} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors resize-none text-sm disabled:opacity-50" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center py-3.5 bg-charcoal text-white rounded-xl hover:bg-sage transition-all font-medium text-base sm:text-lg disabled:opacity-70">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
