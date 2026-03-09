import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import SEO from "../components/SEO";

export const PrivacyPage: React.FC = () => {
  const { colors } = useTheme();

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect minimal information necessary to provide our services:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Account Information:</strong> Email address or phone
              number used for account creation and recovery
            </li>
            <li>
              <strong>Wallet Address:</strong> Your blockchain wallet address
              for processing transactions
            </li>
            <li>
              <strong>Transaction Data:</strong> Records of your savings
              contributions and withdrawals
            </li>
            <li>
              <strong>Device Information:</strong> Basic device and browser
              information for security and app functionality
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Your Data",
      content: (
        <>
          <p className="mb-4">Your information is used to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Create and secure your account</li>
            <li>Process savings transactions and payouts</li>
            <li>Send important notifications about your circles and goals</li>
            <li>Provide customer support</li>
            <li>Improve our services and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Cookies & Local Storage",
      content: (
        <>
          <p className="mb-4">
            We use only essential cookies and local storage for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Authentication:</strong> Keeping you signed in securely
            </li>
            <li>
              <strong>Preferences:</strong> Remembering your theme and settings
            </li>
            <li>
              <strong>Session Management:</strong> Maintaining your wallet
              connection
            </li>
          </ul>
          <p className="mb-4">
            We do not use tracking cookies, advertising cookies, or third-party
            analytics that monitor your behavior across websites. If this
            changes in the future, we will update this policy and request your
            consent.
          </p>
        </>
      ),
    },
    {
      title: "4. Blockchain Data",
      content: (
        <>
          <p className="mb-4">
            Circlepot operates on blockchain technology. Please be aware:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Blockchain transactions are public and permanently recorded</li>
            <li>
              Your wallet address and transaction history are visible on the
              blockchain
            </li>
            <li>
              We cannot delete or modify blockchain data once transactions are
              confirmed
            </li>
            <li>Smart contract interactions are transparent and verifiable</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Third-Party Services",
      content: (
        <>
          <p className="mb-4">We use the following third-party services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Dynamic:</strong> For authentication and secure wallet
              access
            </li>
            <li>
              <strong>ZeroDev:</strong> For smart account infrastructure and
              blockchain interactions
            </li>
            <li>
              <strong>Google Fonts:</strong> For typography (minimal data
              transfer)
            </li>
            <li>
              <strong>Blockchain Networks:</strong> For processing transactions
            </li>
          </ul>
          <p className="mb-4">
            Each third-party service has its own privacy policy. We encourage
            you to review them.
          </p>
        </>
      ),
    },
    {
      title: "6. Data Retention",
      content: (
        <p className="mb-4">
          We retain your account information for as long as your account is
          active. You may request deletion of your off-chain data at any time.
          Blockchain data cannot be deleted due to the immutable nature of
          distributed ledgers.
        </p>
      ),
    },
    {
      title: "7. Your Rights",
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of off-chain data</li>
            <li>Export your data in a portable format</li>
            <li>Withdraw consent for optional data processing</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </>
      ),
    },
    {
      title: "8. Data Security",
      content: (
        <p className="mb-4">
          We implement industry-standard security measures to protect your
          information, including encryption, secure authentication, and regular
          security audits. Your funds are secured by audited smart contracts on
          the blockchain.
        </p>
      ),
    },
    {
      title: "9. Children's Privacy",
      content: (
        <p className="mb-4">
          Circlepot is not intended for users under 18 years of age. We do not
          knowingly collect information from children.
        </p>
      ),
    },
    {
      title: "10. Changes to This Policy",
      content: (
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes via email or through our app. Continued use
          of our services after changes constitutes acceptance of the updated
          policy.
        </p>
      ),
    },
    {
      title: "11. Contact Us",
      content: (
        <>
          <p className="mb-4">
            If you have questions about this Privacy Policy or your data, please
            contact us:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Email:</strong> privacy@circlepot.xyz
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <SEO
        title="Privacy Policy - Data Protection & Security"
        description="Learn how Circlepot collects, uses, and safeguards your data. Experience community savings with transparency and privacy."
      />
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-32 sm:py-40">
        <h1
          className="text-5xl font-black mb-6 tracking-tighter"
          style={{ color: colors.text }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-lg font-medium mb-12 opacity-60"
          style={{ color: colors.text }}
        >
          Last updated: January 2026
        </p>
        <p
          className="text-lg font-medium mb-12 opacity-80"
          style={{ color: colors.text }}
        >
          At Circlepot, we are committed to protecting your privacy. This policy
          explains how we collect, use, and safeguard your information when you
          use our community savings platform.
        </p>
        <div
          className="prose prose-lg max-w-none font-medium opacity-80"
          style={{ color: colors.text }}
        >
          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2
                className="text-2xl font-black mb-4 uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </div>
      <Footer colors={colors} />
    </div>
  );
};
