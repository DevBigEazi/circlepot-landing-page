import React from "react";
import { ArrowRight } from "lucide-react";
import type { ThemeColors } from "../types";

interface CTASectionProps {
  colors: ThemeColors;
}

export const CTASection: React.FC<CTASectionProps> = ({ colors }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bento-card overflow-hidden relative"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
          }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="absolute top-0 right-0 w-1/2 h-full border-l"
              style={{ borderColor: colors.text }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 border-t"
              style={{ borderColor: colors.text }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 py-20 sm:py-24 lg:py-32 text-center relative z-10">
            <h2
              className="text-5xl sm:text-8xl lg:text-[10rem] font-black mb-8 tracking-tighter leading-[0.85] text-balance"
              style={{ color: colors.text }}
            >
              Ready to <br /> build wealth?
            </h2>
            <p
              className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto animate-slideUp delay-100 font-bold"
              style={{ color: colors.textLight }}
            >
              Join thousands saving smarter with advanced security and local
              currency convenience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="px-12 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3 animate-scaleIn delay-200"
                style={{ backgroundColor: colors.primary, color: "#000000" }}
              >
                Get Started Free
                <ArrowRight size={24} />
              </button>
            </div>
            <div
              className="mt-12 text-xs sm:text-sm font-black uppercase tracking-widest opacity-40"
              style={{ color: colors.text }}
            >
              <span>Secure account</span> • <span>35+ currencies</span> •{" "}
              <span>Low fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
