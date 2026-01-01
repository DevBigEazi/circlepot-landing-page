import React from "react";
import { Users, TrendingUp, Globe, ShieldCheck, Key } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import type { ThemeColors, Currency } from "../types";
import showcaseLight from "../assets/images/showcase-light.jpeg";
import showcaseDark from "../assets/images/showcase-dark.jpeg";

interface FeaturesShowcaseProps {
  colors: ThemeColors;
  currentCurrency: Currency;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({
  colors,
  currentCurrency,
}) => {
  const { isDark } = useTheme();
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      desc: "Advanced security ensures your money is safe",
    },
    {
      icon: TrendingUp,
      title: "Easy To Use, Zero Fees",
      desc: "We cover all transaction costs - save more",
    },
    {
      icon: Globe,
      title: "Save From Anywhere",
      desc: `Save in Digital Stablecoins (${currentCurrency.mentoToken}), spend in ${currentCurrency.name}`,
    },
    {
      icon: Users,
      title: "Community Driven",
      desc: "Join or create circles and save with friends and family or like-minded people globally",
    },
    {
      icon: Key,
      title: "Earn Interest Always",
      desc: "All contributions - whether in circles or personal goals - earn yield which is paid out upon completion.",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full border mb-8"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
              }}
            >
              <span
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                Superior Technology
              </span>
            </div>
            <h2
              className="text-5xl sm:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Why choose <br className="hidden sm:block" /> Circlepot?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bento-card p-6 group"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    }}
                  >
                    <feature.icon style={{ color: colors.primary }} size={20} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 tracking-tight"
                    style={{ color: colors.text }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm opacity-60 leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Minimalist background decoration */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed rounded-full opacity-10 pointer-events-none"
              style={{ borderColor: colors.primary }}
            />

            <div className="flex justify-center">
              <div
                className="rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 transition-all duration-700 max-w-[280px] sm:max-w-[320px] bg-black"
                style={{
                  borderColor: isDark ? colors.border : "#ffffff",
                }}
              >
                <img
                  src={isDark ? showcaseLight : showcaseDark}
                  alt="Circlepot App Showcase"
                  className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
