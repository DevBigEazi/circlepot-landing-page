import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const TermsPage: React.FC = () => {
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
          Terms of Service
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
              1. Introduction
            </h2>
            <p>
              Welcome to Circlepot. By using our platform, you agree to these
              terms. Circlepot is a decentralized savings platform powered by
              Celo L2 and Mento stablecoins.
            </p>
          </section>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years old to use Circlepot. You are
              responsible for complying with your local laws regarding digital
              assets.
            </p>
          </section>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              3. Risks
            </h2>
            <p>
              While we use bank-level encryption and secure digital
              infrastructure, using external digital systems involves risks. You
              maintain full control over your funds and are responsible for your
              account credentials.
            </p>
          </section>
          <section className="mb-12">
            <h2
              className="text-2xl font-black mb-4 uppercase tracking-widest"
              style={{ color: colors.primary }}
            >
              4. Fees
            </h2>
            <p>
              Our fees are clearly displayed before any transaction. These
              include platform fees on payouts and small penalties for early
              goal withdrawals.
            </p>
          </section>
        </div>
      </div>
      <Footer colors={colors} />
    </div>
  );
};
