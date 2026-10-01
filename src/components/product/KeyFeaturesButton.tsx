"use client";

import { useState, useEffect } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const KEY_FEATURES = [
  {
    id: 1,
    title: "Bamboo Fibre Fabric",
    description: "It absorbs moisture three to four times faster than normal cotton, keeping you dry and cool",
  },
  {
    id: 2,
    title: "High absorption",
    description: "The combination of bamboo fibre, cellulose / fluff pulp and SAPs provides fast absorption and high fluid-retention capacity",
  },
  {
    id: 3,
    title: "Dry Surface feel",
    description: "The ADL rapidly transfers menstrual fluid away from the cotton top sheet, helping the user feel drier",
  },
  {
    id: 4,
    title: "Breathable Comfort",
    description: "Bamboo / cotton materials and a breathable back sheet can improve airflow and reduce heat and moisture accumulation",
  },
  {
    id: 5,
    title: "Leak Protection SAP",
    description: "SAP, absorbent core construction, backsheet and four-wing design work together to reduce side and bottom leakage",
  },
  {
    id: 6,
    title: "Soft on Skin",
    description: "A soft cotton or bamboo-cotton top sheet can provide a smoother contact surface, particularly important for prolonged wear",
  },
  {
    id: 7,
    title: "Better Odour and Moisture Management",
    description: "Bamboo fibre has useful moisture-management properties, though avoid making strong antibacterial or odour-control claims unless they are supported by appropriate testing",
  },
  {
    id: 8,
    title: "Unbelievable Absorption",
    description: "Bio-based SAPs 12x times more absorption in heavy flow. It helps you dry, comfort and confident during long wear.",
  },
  {
    id: 9,
    title: "Wide Back Coverage",
    description: "Extra protection where you need it most",
  },
  {
    id: 10,
    title: "Side Wall Protection",
    description: "Helps prevent side leaks, a worry-free movement.",
  },
  {
    id: 11,
    title: "Biodegradable",
    description: "Care for you & care for nature",
  },
  {
    id: 12,
    title: "No Harmful Chemicals",
    description: "Free from harmful chemicals, Gentle protection for your skin & comfort",
  },
];

interface KeyFeaturesButtonProps {
  className?: string;
  variant?: "card" | "detail";
}

export default function KeyFeaturesButton({
  className = "",
  variant = "card",
}: KeyFeaturesButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {variant === "card" ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          className={`mt-2 w-full py-2 px-3 rounded-xl bg-sage/10 hover:bg-sage text-sage-dark hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 border border-sage/25 shadow-sm group cursor-pointer ${className}`}
          aria-label="View Key Features"
        >
          <Sparkles className="w-3.5 h-3.5 text-sage group-hover:text-white group-hover:rotate-12 transition-transform" />
          <span>Key Features</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-sage-dark bg-sage/10 hover:bg-sage hover:text-white border border-sage/30 transition-all duration-200 shadow-sm group cursor-pointer ${className}`}
          aria-label="View Key Features"
        >
          <Sparkles className="w-4 h-4 text-sage group-hover:text-white group-hover:rotate-12 transition-transform" />
          <span>Key Features</span>
        </button>
      )}

      {/* Modal Popup displaying all 12 features */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-gray-100 flex flex-col max-h-[85vh] overflow-hidden transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-ivory border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark">
                  <Sparkles className="w-4 h-4 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-charcoal">Key Features</h3>
                  <p className="text-xs text-charcoal-light">12 essential reasons to choose Safezone</p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-gray-100 custom-scrollbar">
              {KEY_FEATURES.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`flex items-start gap-3.5 ${idx > 0 ? "pt-4" : ""}`}
                >
                  <div className="w-6 h-6 rounded-full bg-sage/15 text-sage-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {feature.id}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-charcoal text-sm">
                      {feature.id}. {feature.title}
                    </h4>
                    <p className="text-charcoal-light text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-ivory/60 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-sage-dark font-medium">
                <CheckCircle2 className="w-4 h-4 text-sage" />
                <span>Care for you & care for nature</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-charcoal text-white rounded-xl text-xs font-semibold hover:bg-sage transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
