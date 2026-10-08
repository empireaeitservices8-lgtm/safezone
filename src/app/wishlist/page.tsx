import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Wishlist | Safezone",
};

export default function WishlistPage() {
  return (
    <div className="flex flex-col w-full min-h-[60vh] bg-white pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 px-4">
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-rose-100">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-3 sm:mb-4">Your Wishlist</h1>
        <p className="text-base sm:text-lg text-charcoal-light mb-6 sm:mb-8">
          Your wishlist is currently empty. Start adding products you love!
        </p>
        
        <Link href="/shop" className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium text-base sm:text-lg">
          Explore Products
        </Link>
      </div>
    </div>
  );
}
