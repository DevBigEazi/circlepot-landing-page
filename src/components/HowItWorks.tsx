import React from "react";
import { Banknote, Coins, User2, Users, Wallet } from "lucide-react";
import type { ThemeColors } from "../types";

interface HowItWorksProps {
  colors: ThemeColors;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ colors }) => {
  const steps = [
    {
      step: "01",
      title: "Deposit Local Currency",
      description: "Bank transfer, mobile money, or cards",
      icon: Banknote,
      color: colors.primary,
    },
    {
      step: "02",
      title: "We Auto-Convert to Digital Dollars",
      description: "Stable conversion",
      icon: Coins,
      color: colors.secondary,
    },
    {
      step: "03",
      title: "Join Savings Circles",
      description: "Save with trusted community groups",
      icon: Users,
      color: colors.accent,
    },
    {
      step: "04",
      title: "Create Personal Goal Saving",
      description: "Define targets and earn yield while you save",
      icon: User2,
      color: colors.successBorder,
    },
    {
      step: "05",
      title: "Withdraw In Your Local Currency",
      description: "Direct to bank or mobile money",
      icon: Wallet,
      color: colors.secondary,
    },
  ];

  return (
    <section id="how-it-works" className="py-2 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div
              className="inline-block px-4 pb-1.5 rounded-full border mb-6"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
              }}
            >
              <span
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                The Process
              </span>
            </div>
            <h2
              className="text-5xl sm:text-8xl font-black tracking-tighter leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Five simple steps to <br className="hidden sm:block" /> financial
              freedom.
            </h2>
          </div>
          <p
            className="text-lg sm:text-2xl max-w-sm lg:text-right font-medium opacity-60"
            style={{ color: colors.text }}
          >
            We've simplified everything behind the scenes to give you a
            familiar, secure experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bento-card p-8 group transition-all duration-500 hover:scale-[1.02]"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="text-6xl font-black mb-12 transition-colors duration-500 group-hover:text-emerald-500 opacity-10 group-hover:opacity-100"
                style={{ color: colors.text }}
              >
                {step.step}
              </div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:-rotate-12"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                >
                  <step.icon style={{ color: colors.primary }} size={24} />
                </div>

                <h3
                  className="text-xl font-bold mb-4 tracking-tight leading-tight"
                  style={{ color: colors.text }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm font-medium leading-relaxed opacity-60"
                  style={{ color: colors.text }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
