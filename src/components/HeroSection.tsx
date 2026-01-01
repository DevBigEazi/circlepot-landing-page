import React from "react";
import { Users, TrendingUp, Globe, ShieldCheck, Key } from "lucide-react";
import type { ThemeColors, Currency } from "../types";
import { currencies } from "../data/constants";
import { icons } from "../data/icons";

interface HeroSectionProps {
  colors: ThemeColors;
  selectedCurrency: string;
  setSelectedCurrency: (code: string) => void;
  currentCurrency: Currency;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  colors,
  selectedCurrency,
  setSelectedCurrency,
  currentCurrency,
}) => {
  return (
    <section className="relative mt-22 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Structural background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-[50vw] h-[50vh] opacity-[0.03] pointer-events-none"
          style={{ backgroundColor: colors.primary }}
        />
        <div
          className="absolute bottom-0 left-0 w-[30vw] h-[30vh] opacity-[0.02] pointer-events-none"
          style={{ backgroundColor: colors.secondary }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border transition-colors duration-300"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.primary }}
            />
            <span
              className="font-medium text-xs sm:text-sm tracking-wide uppercase"
              style={{ color: colors.textLight }}
            >
              Secure Digital Savings • Global Infrastructure
            </span>
          </div>

          <h1
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold mb-6 tracking-tighter leading-[0.95] text-balance"
            style={{ color: colors.text }}
          >
            Save Globally,
            <br />
            <span style={{ color: colors.primary }}>Spend locally.</span>
          </h1>

          <p
            className="text-lg sm:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-balance opacity-80"
            style={{ color: colors.text }}
          >
            Deposit in 35+ currencies, save in Stable Digital Dollars, and earn
            interest automatically. Community savings made simpler, transparent,
            and rewarding.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: ShieldCheck, text: "You Control Your Funds" },
              { icon: Globe, text: "Global Partner Network" },
              { icon: Key, text: "Full Control" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <item.icon size={16} style={{ color: colors.primary }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Currency Selector - Bento Style */}
        <div className="max-w-5xl mx-auto mb-20">
          <div
            className="bento-card p-6 sm:p-10 lg:p-12"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 w-full text-center lg:text-left">
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ color: colors.text }}
                >
                  Ready to start saving?
                </h2>
                <p className="text-lg mb-8" style={{ color: colors.textLight }}>
                  Select your local currency to see how much you can grow your
                  wealth.
                </p>
                <div
                  className="p-6 rounded-2xl border hidden lg:block"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="text-sm uppercase tracking-widest mb-1 opacity-50"
                    style={{ color: colors.text }}
                  >
                    Selected Market
                  </div>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: colors.text }}
                  >
                    {currentCurrency.flag} {currentCurrency.name}
                  </div>
                </div>
              </div>

              <div className="flex-[1.5] w-full">
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mb-8">
                  {Object.entries(currencies).map(([code, currency]) => (
                    <button
                      key={code}
                      onClick={() => setSelectedCurrency(code)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 border-2 ${
                        selectedCurrency === code
                          ? "scale-105 shadow-xl"
                          : "hover:border-neutral-500"
                      }`}
                      style={{
                        backgroundColor:
                          selectedCurrency === code
                            ? colors.primary
                            : colors.background,
                        borderColor:
                          selectedCurrency === code
                            ? colors.primary
                            : colors.border,
                        color:
                          selectedCurrency === code ? "#000000" : colors.text,
                      }}
                    >
                      <span className="text-2xl mb-1">{currency.flag}</span>
                      <span className="text-xs font-bold uppercase tracking-tighter">
                        {code}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  className="w-full py-5 rounded-2xl font-black text-lg sm:text-xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-2xl"
                  style={{
                    backgroundColor: colors.primary,
                    color: "#000000",
                  }}
                >
                  Start Saving in {selectedCurrency} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { value: "10K+", label: "Active Users", icon: Users },
            { value: "8.5%", label: "Avg. Yield", icon: TrendingUp },
            { value: "$2.4M+", label: "Saved & Earned", icon: ShieldCheck },
            { value: "35+", label: "Currencies", icon: Globe },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group bento-card p-8 flex flex-col items-center justify-center text-center"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="p-4 rounded-2xl mb-4 transition-colors duration-500 group-hover:bg-opacity-20"
                style={{ backgroundColor: colors.background }}
              >
                <stat.icon size={28} style={{ color: colors.primary }} />
              </div>
              <div
                className="text-4xl font-black mb-1 tracking-tighter"
                style={{ color: colors.text }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-bold uppercase tracking-widest opacity-40"
                style={{ color: colors.text }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {/* Trust Row */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <span
            className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30"
            style={{ color: colors.text }}
          >
            Powered by secure global infrastructure
          </span>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-all duration-700">
            <img src={icons.celoLogo} alt="Celo" className="h-6 w-auto" />
            <img src={icons.mentoLogo} alt="Mento" className="h-6 w-auto" />
            <img
              src={icons.thirdwebLogo}
              alt="Thirdweb"
              className="h-7 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
