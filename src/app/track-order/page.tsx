"use client";

import { useState } from "react";
import { Search, CheckCircle2, Circle } from "lucide-react";

export default function TrackOrderPage() {
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
  };

  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-ivory pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 px-4">
      <div className="max-w-3xl mx-auto w-full text-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-3 sm:mb-4">
          Track Your Order
        </h1>
        <p className="text-base sm:text-lg text-charcoal-light mb-6 sm:mb-8">
          Enter your order number and mobile/email to check the status.
        </p>

        <div className="bg-white p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-sm border border-gray-100 max-w-xl mx-auto mb-8 sm:mb-12">
          <form onSubmit={handleTrack} className="space-y-4 sm:space-y-6 text-left">
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="orderId" className="block text-sm font-medium text-charcoal">Order Number</label>
              <input type="text" id="orderId" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" placeholder="e.g. #SZ-94821" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="contact" className="block text-sm font-medium text-charcoal">Mobile or Email</label>
              <input type="text" id="contact" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" placeholder="Registered mobile or email" />
            </div>
            <button type="submit" className="w-full py-3.5 sm:py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-base sm:text-lg flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Track Order
            </button>
          </form>
        </div>

        {/* Tracking Timeline Component - Shown after submit */}
        {isTracking && (
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-sm border border-gray-100 text-left">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-6 text-center">Order Status: #SZ-94821</h2>
            
            <div className="relative border-l-2 border-sage-light ml-4 space-y-6 sm:space-y-8 py-2">
              {[
                { status: "Order Placed", date: "14 Sep, 10:30 AM", active: true, done: true },
                { status: "Confirmed", date: "14 Sep, 11:15 AM", active: true, done: true },
                { status: "Packed", date: "15 Sep, 09:00 AM", active: true, done: true },
                { status: "Shipped", date: "15 Sep, 02:30 PM", active: true, done: false },
                { status: "Out for Delivery", date: "Pending", active: false, done: false },
                { status: "Delivered", date: "Pending", active: false, done: false },
              ].map((step, i) => (
                <div key={i} className="relative pl-8">
                  <div className={`absolute -left-[11px] top-1 bg-white ${step.active ? 'text-sage' : 'text-gray-300'}`}>
                    {step.done ? <CheckCircle2 className="w-5 h-5 fill-current text-white border-2 border-sage rounded-full bg-sage" /> : <Circle className={`w-5 h-5 ${step.active ? 'text-sage fill-current' : 'text-gray-300'}`} />}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${step.active ? 'text-charcoal' : 'text-charcoal-light/50'}`}>{step.status}</h4>
                    <p className="text-sm text-charcoal-light mt-1">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
