import Link from "next/link";
import { User, Package } from "lucide-react";

export const metadata = {
  title: "My Account | Safezone",
};

export default function AccountPage() {
  return (
    <div className="flex flex-col w-full min-h-[60vh] bg-ivory pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 px-4">
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm border border-gray-100">
          <User className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-3 sm:mb-4">My Account</h1>
        <p className="text-base sm:text-lg text-charcoal-light mb-6 sm:mb-8">
          Account dashboard is currently under development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/shop" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-base sm:text-lg">
            Continue Shopping
          </Link>
          <Link href="/track-order" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-charcoal border border-gray-200 rounded-xl hover:border-sage transition-colors font-medium text-base sm:text-lg flex items-center justify-center gap-2">
            <Package className="w-5 h-5" /> Track Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
