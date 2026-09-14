"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User, Heart, ShoppingBag, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Sanitary Pads", href: "/shop/sanitary-pads" },
    { label: "Wellness", href: "/shop/wellness" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-charcoal hover:text-sage transition-colors p-2 -ml-2"
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center lg:justify-start lg:w-1/4">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Safezone" width={180} height={60} className="object-contain max-h-[48px] w-auto" priority />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center space-x-8">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-charcoal hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center justify-end space-x-4 lg:w-1/4">
              <button className="text-charcoal hover:text-sage transition-colors p-2 hidden sm:block">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/account" className="text-charcoal hover:text-sage transition-colors p-2 hidden sm:block">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/wishlist" className="text-charcoal hover:text-sage transition-colors p-2 hidden lg:block">
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="text-charcoal hover:text-sage transition-colors p-2 flex items-center relative">
                <ShoppingBag className="h-5 w-5" />
                {mounted && cartCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-sage text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-ivory shadow-xl overflow-y-auto pt-5 pb-6 flex flex-col">
            <div className="px-4 flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo.png" alt="Safezone" width={150} height={50} className="object-contain max-h-[40px] w-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal/60 hover:text-charcoal p-2 -mr-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex-1 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-3 text-lg font-medium text-charcoal hover:text-sage border-b border-charcoal/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 px-6 grid grid-cols-2 gap-4">
              <Link href="/account" className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-sm font-medium">
                <User className="h-6 w-6 mb-2 text-sage" />
                Account
              </Link>
              <Link href="/wishlist" className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-sm font-medium">
                <Heart className="h-6 w-6 mb-2 text-sage" />
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
