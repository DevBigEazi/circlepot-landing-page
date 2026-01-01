import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { icons } from "../data/icons";
import {
  Shield,
  Lock,
  Mail,
  Smartphone,
  CheckCircle,
  Award,
} from "lucide-react";

export const SecurityPage: React.FC = () => {
  const { colors } = useTheme();

  const securityLayers = [
    {
      icon: Shield,
      title: "You Control Your Money",
      description:
        "Your account is 100% under your control. We can't access, freeze, or move your funds. You're always in charge.",
    },
    {
      icon: Lock,
      title: "Bank-Level Encryption",
      description:
        "All your data and transactions are protected with the same encryption technology used by major banks worldwide.",
    },
    {
      icon: CheckCircle,
      title: "Verified Code",
      description:
        "Our platform has been independently reviewed by professional security experts to ensure your money is safe.",
    },
    {
      icon: Award,
      title: "Trusted Partners",
      description:
        "Built on Celo's secure infrastructure and powered by industry-leading technology from Mento Labs and Thirdweb.",
    },
  ];

  const loginFeatures = [
    {
      step: 1,
      title: "Login with Email/Phone",
      desc: "Fast, secure access to your account.",
    },
    {
      step: 2,
      title: "Secure Verification",
      desc: "Instant code sent to your linked identity.",
    },
    {
      step: 3,
      title: "Immediate Access",
      desc: "Manage your savings instantly.",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
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
              Trust & Safety
            </span>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black tracking-tighter mb-8"
            style={{ color: colors.text }}
          >
            Your Money, <br /> Your Control
          </h1>
          <p
            className="text-xl sm:text-2xl font-medium opacity-60 max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Bank-level security without the complexity. You're always in control
            of your funds, with multiple layers of protection keeping everything
            safe.
          </p>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tighter mb-6"
              style={{ color: colors.text }}
            >
              Multiple Layers of Protection
            </h2>
            <p
              className="text-lg font-medium opacity-50 max-w-2xl mx-auto"
              style={{ color: colors.text }}
            >
              Your security is our top priority. Here's how we keep your money
              safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <div
                  key={i}
                  className="bento-card p-10"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3
                    className="text-2xl font-black mb-4"
                    style={{ color: colors.text }}
                  >
                    {layer.title}
                  </h3>
                  <p
                    className="text-base font-medium opacity-60 leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tighter mb-6"
              style={{ color: colors.text }}
            >
              What Makes Circlepot Different?
            </h2>
            <p
              className="text-lg font-medium opacity-60"
              style={{ color: colors.text }}
            >
              Traditional banks control your money. We don't. Here's the
              difference.
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="bento-card p-8"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-widest opacity-40 mb-3"
                    style={{ color: colors.text }}
                  >
                    Traditional Banks
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-black">✗</span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Can freeze your account anytime
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-black">✗</span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Control access to your money
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-black">✗</span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Can see all your transactions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-black">✗</span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Slow transfers and high fees
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-widest mb-3"
                    style={{ color: colors.primary }}
                  >
                    Circlepot
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span
                        className="font-black"
                        style={{ color: colors.primary }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Only you control your account
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="font-black"
                        style={{ color: colors.primary }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        You decide when to move money
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="font-black"
                        style={{ color: colors.primary }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Your financial privacy protected
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="font-black"
                        style={{ color: colors.primary }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        Instant transfers, minimal fees
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Recovery */}
      <section className="py-16 sm:py-20">
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
                  Account Recovery
                </span>
              </div>
              <h2
                className="text-4xl sm:text-6xl font-black tracking-tighter mb-6"
                style={{ color: colors.text }}
              >
                Lost Access? <br /> No Problem.
              </h2>
              <p
                className="text-lg font-medium opacity-60 mb-8"
                style={{ color: colors.text }}
              >
                Access to your funds is tied directly to your email address or
                phone number. There's no separate "Forget Access" recovery—your
                social identity is your key. This means it's absolutely critical
                to keep your linked email account secure and private.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Identity-Based Access",
                    desc: "Your funds are linked to your email",
                  },
                  {
                    icon: Shield,
                    title: "Critical Security",
                    desc: "Protect your email to protect your funds",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile ID",
                    desc: "Phone-based verification for every login",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <Icon className="text-black" size={20} />
                      </div>
                      <div>
                        <div
                          className="font-black mb-1"
                          style={{ color: colors.text }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-sm font-medium opacity-60"
                          style={{ color: colors.text }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="bento-card p-10"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <h3
                className="text-2xl font-black mb-8"
                style={{ color: colors.text }}
              >
                Smart Login Process
              </h3>
              <div className="space-y-6">
                {loginFeatures.map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl border-2"
                      style={{
                        borderColor: colors.primary,
                        color: colors.primary,
                      }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <div
                        className="font-black text-lg mb-1"
                        style={{ color: colors.text }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-sm font-medium opacity-60"
                        style={{ color: colors.text }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mt-10 p-6 rounded-2xl border border-red-500/20 bg-red-500/5 text-sm font-bold leading-relaxed"
                style={{ color: colors.text }}
              >
                ⚠️ <span className="text-red-500">Caution:</span> If your linked
                email account is compromised, your funds may be at risk. Always
                enable 2FA on your email.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tighter mb-6"
              style={{ color: colors.text }}
            >
              Built on Trusted Technology
            </h2>
            <p
              className="text-lg font-medium opacity-60"
              style={{ color: colors.text }}
            >
              We partner with industry leaders to ensure your money is always
              safe and accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Celo",
                logo: icons.celoLogo,
                role: "Secure Infrastructure",
                desc: "Trusted by millions worldwide for fast, secure digital transactions",
              },
              {
                name: "Mento Labs",
                logo: icons.mentoLogo,
                role: "Stable Digital Dollars",
                desc: "Ensuring your savings maintain stable value",
              },
              {
                name: "Thirdweb",
                logo: icons.thirdwebLogo,
                role: "Simple & Secure Access",
                desc: "Enterprise-grade security with consumer-friendly experience",
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="bento-card p-8 text-center group"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundColor: colors.background }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto"
                  />
                </div>
                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: colors.text }}
                >
                  {partner.name}
                </h3>
                <div
                  className="text-xs font-black uppercase tracking-widest mb-3"
                  style={{ color: colors.primary }}
                >
                  {partner.role}
                </div>
                <p
                  className="text-sm font-medium opacity-60"
                  style={{ color: colors.text }}
                >
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Complex Setup */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bento-card p-12 text-center"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }}
          >
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tighter mb-6"
              style={{ color: colors.text }}
            >
              No Complicated Setup Required
            </h2>
            <p
              className="text-lg font-medium opacity-60 max-w-2xl mx-auto mb-8"
              style={{ color: colors.text }}
            >
              Most crypto apps require you to manage complex wallets, remember
              seed phrases, and pay transaction fees. Circlepot handles all of
              that for you automatically.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "No 12-Word Phrases",
                  desc: "Nothing to write down or memorize",
                },
                {
                  title: "No Transaction Fees",
                  desc: "100% free to send and receive",
                },
                {
                  title: "No Crypto Knowledge",
                  desc: "Works like any savings app",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                >
                  <CheckCircle
                    className="mx-auto mb-3"
                    size={32}
                    style={{ color: colors.primary }}
                  />
                  <div
                    className="font-black mb-2"
                    style={{ color: colors.text }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-sm font-medium opacity-60"
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

      <Footer colors={colors} />
    </div>
  );
};
