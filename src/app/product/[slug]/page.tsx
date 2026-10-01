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
  const [packSize, setPackSize] = useState("Pack of 10");
  const [added, setAdded] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  
  const productImages = ["/001.png", "/003.png"];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  // Generate a dummy product id based on slug, or default to 1
  const productId = slug || "1";

  const product = {
    id: productId,
    name: "Safezone Everyday Comfort Pad",
    price: packSize === "Pack of 10" ? 120 : 220,
    mrp: packSize === "Pack of 10" ? 150 : 280,
    discount: packSize === "Pack of 10" ? "20% OFF" : "21% OFF",
    rating: 4.8,
    reviews: 124,
    description: "Designed for everyday comfort and dependable protection. Our pads are made with carefully selected materials that are gentle on your skin.",
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      packSize: packSize,
      quantity: quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      packSize: packSize,
      quantity: quantity,
    });
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <nav className="flex items-center text-sm text-charcoal-light">
          <Link href="/" className="hover:text-sage">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/shop" className="hover:text-sage">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-charcoal font-medium truncate">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="pb-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
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
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-[#F5C518]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-charcoal-light underline cursor-pointer">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price & MRP */}
              <div className="flex items-end gap-3 mb-3 transition-all duration-300">
                <span className="text-3xl font-bold text-charcoal">₹{product.price}</span>
                <span className="text-lg text-charcoal-light line-through mb-1">₹{product.mrp}</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md mb-1">{product.discount}</span>
              </div>

              {/* Small "Key Features" button below existing MRP */}
              <div className="mb-6">
                <button
                  type="button"
                  id="key-features-button"
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-sage-dark bg-sage/10 hover:bg-sage/20 border border-sage/30 transition-all shadow-sm group cursor-pointer"
                  aria-expanded={showFeatures}
                  aria-controls="key-features-list"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sage group-hover:rotate-12 transition-transform" />
                  <span>Key Features</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-sage transition-transform duration-200 ${showFeatures ? "rotate-180" : ""}`} />
                </button>

                {/* 12 Key Features - only displayed when clicked/opened */}
                {showFeatures && (
                  <div id="key-features-list" className="mt-3 p-4 sm:p-5 rounded-2xl bg-sage/5 border border-sage/20 transition-all duration-300 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-sage/15">
                      <h3 className="text-sm font-heading font-bold text-charcoal flex items-center gap-2">
                        <span>Key Features</span>
                      </h3>
                      <button 
                        type="button"
                        onClick={() => setShowFeatures(false)}
                        className="text-xs text-charcoal-light hover:text-charcoal px-2 py-0.5 rounded hover:bg-white/60 transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                    <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">1. Bamboo Fibre Fabric</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">It absorbs moisture three to four times faster than normal cotton, keeping you dry and cool</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">2. High absorption</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">The combination of bamboo fibre, cellulose / fluff pulp and SAPs provides fast absorption and high fluid-retention capacity</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">3. Dry Surface feel</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">The ADL rapidly transfers menstrual fluid away from the cotton top sheet, helping the user feel drier</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">4. Breathable Comfort</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Bamboo / cotton materials and a breathable back sheet can improve airflow and reduce heat and moisture accumulation</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">5. Leak Protection SAP</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">SAP, absorbent core construction, backsheet and four-wing design work together to reduce side and bottom leakage</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">6. Soft on Skin</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">A soft cotton or bamboo-cotton top sheet can provide a smoother contact surface, particularly important for prolonged wear</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">7. Better Odour and Moisture Management</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Bamboo fibre has useful moisture-management properties, though avoid making strong antibacterial or odour-control claims unless they are supported by appropriate testing</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">8. Unbelievable Absorption</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Bio-based SAPs 12x times more absorption in heavy flow. It helps you dry, comfort and confident during long wear.</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">9. Wide Back Coverage</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Extra protection where you need it most</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">10. Side Wall Protection</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Helps prevent side leaks, a worry-free movement.</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">11. Biodegradable</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Care for you & care for nature</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-charcoal text-sm">12. No Harmful Chemicals</h4>
                        <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">Free from harmful chemicals, Gentle protection for your skin & comfort</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-charcoal-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Options */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-charcoal mb-3">Pack Size</h4>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => setPackSize("Pack of 10")}
                      className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                        packSize === "Pack of 10" 
                          ? "border-2 border-sage text-charcoal bg-sage/5" 
                          : "border border-gray-200 text-charcoal-light hover:border-gray-300"
                      }`}
                    >
                      Pack of 10
                    </button>
                    <button 
                      onClick={() => setPackSize("Pack of 20")}
                      className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                        packSize === "Pack of 20" 
                          ? "border-2 border-sage text-charcoal bg-sage/5" 
                          : "border border-gray-200 text-charcoal-light hover:border-gray-300"
                      }`}
                    >
                      Pack of 20
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-charcoal mb-3">Quantity</h4>
                  <div className="flex items-center w-32 border border-gray-200 rounded-xl">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-12 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-l-xl"
                    >
                      -
                    </button>
                    <input 
                      type="text" 
                      value={quantity} 
                      readOnly 
                      className="w-12 h-12 text-center text-charcoal font-medium border-x border-gray-200 outline-none bg-transparent" 
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-12 flex items-center justify-center text-charcoal hover:bg-gray-50 rounded-r-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 relative">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 rounded-xl transition-all font-medium text-lg flex items-center justify-center gap-2 ${
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
                  className="flex-1 py-4 bg-sage text-white rounded-xl hover:bg-charcoal transition-colors font-medium text-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-6 h-6 text-sage mb-2" />
                  <span className="text-xs text-charcoal-light">Secure Checkout</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Leaf className="w-6 h-6 text-sage mb-2" />
                  <span className="text-xs text-charcoal-light">Quality Materials</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Droplets className="w-6 h-6 text-sage mb-2" />
                  <span className="text-xs text-charcoal-light">Everyday Comfort</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs Placeholder */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="border-b border-gray-200 mb-8 flex space-x-8 overflow-x-auto">
             <button className="pb-4 text-charcoal font-semibold border-b-2 border-sage whitespace-nowrap">Description</button>
             <button className="pb-4 text-charcoal-light font-medium hover:text-charcoal whitespace-nowrap">Specifications</button>
             <button className="pb-4 text-charcoal-light font-medium hover:text-charcoal whitespace-nowrap">How to Use</button>
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
