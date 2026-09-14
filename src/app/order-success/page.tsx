import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Order Confirmed | Safezone",
};

export default function OrderSuccessPage() {
  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center bg-white py-24 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
          Order Confirmed!
        </h1>
        <p className="text-xl text-charcoal-light mb-12">
          Thank you for choosing Safezone.
        </p>

        <div className="bg-ivory border border-sage-light/30 rounded-[32px] p-8 md:p-12 text-left mb-12">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-6 mb-6">
            <div>
              <p className="text-sm text-charcoal-light mb-1">Order Number</p>
              <p className="text-lg font-bold text-charcoal">#SZ-94821</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-sm text-charcoal-light mb-1">Estimated Delivery</p>
              <p className="text-lg font-bold text-charcoal">24 Sep, 2026</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-heading font-semibold text-charcoal mb-4">Order Summary</h3>
            <div className="flex justify-between items-center text-charcoal-light">
              <span>Safezone Everyday Comfort Pad &times; 2</span>
              <span>₹240</span>
            </div>
            <div className="flex justify-between items-center text-charcoal-light">
              <span>Shipping</span>
              <span>₹50</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <span className="font-heading font-bold text-charcoal text-lg">Total Paid</span>
            <span className="font-bold text-charcoal text-xl">₹290</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/track-order" className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-lg flex items-center justify-center gap-2">
            <Package className="w-5 h-5" />
            Track Order
          </Link>
          <Link href="/shop" className="w-full sm:w-auto px-8 py-4 bg-ivory text-charcoal border border-sage-light/30 rounded-xl hover:bg-sage-light transition-colors font-medium text-lg flex items-center justify-center gap-2">
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
