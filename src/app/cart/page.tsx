"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, ShieldCheck, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  
  const { items, removeItem, updateQuantity, getCartTotal } = useCartStore();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white pt-10 pb-16" />; // Hydration skeleton
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-6 sm:mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center border border-gray-100 rounded-[24px] sm:rounded-[32px] bg-ivory px-4">
            <ShoppingBag className="w-12 sm:w-16 h-12 sm:h-16 text-sage/40 mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-sm sm:text-base text-charcoal-light mb-6 sm:mb-8 max-w-sm">Looks like you haven't added any wellness products to your cart yet.</p>
            <Link href="/shop" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-base sm:text-lg">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="border-b border-gray-200 pb-4 mb-6 hidden md:grid grid-cols-6 text-sm text-charcoal-light font-medium uppercase tracking-wider">
                <div className="col-span-3">Product</div>
                <div className="text-center">Quantity</div>
                <div className="text-right col-span-2">Total</div>
              </div>

              {items.map((item) => (
                <div key={`${item.id}-${item.packSize}`} className="py-6 border-b border-gray-100 flex flex-col md:grid md:grid-cols-6 gap-6 items-center">
                  <div className="col-span-3 flex gap-6 w-full">
                    <div className="w-24 h-24 bg-ivory rounded-2xl shrink-0 flex items-center justify-center border border-gray-100">
                      <span className="text-xs text-charcoal-light">IMG</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link href={`/product/${item.id}`} className="text-lg font-heading font-semibold text-charcoal hover:text-sage transition-colors mb-1">
                        {item.name}
                      </Link>
                      <span className="text-sm text-charcoal-light mb-2">{item.packSize}</span>
                      <span className="text-sm font-medium text-charcoal md:hidden">₹{item.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto md:justify-center md:col-span-1">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.packSize, Math.max(1, item.quantity - 1))}
                        className="w-8 h-10 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-l-lg"
                      >
                        -
                      </button>
                      <input type="text" value={item.quantity} readOnly className="w-10 h-10 text-center text-charcoal font-medium border-x border-gray-200 outline-none text-sm bg-transparent" />
                      <button 
                        onClick={() => updateQuantity(item.id, item.packSize, item.quantity + 1)}
                        className="w-8 h-10 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.packSize)}
                      className="text-gray-400 hover:text-red-500 md:hidden transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="hidden md:flex justify-end items-center gap-6 col-span-2">
                    <span className="text-lg font-bold text-charcoal">₹{item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeItem(item.id, item.packSize)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-ivory rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 border border-sage-light/30 sticky top-28 sm:top-32">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal mb-4 sm:mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-charcoal-light">
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
                
                <Link href="/checkout" className="w-full flex items-center justify-center py-4 bg-charcoal text-white rounded-xl hover:bg-sage transition-colors font-medium text-lg group">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-charcoal-light">
                  <ShieldCheck className="w-4 h-4 text-sage" />
                  Secure Checkout
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
