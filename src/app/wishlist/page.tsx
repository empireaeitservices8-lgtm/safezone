import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Wishlist | Safezone",
};

export default function WishlistPage() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-white pt-24 pb-32 px-4">
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-100">
          <Heart className="w-10 h-10 text-rose-400" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-charcoal mb-4">Your Wishlist</h1>
        <p className="text-lg text-charcoal-light mb-12">
          Your wishlist is currently empty. Start adding products you love!
        </p>
        
        <Link href="/shop" className="inline-block px-10 py-4 bg-charcoal text-white rounded-full hover:bg-sage transition-colors font-medium text-lg">
          Explore Products
        </Link>
      </div>
    </div>
  );
}
