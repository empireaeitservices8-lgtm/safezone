"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Star, ChevronRight, ShieldCheck, Leaf, Droplets, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState("Family Pack (40 Pads)");
  const [selectedSize, setSelectedSize] = useState("XL");
  const [added, setAdded] = useState(false);
  
  const productImages = ["/001.png", "/003.png"];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  // Generate a dummy product id based on slug, or default to 1
  const productId = slug || "1";

  const product = {
    id: productId,
    name: "Safezone Everyday Comfort Pad - Family Pack (40)",
    price: 680,
    mrp: 799,
    discount: "15% OFF",
    rating: 4.8,
    reviews: 124,
    description: "Designed for everyday comfort and dependable protection. Made with organic bamboo materials gentle on your skin. Family Pack includes 40 premium pads with sizes available in XL, XXL, and XXXL.",
  };

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (Size: ${selectedSize})`,
      price: product.price,
      packSize: `${packSize} - ${selectedSize}`,
      quantity: quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (Size: ${selectedSize})`,
      price: product.price,
      packSize: `${packSize} - ${selectedSize}`,
      quantity: quantity,
    });
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full">
        <nav className="flex items-center text-xs sm:text-sm text-charcoal-light">
          <Link href="/" className="hover:text-sage">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 sm:mx-2" />
          <Link href="/shop" className="hover:text-sage">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 sm:mx-2" />
          <span className="text-charcoal font-medium truncate">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="pb-10 sm:pb-12 md:pb-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full rounded-[32px] bg-ivory flex items-center justify-center overflow-hidden border border-gray-100">
                <Image src={selectedImage} alt={product.name} fill className="object-contain p-4" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-2xl bg-ivory cursor-pointer border-2 transition-colors flex items-center justify-center overflow-hidden ${selectedImage === img ? 'border-sage' : 'border-transparent hover:border-sage/50'}`}
                  >
                    <Image src={img} alt={`Product thumbnail ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-sage-dark uppercase tracking-wider">Sanitary Pads</span>
                <button className="text-charcoal-light hover:text-red-500 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2 sm:mb-3">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex items-center text-[#F5C518]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-charcoal-light underline cursor-pointer">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price & MRP */}
              <div className="flex items-end gap-3 mb-2.5 transition-all duration-300">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal">₹{product.price}</span>
                <span className="text-base sm:text-lg text-charcoal-light line-through mb-0.5">₹{product.mrp}</span>
                <span className="text-xs sm:text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mb-0.5">{product.discount}</span>
              </div>

              {/* 12 Types of Protection Tag */}
              <div className="mb-4">
                <Link
                  href="/#twelve-protections"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-sage-dark bg-sage/10 hover:bg-sage/20 border border-sage/30 transition-all shadow-sm group"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                  <span>Includes 12 Types of Protection • View Details</span>
                </Link>
              </div>

              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                {product.description}
              </p>

              {/* Options */}
              <div className="space-y-4 sm:space-y-5 mb-5 sm:mb-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-2">Pack Option</h4>
                  <div className="flex flex-wrap gap-2.5">
                    <button 
                      type="button"
                      onClick={() => setPackSize("Family Pack (40 Pads)")}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium border-2 border-sage text-charcoal bg-sage/5 transition-colors text-xs sm:text-sm"
                    >
                      Family Pack (40 Pads) - ₹680
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-2">
                    Select Size: <span className="text-sage-dark font-bold">{selectedSize}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {["XL", "XXL", "XXXL"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                          selectedSize === size
                            ? "border-2 border-sage text-white bg-sage shadow-sm"
                            : "border border-gray-200 text-charcoal hover:border-sage/60 bg-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-2">Quantity</h4>
                  <div className="flex items-center w-28 sm:w-32 border border-gray-200 rounded-xl">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 sm:w-10 h-10 sm:h-11 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-l-xl text-base"
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      value={quantity} 
                      readOnly 
                      className="w-10 sm:w-12 h-10 sm:h-11 text-center text-charcoal font-medium border-x border-gray-200 outline-none bg-transparent text-sm" 
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 sm:w-10 h-10 sm:h-11 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-r-xl text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 relative">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 sm:py-3.5 rounded-xl transition-all font-medium text-base sm:text-lg flex items-center justify-center gap-2 ${
                    added ? "bg-green-600 text-white" : "bg-charcoal text-white hover:bg-sage"
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" /> Added to Cart
                    </>
                  ) : "Add to Cart"}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 py-3 sm:py-3.5 bg-sage text-white rounded-xl hover:bg-charcoal transition-colors font-medium text-base sm:text-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-5 sm:pt-6 border-t border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 text-sage mb-1.5" />
                  <span className="text-[11px] sm:text-xs text-charcoal-light">Secure Checkout</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Leaf className="w-5 h-5 text-sage mb-1.5" />
                  <span className="text-[11px] sm:text-xs text-charcoal-light">Quality Materials</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Droplets className="w-5 h-5 text-sage mb-1.5" />
                  <span className="text-[11px] sm:text-xs text-charcoal-light">Everyday Comfort</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs Placeholder */}
      <section className="py-10 sm:py-14 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="border-b border-gray-200 mb-5 sm:mb-6 flex space-x-6 sm:space-x-8 overflow-x-auto">
             <button className="pb-3 text-sm sm:text-base text-charcoal font-semibold border-b-2 border-sage whitespace-nowrap">Description</button>
             <button className="pb-3 text-sm sm:text-base text-charcoal-light font-medium hover:text-charcoal whitespace-nowrap">Specifications</button>
             <button className="pb-3 text-sm sm:text-base text-charcoal-light font-medium hover:text-charcoal whitespace-nowrap">How to Use</button>
           </div>
           <div className="prose prose-sage max-w-none text-charcoal-light">
             <p>Our sanitary pads are designed with your real needs in mind. We combine thoughtful design with carefully selected materials to ensure you feel protected and comfortable every day.</p>
             <ul className="mt-4 space-y-2 list-disc list-inside">
               <li>Soft, breathable top sheet for maximum comfort</li>
               <li>Advanced absorption core to lock away moisture</li>
               <li>Secure wings to keep the pad in place</li>
               <li>Designed for everyday dependable protection</li>
             </ul>
           </div>
        </div>
      </section>

    </div>
  );
}
