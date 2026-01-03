import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Users,
  Target,
  Star,
  TrendingUp,
  ShieldCheck,
  Key,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";

export const HowItWorksPage: React.FC = () => {
  const { colors } = useTheme();

  const circleSteps = [
    {
      icon: Users,
      title: "Join or Create a Circle",
      description:
        "Pick a circle that matches your savings goal, or create your own with 5-20 members. Set the amount and frequency that works for you.",
    },
    {
      icon: CheckCircle,
      title: "Make Regular Contributions",
      description:
        "Contribute the agreed amount each period. Your money starts earning interest immediately, even while waiting for your payout.",
    },
    {
      icon: TrendingUp,
      title: "Receive Your Payout",
      description:
        "On your scheduled turn, receive the full pot. Your initial collateral deposit and share of earned interest are returned once the full circle is completed.",
    },
  ];

  const reputationBenefits = [
    {
      title: "Better Payout Positions",
      desc: "Get paid earlier in future circles",
    },
    {
      title: "Access to Premium Circles",
      desc: "Join high-value saving groups",
    },
    { title: "Lower Requirements", desc: "Reduced deposit amounts over time" },
    { title: "Future Loan Access", desc: "Unlock borrowing opportunities" },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-24">
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
              Complete Guide
            </span>
          </div>
          <h1
            className="text-5xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-balance"
            style={{ color: colors.text }}
          >
            How Circlepot Works
          </h1>

          <p
            className="text-xl sm:text-2xl font-medium opacity-60 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Save together with friends, family, or community members. Earn
            interest while you wait. Get paid when it's your turn.
          </p>
        </div>
      </section>

      {/* Understanding Savings Circles */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Understanding <br className="hidden sm:block" /> Savings Circles
            </h2>
            <p
              className="text-lg sm:text-xl font-medium opacity-50 max-w-2xl mx-auto"
              style={{ color: colors.text }}
            >
              A modern take on traditional community savings, powered by secure
              digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {circleSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="bento-card p-10 text-center"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    }}
                  >
                    <Icon style={{ color: colors.primary }} size={20} />
                  </div>
                  <h3
                    className="text-2xl font-black mb-4"
                    style={{ color: colors.secondary }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base font-medium opacity-60"
                    style={{ color: colors.text }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Example Circle */}
          <div
            className="bento-card p-10 mt-16"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <h3
              className="text-3xl font-black mb-8"
              style={{ color: colors.text }}
            >
              Real Example: 10-Person Weekly Circle
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div
                    className="flex justify-between items-center py-3 border-b border-dashed"
                    style={{ borderColor: colors.border }}
                  >
                    <span className="font-bold" style={{ color: colors.text }}>
                      Contribution
                    </span>
                    <span
                      className="font-black text-xl"
                      style={{ color: colors.primary }}
                    >
                      $50/week
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center py-3 border-b border-dashed"
                    style={{ borderColor: colors.border }}
                  >
                    <span className="font-bold" style={{ color: colors.text }}>
                      Members
                    </span>
                    <span
                      className="font-black text-xl"
                      style={{ color: colors.text }}
                    >
                      10 people
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center py-3 border-b border-dashed"
                    style={{ borderColor: colors.border }}
                  >
                    <span className="font-bold" style={{ color: colors.text }}>
                      Weekly Pot
                    </span>
                    <span
                      className="font-black text-xl"
                      style={{ color: colors.text }}
                    >
                      $500
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-bold" style={{ color: colors.text }}>
                      Platform Fee (1%)
                    </span>
                    <span
                      className="font-black text-xl"
                      style={{ color: "#ef4444" }}
                    >
                      -$5.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div
                  className="bento-card p-6"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.primary,
                  }}
                >
                  <div
                    className="text-sm font-black uppercase tracking-widest opacity-40 mb-2"
                    style={{ color: colors.text }}
                  >
                    You Receive (Net)
                  </div>
                  <div
                    className="text-4xl font-black mb-2"
                    style={{ color: colors.primary }}
                  >
                    $495.00
                  </div>
                  <div
                    className="text-xs font-bold opacity-40 mb-4"
                    style={{ color: colors.text }}
                  >
                    *Creators pay $0 fee
                  </div>
                  <div
                    className="text-sm font-bold opacity-60"
                    style={{ color: colors.text }}
                  >
                    Receive your payout (on your turn) + collateral return and
                    earned interest (at circle completion)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Savings Goals */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
                  Individual Savings
                </span>
              </div>
              <h2
                className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-balance"
                style={{ color: colors.text }}
              >
                Personal <br className="hidden sm:block" /> Savings Goals
              </h2>
              <p
                className="text-lg sm:text-2xl font-medium opacity-60 mb-10 leading-relaxed"
                style={{ color: colors.text }}
              >
                Save on your own schedule. Set a target amount and deadline.
                Your money earns yield (interest) while you save, and you can
                withdraw anytime with flexible penalties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.background }}
                  >
                    <Target style={{ color: colors.primary }} size={20} />
                  </div>
                  <div>
                    <div
                      className="font-black mb-1"
                      style={{ color: colors.secondary }}
                    >
                      Set Your Target
                    </div>
                    <div
                      className="text-sm font-medium opacity-60"
                      style={{ color: colors.text }}
                    >
                      Choose your goal amount and deadline
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.background }}
                  >
                    <TrendingUp style={{ color: colors.primary }} size={20} />
                  </div>
                  <div>
                    <div
                      className="font-black mb-1"
                      style={{ color: colors.secondary }}
                    >
                      Earn While You Save
                    </div>
                    <div
                      className="text-sm font-medium opacity-60"
                      style={{ color: colors.text }}
                    >
                      Your money grows in secure savings accounts, helping you
                      reach your targets faster with earned yield.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.background }}
                  >
                    <Clock style={{ color: colors.primary }} size={20} />
                  </div>
                  <div>
                    <div
                      className="font-black mb-1"
                      style={{ color: colors.secondary }}
                    >
                      Flexible Withdrawals
                    </div>
                    <div
                      className="text-sm font-medium opacity-60"
                      style={{ color: colors.text }}
                    >
                      Lower penalties as you get closer to your goal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <h3
                className="text-2xl font-black mb-6"
                style={{ color: colors.text }}
              >
                Early Withdrawal Fees
              </h3>
              <div className="space-y-3">
                {[
                  { progress: "0-24%", fee: "1.0%", status: "Just started" },
                  {
                    progress: "25-49%",
                    fee: "0.6%",
                    status: "Making progress",
                  },
                  { progress: "50-74%", fee: "0.3%", status: "Halfway there" },
                  { progress: "75-99%", fee: "0.1%", status: "Almost done" },
                  { progress: "100%", fee: "0%", status: "Goal reached!" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    }}
                  >
                    <div>
                      <div
                        className="font-black"
                        style={{ color: colors.text }}
                      >
                        {item.progress}
                      </div>
                      <div
                        className="text-xs font-bold opacity-40"
                        style={{ color: colors.text }}
                      >
                        {item.status}
                      </div>
                    </div>
                    <div
                      className="text-2xl font-black"
                      style={{ color: i === 4 ? colors.primary : colors.text }}
                    >
                      {item.fee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation System */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                Build Trust
              </span>
            </div>
            <h2
              className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Your Reputation Score
            </h2>
            <p
              className="text-lg sm:text-xl font-medium opacity-50 max-w-2xl mx-auto"
              style={{ color: colors.text }}
            >
              Your digital reputation grows every time you save successfully.
              Better scores unlock better opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {reputationBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bento-card p-8 text-center"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <Star
                  className="mx-auto mb-4"
                  size={32}
                  style={{ color: colors.primary }}
                />
                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: colors.secondary }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm font-medium opacity-60"
                  style={{ color: colors.text }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="bento-card p-10"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <h3
              className="text-2xl font-black mb-6"
              style={{ color: colors.text }}
            >
              How Your Score is Calculated
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  factor: "Payment History",
                  weight: "35%",
                  desc: "On-time contributions",
                },
                {
                  factor: "Completion Rate",
                  weight: "30%",
                  desc: "Finished circles",
                },
                {
                  factor: "Time Active",
                  weight: "15%",
                  desc: "Months on platform",
                },
                {
                  factor: "Circle Variety",
                  weight: "10%",
                  desc: "Different circles joined",
                },
                {
                  factor: "Recent Activity",
                  weight: "10%",
                  desc: "Last 6 months",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border text-center"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="text-3xl font-black mb-2"
                    style={{ color: colors.primary }}
                  >
                    {item.weight}
                  </div>
                  <div
                    className="text-sm font-black mb-1"
                    style={{ color: colors.secondary }}
                  >
                    {item.factor}
                  </div>
                  <div
                    className="text-xs font-medium opacity-40"
                    style={{ color: colors.text }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Interest Works */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Your Money Earns While You Wait
            </h2>
            <p
              className="text-lg font-medium opacity-60"
              style={{ color: colors.text }}
            >
              Unlike traditional savings circles where money sits idle,
              Circlepot puts every dollar to work immediately in secure savings
              accounts.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: colors.background }}
                >
                  <Award style={{ color: colors.primary }} size={24} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-black mb-3"
                    style={{ color: colors.secondary }}
                  >
                    Immediate Deployment
                  </h3>
                  <p
                    className="font-medium opacity-60 leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    When you join a circle or create a savings goal, your money
                    is instantly placed in trusted, secure savings accounts. It
                    starts earning interest from day one.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: colors.background }}
                >
                  <TrendingUp style={{ color: colors.primary }} size={24} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-black mb-3"
                    style={{ color: colors.secondary }}
                  >
                    Shared Returns
                  </h3>
                  <p
                    className="font-medium opacity-60 leading-relaxed mb-4"
                    style={{ color: colors.text }}
                  >
                    At the end of a circle, all earned interest is shared among
                    members based on their payment performance. This is
                    distributed along with the return of your initial collateral
                    deposit once the full circle is completed.
                  </p>
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: colors.background }}
                  >
                    <div className="flex-1">
                      <div
                        className="text-sm font-bold opacity-40 mb-1"
                        style={{ color: colors.secondary }}
                      >
                        Community Share
                      </div>
                      <div
                        className="text-2xl font-black"
                        style={{ color: colors.primary }}
                      >
                        90%
                      </div>
                    </div>
                    <div
                      className="w-px h-12"
                      style={{ backgroundColor: colors.border }}
                    ></div>
                    <div className="flex-1">
                      <div
                        className="text-sm font-bold opacity-40 mb-1"
                        style={{ color: colors.secondary }}
                      >
                        Platform Fee
                      </div>
                      <div
                        className="text-2xl font-black"
                        style={{ color: colors.text }}
                      >
                        10%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: colors.background }}
                >
                  <CheckCircle style={{ color: colors.primary }} size={24} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-black mb-3"
                    style={{ color: colors.secondary }}
                  >
                    Automatic & Transparent
                  </h3>
                  <p
                    className="font-medium opacity-60 leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    All interest calculations and distributions happen
                    automatically when your circle completes. No complex
                    spreadsheets or manual tracking needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Security */}
      <section className="py-12 sm:py-16 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Commitment & Security
            </h2>
            <p
              className="text-xl font-medium opacity-50 max-w-2xl mx-auto"
              style={{ color: colors.text }}
            >
              Building trust through automated protective measures and flexible
              recovery options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: colors.background }}
              >
                <ShieldCheck style={{ color: colors.primary }} size={24} />
              </div>
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: colors.secondary }}
              >
                Security Collateral
              </h3>
              <p
                className="font-medium opacity-60 leading-relaxed"
                style={{ color: colors.text }}
              >
                To join a circle, members deposit initial collateral. This stays
                in the contract to protect the group against missed payments and
                is returned completely once the circle completes.
              </p>
            </div>

            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: colors.background }}
              >
                <Clock style={{ color: colors.primary }} size={24} />
              </div>
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: colors.secondary }}
              >
                Ultimatum Window
              </h3>
              <p
                className="font-medium opacity-60 leading-relaxed"
                style={{ color: colors.text }}
              >
                Circles have a fixed time to fill up (7-14 days). If a circle
                doesn't reach 60% capacity, it becomes "DEAD." Members can
                instantly withdraw their full initial deposit, while any small
                interest earned during the wait is captured by the platform.
              </p>
            </div>

            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: colors.background }}
              >
                <Key style={{ color: colors.primary }} size={24} />
              </div>
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: colors.secondary }}
              >
                Smart Login
              </h3>
              <p
                className="font-medium opacity-60 leading-relaxed mb-6"
                style={{ color: colors.text }}
              >
                No seed phrases or complex passwords. Open your secure account
                instantly using just your email or phone number. Your funds are
                tied to your digital identity—always ensure your email account
                stays secure and private.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer colors={colors} />
    </div>
  );
};
