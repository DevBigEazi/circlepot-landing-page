import React from "react";
import type { ThemeColors } from "../types";
import { currencies } from "../data/constants";
import { icons } from "../data/icons";

interface CurrenciesSectionProps {
  colors: ThemeColors;
}

export const CurrenciesSection: React.FC<CurrenciesSectionProps> = ({
  colors,
}) => {
  const futureMentoTokens = [
    {
      icon: icons.cKES,
      name: "Celo Kenya Shilling (cKES)",
      desc: "Pegged to Kenyan Shilling",
    },
    { icon: icons.cEUR, name: "Celo Euro (cEUR)", desc: "Pegged to Euro" },
    {
      icon: icons.cNGN,
      name: "Celo Nigerian Naira (cNGN)",
      desc: "Pegged to Nigerian Naira",
    },
    {
      icon: icons.cZAR,
      name: "Celo South African Rand (cZAR)",
      desc: "Pegged to South African Rand",
    },
    {
      icon: icons.cGHS,
      name: "Celo Ghanaian Cedis (cGHS)",
      desc: "Pegged to Ghanaian Cedis",
    },
    {
      icon: icons.cREAL,
      name: "Celo Brazilian Real (cREAL)",
      desc: "Pegged to Brazilian Real",
    },
    {
      icon: icons.eXOF,
      name: "Celo West African Franc (eXOF)",
      desc: "Pegged to West African CFA Franc",
    },
    {
      icon: icons.cAUD,
      name: "Celo Australian Dollar (cAUD)",
      desc: "Pegged to Australian Dollar",
    },
    {
      icon: icons.cCAD,
      name: "Celo Canadian Dollar (cCAD)",
      desc: "Pegged to Canadian Dollar",
    },
    {
      icon: icons.cCHF,
      name: "Celo Swiss Franc (cCHF)",
      desc: "Pegged to Swiss Franc",
    },
    {
      icon: icons.cCOP,
      name: "Celo Colombian Peso (cCOP)",
      desc: "Pegged to Colombian Peso",
    },
    {
      icon: icons.cJPY,
      name: "Celo Japanese Yen (cJPY)",
      desc: "Pegged to Japanese Yen",
    },
    {
      icon: icons.cGBP,
      name: "Celo British Pound (cGBP)",
      desc: "Pegged to British Pound",
    },
    {
      icon: icons.PUSO,
      name: "Philippine Peso (PUSO)",
      desc: "Pegged to Philippine Peso",
    },
  ];

  // Group tokens by region/category for better organization
  const groupedTokens = {
    "African Currencies": futureMentoTokens.filter((token) =>
      ["cKES", "cNGN", "cZAR", "cGHS", "eXOF"].some((code) =>
        token.name.includes(code)
      )
    ),
    "Global Currencies": futureMentoTokens.filter((token) =>
      [
        "cEUR",
        "cREAL",
        "cAUD",
        "cCAD",
        "cCHF",
        "cCOP",
        "cJPY",
        "cGBP",
        "PUSO",
      ].some((code) => token.name.includes(code))
    ),
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn px-2">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
            style={{ color: colors.text }}
          >
            35+ Supported Currencies
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            Deposit and withdraw in your local currency
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 px-2 sm:px-0">
          {Object.entries(currencies)
            .slice(0, 11)
            .map(([code, currency], index) => (
              <div
                key={code}
                className="rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 animate-scaleIn"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">
                  {currency.flag}
                </div>
                <div
                  className="font-bold text-xs sm:text-sm"
                  style={{ color: colors.text }}
                >
                  {code}
                </div>
                <div
                  className="text-[10px] sm:text-xs mt-0.5 font-medium"
                  style={{ color: colors.text, opacity: 0.7 }}
                >
                  {currency.name}
                </div>
              </div>
            ))}
          <div
            className="rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 animate-scaleIn"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
              animationDelay: "0.5s",
            }}
          >
            <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🌍</div>
            <div
              className="font-bold text-xs sm:text-sm"
              style={{ color: colors.text }}
            >
              +25 More
            </div>
            <div
              className="text-[10px] sm:text-xs mt-0.5 font-medium"
              style={{ color: colors.text, opacity: 0.7 }}
            >
              Global Coverage
            </div>
          </div>
        </div>

        {/* Digital Currency Status */}
        <div
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border animate-scaleIn"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
          }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
              style={{ color: colors.text }}
            >
              Digital Currency Support
            </h3>
            <p
              className="text-base sm:text-lg font-medium max-w-2xl mx-auto"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              Seamlessly save and transact with stablecoins pegged to global
              currencies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Currently Active */}
            <div className="lg:col-span-1">
              <div className="text-center mb-4 sm:mb-6">
                <h4
                  className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shrink-0"></span>
                  Currently Active
                </h4>
                <p
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: colors.text, opacity: 0.7 }}
                >
                  Live and available for use
                </p>
              </div>

              <div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 hover:shadow-md sm:hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: colors.successBg,
                  borderColor: colors.successBorder,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={icons.USDm}
                    alt="USDm"
                    className="h-14 w-14 sm:h-16 sm:w-16 mb-3 sm:mb-4"
                  />
                  <div className="mb-2 sm:mb-3">
                    <div
                      className="font-bold text-base sm:text-lg"
                      style={{ color: colors.text }}
                    >
                      Celo Dollar (USDm)
                    </div>
                    <div
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: colors.text, opacity: 0.75 }}
                    >
                      Pegged to US Dollar
                    </div>
                  </div>
                  <span
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.surface,
                    }}
                  >
                    Active & Live
                  </span>
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="lg:col-span-2">
              <div className="text-center mb-4 sm:mb-6">
                <h4
                  className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shrink-0"></span>
                  Coming Soon
                </h4>
                <p
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: colors.text, opacity: 0.7 }}
                >
                  Expanding global coverage
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(groupedTokens).map(([category, tokens]) => (
                  <div key={category}>
                    <h5
                      className="text-lg font-semibold mb-3 px-2"
                      style={{ color: colors.text, opacity: 0.9 }}
                    >
                      {category}
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {tokens.map((token, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl p-4 border hover:shadow-md transition-all duration-200 group"
                          style={{
                            backgroundColor: colors.warningBg,
                            borderColor: colors.warningBorder,
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="shrink-0">
                              <img
                                src={token.icon}
                                alt={token.name}
                                className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div
                                className="font-semibold text-sm mb-1 truncate"
                                style={{ color: colors.text }}
                              >
                                {token.name}
                              </div>
                              <div
                                className="text-xs font-medium"
                                style={{ color: colors.text, opacity: 0.7 }}
                              >
                                {token.desc}
                              </div>
                            </div>
                            <span
                              className="px-2 py-1 rounded-full text-xs font-semibold shrink-0"
                              style={{
                                backgroundColor: colors.secondary + "20",
                                color: colors.secondary,
                              }}
                            >
                              Soon
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div
                className="mt-6 p-4 rounded-xl text-center"
                style={{ backgroundColor: colors.primary + "10" }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  <span className="font-bold" style={{ color: colors.primary }}>
                    {futureMentoTokens.length}+ currencies
                  </span>{" "}
                  in development pipeline
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{
                      backgroundColor: colors.primary,
                      width: `${(1 / (futureMentoTokens.length + 1)) * 100}%`, // Representing 1 active + coming soon
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
