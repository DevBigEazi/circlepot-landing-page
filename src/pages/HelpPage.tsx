import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export const HelpPage: React.FC = () => {
  const { colors } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      name: "Getting Started",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Click 'Get Started', choose your sign-up method (Email or Google), verify your identity, and you're done! Your secure account is created automatically in under 60 seconds.",
        },
        {
          question: "How do I add money to my account?",
          answer:
            "Use our partner networks like Fonbnk, Yellow Card, Quidax, or Transfi to deposit via bank transfer, mobile money (M-Pesa, MTN Momo), or cards. You can also receive funds from other Circlepot users or from exchanges.",
        },
        {
          question: "Which currencies are supported?",
          answer:
            "We support 35+ local currencies including Nigerian Naira, Kenyan Shilling, Ghanaian Cedi, South African Rand, US Dollar, Euro, British Pound, Canadian Dollar, CFA Franc, Indian Rupee, and more through our payment and onramp/offramp partners.",
        },
        {
          question: "Which countries can use Circlepot?",
          answer:
            "Circlepot is available globally. We work with region-specific partners to support local payment methods in Africa, Asia, Europe, and the Americas.",
        },
        {
          question: "Do I need to know about crypto?",
          answer:
            "Not at all! Circlepot works like any normal savings app. Sign up with email or Google, and all transactions happen automatically. You don't need any crypto knowledge.",
        },
      ],
    },
    {
      name: "Savings Circles",
      faqs: [
        {
          question: "What is a savings circle?",
          answer:
            "A savings circle is a group of 5-20 people who contribute the same amount regularly (daily, weekly, or monthly). Each round, one member receives the full pot until everyone gets their turn. It's like a traditional community savings group, but automated and secure with instant payouts.",
        },
        {
          question: "How do I join a circle?",
          answer:
            "Browse available circles or join via an invitation link. You'll need to deposit one contribution amount plus a small buffer to join. Your money starts earning interest immediately.",
        },
        {
          question: "How much do I need to deposit to join?",
          answer:
            "You need to deposit enough to cover one full contribution amount plus a small buffer (typically 10-20% extra) when joining. This ensures commitment and protects other members.",
        },
        {
          question: "Can I create my own circle?",
          answer:
            "Yes! Creating a private circle is free. Set the contribution amount ($1-$5,000), frequency (daily/weekly/monthly), and capacity (5-20 members). As creator, you always receive the first payout and pay 0% fees. Making your circle public costs $0.50.",
        },
        {
          question: "What's the difference between private and public circles?",
          answer:
            "Private circles are free and only people you invite can join. Public circles cost $0.50 but are visible to all users, helping you fill the circle faster. Both work identically once active.",
        },
        {
          question: "How is the payout order determined?",
          answer:
            "Payout positions are assigned based on your reputation score when the circle starts. Circle creators always receive the first payout. Members with higher reputation get better positions.",
        },
        {
          question: "What happens to my money while waiting?",
          answer:
            "Your money is automatically placed in secure savings accounts and earns interest continuously from the moment you join until the circle completes.",
        },
        {
          question: "What happens if a circle doesn't fill up?",
          answer:
            "Circles need 60% of max capacity to start within 7-14 days. If this isn't met, the circle becomes inactive. Members can withdraw their principal, and the platform keeps the interest earned during the pending phase.",
        },
        {
          question: "Can I participate in multiple circles?",
          answer:
            "Yes! Join as many circles as you want, as long as you have sufficient funds for the required deposits.",
        },
        {
          question: "What if I miss a payment?",
          answer:
            "The system sends reminders before the deadline. If you miss it, a 1% fee is deducted from your deposit, and your reputation score decreases slightly.",
        },
        {
          question: "Can I withdraw before the circle ends?",
          answer: "No. You can not exit an active circle.",
        },
        {
          question: "How long does it take to receive my payout?",
          answer:
            "Payouts happen automatically on your scheduled day and are instantly available in your account.",
        },
      ],
    },
    {
      name: "Personal Savings Goals",
      faqs: [
        {
          question: "How do Personal Savings Goals work?",
          answer:
            "Set a target amount and deadline. Your funds are deposited into savings accounts and earn yield (interest) continuously. You can withdraw anytime, but early withdrawal has penalties that decrease as you get closer to your goal.",
        },
        {
          question: "What are the early withdrawal fees?",
          answer:
            "Fees decrease with progress: 1% at 0-24%, 0.6% at 25-49%, 0.3% at 50-74%, 0.1% at 75-99%, and 0% at 100% completion.",
        },
        {
          question: "Can I have multiple savings goals?",
          answer:
            "Yes! Create as many goals as you need for different purposes.",
        },
      ],
    },
    {
      name: "Payments & Withdrawals",
      faqs: [
        {
          question: "How do I withdraw money?",
          answer:
            "Convert your digital currency back to local currency through our partners. Withdraw directly to your bank account, mobile money wallet, or digital wallet. All withdrawals are processed instantly.",
        },
        {
          question: "Are there any fees?",
          answer:
            "We charge minimal fees: 1% on payouts ≤$1,000 (or flat $10 for larger payouts), $0.50 to make circles public, 1% late payment fee. All fees are clearly shown before you confirm.",
        },
        {
          question: "Is there a fee to send money externally?",
          answer:
            "Yes, there's a flat $0.20 fee when you transfer funds to external exchanges or wallets. This helps cover platform costs while keeping it affordable.",
        },
      ],
    },
    {
      name: "Security & Account",
      faqs: [
        {
          question: "Is my money safe?",
          answer:
            "Yes! You control your account completely with secure credentials. Independent security experts have verified our platform. Your funds are protected with bank-level encryption.",
        },
        {
          question: "What if I lose access to my account?",
          answer:
            "Your account is tied directly to your email. There are no seed phrases to memorize or lose, but it's critical to keep your linked email account secure and private, as your funds are accessed through it. There is no separate recovery process.",
        },
        {
          question: "Can Circlepot access my funds?",
          answer:
            "No. Your account is 100% under your control. We can't access, freeze, or move your money. You're always in charge.",
        },
      ],
    },
    {
      name: "Interest & Reputation",
      faqs: [
        {
          question: "How does interest work?",
          answer:
            "Your money earns interest in secure savings accounts from the moment you deposit it. At circle completion, 90% of interest is shared among members (distributed when your collateral deposit is returned) based on payment performance, and 10% supports the platform.",
        },
        {
          question: "What is Performance Points?",
          answer:
            "You earn +10 points for every on-time contribution. These determine your share of earned interest and fees collected. Late payments earn no points.",
        },
        {
          question: "How does my reputation score work?",
          answer:
            "Your score is based on payment history (35%), completion rate (30%), time on platform (15%), circle variety (10%), and recent activity (10%). Higher scores unlock better payout positions and access to premium circles.",
        },
        {
          question: "What happens if I complete circles successfully?",
          answer:
            "Your reputation improves, unlocking lower deposits, better payout positions, access to larger circles, and future borrowing opportunities.",
        },
      ],
    },
  ];

  const allFaqs = faqCategories.flatMap((cat, catIndex) =>
    cat.faqs.map((faq, faqIndex) => ({
      ...faq,
      category: cat.name,
      globalIndex: catIndex * 100 + faqIndex,
    }))
  );

  const filteredFaqs = searchTerm
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-balance"
            style={{ color: colors.text }}
          >
            How Can We Help?
          </h1>
          <p
            className="text-xl sm:text-2xl font-medium opacity-60 mb-12"
            style={{ color: colors.text }}
          >
            Find answers to common questions about Circlepot
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2"
              size={24}
              style={{ color: colors.textLight }}
            />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 text-lg font-bold focus:outline-none transition-all"
              style={{
                backgroundColor: colors.surface,
                borderColor: searchTerm ? colors.primary : colors.border,
                color: colors.text,
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            /* Search Results */
            <div className="space-y-4">
              <div
                className="text-lg font-bold mb-8"
                style={{ color: colors.textLight }}
              >
                {filteredFaqs!.length} result
                {filteredFaqs!.length !== 1 ? "s" : ""} found
              </div>
              {filteredFaqs!.map((faq) => (
                <div
                  key={faq.globalIndex}
                  className="bento-card transition-all duration-500"
                  style={{
                    backgroundColor:
                      openFaq === faq.globalIndex
                        ? colors.background
                        : colors.surface,
                    borderColor:
                      openFaq === faq.globalIndex
                        ? colors.primary
                        : colors.border,
                  }}
                >
                  <button
                    className="flex justify-between items-start w-full p-8 text-left group"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === faq.globalIndex ? null : faq.globalIndex
                      )
                    }
                  >
                    <div className="flex-1 pr-8">
                      <div
                        className="text-xs font-black uppercase tracking-widest opacity-40 mb-2"
                        style={{ color: colors.primary }}
                      >
                        {faq.category}
                      </div>
                      <span
                        className="text-xl font-bold"
                        style={{ color: colors.secondary }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shrink-0"
                      style={{
                        borderColor: colors.border,
                        backgroundColor:
                          openFaq === faq.globalIndex
                            ? colors.primary
                            : colors.surface,
                      }}
                    >
                      {openFaq === faq.globalIndex ? (
                        <ChevronUp className="text-black" size={24} />
                      ) : (
                        <ChevronDown
                          style={{ color: colors.textLight }}
                          size={24}
                        />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ${
                      openFaq === faq.globalIndex
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <p
                        className="text-lg leading-relaxed font-medium opacity-70"
                        style={{ color: colors.text }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Category View */
            <div className="space-y-16">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2
                    className="text-3xl sm:text-4xl font-black mb-8"
                    style={{ color: colors.text }}
                  >
                    {category.name}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = catIndex * 100 + faqIndex;
                      return (
                        <div
                          key={faqIndex}
                          className="bento-card transition-all duration-500"
                          style={{
                            backgroundColor:
                              openFaq === globalIndex
                                ? colors.background
                                : colors.surface,
                            borderColor:
                              openFaq === globalIndex
                                ? colors.primary
                                : colors.border,
                          }}
                        >
                          <button
                            className="flex justify-between items-start w-full p-8 text-left group"
                            onClick={() =>
                              setOpenFaq(
                                openFaq === globalIndex ? null : globalIndex
                              )
                            }
                          >
                            <span
                              className="text-xl font-bold pr-8"
                              style={{ color: colors.secondary }}
                            >
                              {faq.question}
                            </span>
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shrink-0"
                              style={{
                                borderColor: colors.border,
                                backgroundColor:
                                  openFaq === globalIndex
                                    ? colors.primary
                                    : colors.surface,
                              }}
                            >
                              {openFaq === globalIndex ? (
                                <ChevronUp className="text-black" size={24} />
                              ) : (
                                <ChevronDown
                                  style={{ color: colors.textLight }}
                                  size={24}
                                />
                              )}
                            </div>
                          </button>

                          <div
                            className={`transition-all duration-500 ${
                              openFaq === globalIndex
                                ? "max-h-[800px] opacity-100"
                                : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            <div
                              className="px-8 pb-8 pt-0 border-t border-dashed"
                              style={{ borderColor: colors.border }}
                            >
                              <p
                                className="text-lg leading-relaxed font-medium mt-6 opacity-70"
                                style={{ color: colors.text }}
                              >
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer colors={colors} />
    </div>
  );
};
