"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { items, getCartTotal, clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-ivory pt-24 pb-24" />;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart(); // Empty the cart on successful checkout
    router.push("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col w-full min-h-[80vh] items-center justify-center bg-white py-24 px-4">
        <ShoppingBag className="w-16 h-16 text-sage/40 mb-6" />
        <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Your cart is empty</h2>
        <p className="text-charcoal-light mb-8 max-w-sm text-center">You need items in your cart to checkout.</p>
        <Link href="/shop" className="px-8 py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-lg">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-ivory pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-heading font-bold text-charcoal">Checkout</h1>
          <div className="flex items-center gap-2 text-sm text-sage-dark font-medium">
            <Lock className="w-4 h-4" />
            Secure Payment
          </div>
        </div>
        
        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Steps */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center text-sm">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal">Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal">Mobile</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-charcoal">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center text-sm">2</span>
                Delivery Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-charcoal">House / Flat / Block No.</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-charcoal">Street / Area</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal">City</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal">State</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal">PIN Code</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-1 focus:ring-sage outline-none" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center text-sm">3</span>
                Payment
              </h2>
              
              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-sage transition-colors">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-sage focus:ring-sage" />
                  <span className="font-medium text-charcoal">UPI / QR</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-sage transition-colors">
                  <input type="radio" name="payment" className="w-4 h-4 text-sage focus:ring-sage" />
                  <span className="font-medium text-charcoal">Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-sage transition-colors">
                  <input type="radio" name="payment" className="w-4 h-4 text-sage focus:ring-sage" />
                  <span className="font-medium text-charcoal">Cash on Delivery</span>
                </label>
              </div>
            </div>

          </div>

          {/* Order Review */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-xl font-heading font-bold text-charcoal mb-6">Order Review</h2>
              
              <div className="space-y-4 mb-6 border-b border-gray-100 pb-6 max-h-[300px] overflow-y-auto">
                {items.map(item => (
                  <div key={`${item.id}-${item.packSize}`} className="flex gap-4">
                    <div className="w-16 h-16 bg-ivory rounded-xl shrink-0 border border-gray-100 flex items-center justify-center text-[10px] text-charcoal-light">IMG</div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium text-charcoal line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-charcoal-light mt-1">{item.packSize} &times; {item.quantity}</p>
                    </div>
                    <span className="text-sm font-bold text-charcoal">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 text-sm text-charcoal-light">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-charcoal font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-charcoal font-medium">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center">
                <span className="text-lg font-heading font-bold text-charcoal">Total</span>
                <span className="text-2xl font-bold text-charcoal">₹{total}</span>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-lg shadow-sm">
                Place Order
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
