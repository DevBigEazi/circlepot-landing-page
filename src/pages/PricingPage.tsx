import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";

export const PricingPage: React.FC = () => {
  const { colors } = useTheme();
  const [payoutAmount, setPayoutAmount] = useState(500);

  const calculateFee = (amount: number) => {
    if (amount <= 1000) {
      return { fee: amount * 0.01, type: "1%" };
    }
    return { fee: 10, type: "Fixed $10" };
  };

  const { fee, type } = calculateFee(payoutAmount);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-48 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Transparent Pricing
            </span>
          </div>
          <h1
            className="text-5xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            style={{ color: colors.text }}
          >
            Simple, Fair Pricing
          </h1>
          <p
            className="text-xl sm:text-2xl font-medium opacity-60 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            No hidden fees. No surprises. Pay only when you succeed.
          </p>
        </div>
      </section>

      {/* Fee Calculator */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bento-card p-12"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <h2
              className="text-3xl font-black mb-8 text-center"
              style={{ color: colors.text }}
            >
              Fee Calculator
            </h2>

            <div className="max-w-xl mx-auto">
              <label
                className="block text-lg font-bold mb-4"
                style={{ color: colors.text }}
              >
                Enter Payout Amount
              </label>
              <div className="relative">
                <span
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black"
                  style={{ color: colors.textLight }}
                >
                  $
                </span>
                <input
                  type="number"
                  value={payoutAmount}
                  onChange={(e) =>
                    setPayoutAmount(parseInt(e.target.value) || 0)
                  }
                  className="w-full pl-12 pr-6 py-6 rounded-2xl border-2 text-2xl font-black focus:outline-none"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                />
              </div>

              <div
                className="mt-8 p-8 rounded-2xl"
                style={{ backgroundColor: colors.background }}
              >
                <div
                  className="flex justify-between items-center mb-4 pb-4 border-b border-dashed"
                  style={{ borderColor: colors.border }}
                >
                  <span className="font-bold" style={{ color: colors.text }}>
                    Payout Amount
                  </span>
                  <span
                    className="text-2xl font-black"
                    style={{ color: colors.text }}
                  >
                    ${payoutAmount}
                  </span>
                </div>
                <div
                  className="flex justify-between items-center mb-4 pb-4 border-b border-dashed"
                  style={{ borderColor: colors.border }}
                >
                  <span className="font-bold" style={{ color: colors.text }}>
                    Fee Structure
                  </span>
                  <span
                    className="text-xl font-black"
                    style={{ color: colors.primary }}
                  >
                    {type}
                  </span>
                </div>
                <div
                  className="flex justify-between items-center mb-4 pb-4 border-b-2"
                  style={{ borderColor: colors.border }}
                >
                  <span className="font-bold" style={{ color: colors.text }}>
                    Platform Fee
                  </span>
                  <span className="text-2xl font-black text-red-500">
                    -${fee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span
                    className="text-xl font-black"
                    style={{ color: colors.text }}
                  >
                    You Receive
                  </span>
                  <span
                    className="text-4xl font-black"
                    style={{ color: colors.primary }}
                  >
                    ${(payoutAmount - fee).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Fees */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-6xl font-black mb-12 text-center tracking-tighter leading-none"
            style={{ color: colors.text }}
          >
            All Fees at a Glance
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Circle Payouts (≤$1,000)",
                fee: "1%",
                desc: "Fee on payouts + interest distribution",
              },
              {
                name: "Circle Payouts (>$1,000)",
                fee: "$10",
                desc: "Fixed fee for larger payouts",
              },
              {
                name: "Public Circle Visibility",
                fee: "$0.50",
                desc: "One-time to make circle public",
              },
              {
                name: "External Transfer",
                fee: "$0.20",
                desc: "To external wallets or exchanges",
              },
              {
                name: "Late Payment",
                fee: "1%",
                desc: "Deducted from your deposit",
              },
              {
                name: "Goal Early Withdrawal",
                fee: "0.1-1%",
                desc: "Earn yield continuously while saving",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bento-card p-6"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="font-black text-lg flex-1"
                    style={{ color: colors.text }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-2xl font-black ml-4"
                    style={{ color: colors.primary }}
                  >
                    {item.fee}
                  </span>
                </div>
                <p
                  className="text-sm font-medium opacity-60"
                  style={{ color: colors.text }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Free */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bento-card p-12"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.primary,
            }}
          >
            <h2
              className="text-3xl sm:text-5xl font-black mb-8 text-center tracking-tighter"
              style={{ color: colors.text }}
            >
              What's Completely Free
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Creating private circles",
                "Joining circles",
                "Account creation",
                "Sending money to other users",
                "Receiving payouts",
                "Account recovery",
                "Interest earnings",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle
                    className="shrink-0"
                    size={24}
                    style={{ color: colors.primary }}
                  />
                  <span className="font-bold" style={{ color: colors.text }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-6xl font-black mb-12 text-center tracking-tighter leading-none"
            style={{ color: colors.text }}
          >
            How We Compare
          </h2>

          <div
            className="bento-card overflow-hidden"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: colors.background }}>
                    <th
                      className="text-left p-6 font-black"
                      style={{ color: colors.text }}
                    >
                      Feature
                    </th>
                    <th
                      className="text-center p-6 font-black"
                      style={{ color: colors.primary }}
                    >
                      Circlepot
                    </th>
                    <th
                      className="text-center p-6 font-black"
                      style={{ color: colors.text }}
                    >
                      Traditional Banks
                    </th>
                    <th
                      className="text-center p-6 font-black"
                      style={{ color: colors.text }}
                    >
                      Other Apps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Transaction Fees",
                      circlepot: "Free",
                      banks: "$2-5 each",
                      others: "$1-3 each",
                    },
                    {
                      feature: "Account Fees",
                      circlepot: "Free",
                      banks: "$5-15/month",
                      others: "Free-$10/month",
                    },
                    {
                      feature: "International Transfer",
                      circlepot: "Free",
                      banks: "$25-50",
                      others: "$5-15",
                    },
                    {
                      feature: "Earn interest (Yield)",
                      circlepot: "90% Shared",
                      banks: "0.01%",
                      others: "Varies",
                    },
                    {
                      feature: "Instant Payouts",
                      circlepot: "Yes",
                      banks: "3-5 days",
                      others: "1-3 days",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-t"
                      style={{ borderColor: colors.border }}
                    >
                      <td
                        className="p-6 font-bold"
                        style={{ color: colors.text }}
                      >
                        {row.feature}
                      </td>
                      <td
                        className="p-6 text-center font-black"
                        style={{ color: colors.primary }}
                      >
                        {row.circlepot}
                      </td>
                      <td
                        className="p-6 text-center font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        {row.banks}
                      </td>
                      <td
                        className="p-6 text-center font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer colors={colors} />
    </div>
  );
};
