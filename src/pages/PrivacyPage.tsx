import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const PrivacyPage: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-32 sm:py-40">
        <h1
          className="text-5xl font-black mb-12 tracking-tighter"
          style={{ color: colors.text }}
        >
          Privacy Policy
        </h1>
        <div
          className="prose prose-lg max-w-none font-medium opacity-80"
          style={{ color: colors.text }}
        >
          <p className="mb-6">Last updated: October 2025</p>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              1. Data We Collect
            </h2>
            <p>
              We value your privacy. We only collect the information necessary
              to provide our services, such as your email or phone number used
              for account access and recovery.
            </p>
          </section>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              2. How We Use Data
            </h2>
            <p>
              Your data is used to secure your account, process your savings
              transactions, and provide customer support.
            </p>
          </section>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              3. Your Privacy Rights
            </h2>
            <p>
              Your financial transactions are protected by digital
              infrastructure. We do not sell your personal information to third
              parties.
            </p>
          </section>
        </div>
      </div>
      <Footer colors={colors} />
    </div>
  );
};
