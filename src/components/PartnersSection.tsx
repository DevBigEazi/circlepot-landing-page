import React from "react";
import type { ThemeColors } from "../types";
import { techPartners, partners } from "../data/constants";

interface PartnersSectionProps {
  colors: ThemeColors;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ colors }) => {
  return (
    <section id="partners" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <div
              className="inline-block px-4 py-1.5 rounded-full border mb-6"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
              }}
            >
              <span
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                Ecosystem Partners
              </span>
            </div>
            <h2
              className="text-5xl sm:text-7xl font-black tracking-tighter leading-none mb-6"
              style={{ color: colors.text }}
            >
              Built with industry <br /> leaders.
            </h2>
            <p
              className="text-lg sm:text-xl font-medium opacity-50"
              style={{ color: colors.text }}
            >
              Leveraging the world's most advanced blockchain infrastructure to
              ensure speed, security, and stability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {techPartners.map((tech, i) => (
              <div
                key={i}
                className="bento-card p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                {/* Brand Accent Top Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: tech.brandColor }}
                />

                <div
                  className="w-20 h-20 rounded-3xl mb-6 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: tech.brandColor
                      ? `linear-gradient(135deg, ${tech.brandColor}15 0%, ${tech.brandColor}05 100%)`
                      : colors.background,
                    border: `1px solid ${tech.brandColor}30`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: tech.brandColor }}
                  />
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3
                  className="text-xl font-black tracking-tight"
                  style={{ color: colors.text }}
                >
                  {tech.name}
                </h3>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mt-3 py-1 px-3 rounded-full border transition-colors duration-300"
                  style={{
                    color: tech.brandColor,
                    borderColor: `${tech.brandColor}40`,
                    backgroundColor: `${tech.brandColor}10`,
                  }}
                >
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payments Grid Section */}
        <div className="mb-16">
          <h3
            className="text-sm font-black uppercase tracking-[0.2em] mb-12 opacity-30 text-center"
            style={{ color: colors.text }}
          >
            Payment & On-Ramp Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bento-card p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                {/* Subtle Background Glow */}
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: partner.brandColor }}
                />

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center relative overflow-hidden border transition-all duration-500 group-hover:rotate-6"
                    style={{
                      borderColor: partner.brandColor
                        ? `${partner.brandColor}40`
                        : colors.border,
                      background: partner.brandColor
                        ? `linear-gradient(135deg, ${partner.brandColor}20 0%, ${partner.brandColor}08 100%)`
                        : colors.background,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl"
                      style={{ backgroundColor: partner.brandColor }}
                    />
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-10 h-10 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4
                      className="text-2xl font-black tracking-tighter"
                      style={{ color: colors.text }}
                    >
                      {partner.name}
                    </h4>
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.2em]"
                      style={{ color: partner.brandColor || colors.primary }}
                    >
                      {partner.region}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {partner.methods.map((method, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border transition-colors duration-300"
                        style={{
                          borderColor: partner.brandColor
                            ? `${partner.brandColor}30`
                            : colors.border,
                          backgroundColor: partner.brandColor
                            ? `${partner.brandColor}08`
                            : colors.background,
                          color: colors.text,
                        }}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <div
                    className="pt-6 border-t border-dashed"
                    style={{
                      borderColor: partner.brandColor
                        ? `${partner.brandColor}20`
                        : colors.border,
                    }}
                  >
                    <p
                      className="text-xs font-bold opacity-40 leading-relaxed group-hover:opacity-60 transition-opacity"
                      style={{ color: colors.text }}
                    >
                      Live in: {partner.countries.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
