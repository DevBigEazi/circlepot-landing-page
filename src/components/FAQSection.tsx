import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ThemeColors } from "../types";
import { faqs } from "../data/constants";
import { Link } from "react-router-dom";

interface FAQSectionProps {
  colors: ThemeColors;
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  colors,
  openFaq,
  setOpenFaq,
}) => {
  const miniFaqs = faqs.slice(0, 5);

  return (
    <section id="faq" className="py-2 sm:py-10 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* FAQ Header */}
          <div className="lg:sticky lg:top-40">
            <div
              className="inline-block px-4 pb-1.5 rounded-full border mb-8"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.surface,
              }}
            >
              <span
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                Information
              </span>
            </div>
            <h2
              className="text-5xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-balance"
              style={{ color: colors.text }}
            >
              Questions <br className="hidden sm:block" /> & Answers.
            </h2>
            <p
              className="text-lg sm:text-2xl font-medium opacity-60 max-w-sm mb-12 leading-relaxed"
              style={{ color: colors.text }}
            >
              Everything you need to know about starting your savings journey
              with Circlepot.
            </p>

            <Link
              to="/help"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: colors.surface,
                color: colors.secondary,
                border: `2px solid ${colors.border}`,
              }}
            >
              View All FAQs
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {miniFaqs.map((faq, index) => (
              <div
                key={index}
                className="bento-card overflow-hidden transition-all duration-500"
                style={{
                  backgroundColor:
                    openFaq === index ? colors.background : colors.surface,
                  borderColor:
                    openFaq === index ? colors.primary : colors.border,
                }}
              >
                <button
                  className="flex justify-between items-start w-full p-8 sm:p-10 text-left transition-all group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  <span
                    className="text-xl sm:text-2xl font-bold tracking-tight pr-10"
                    style={{ color: colors.text }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 mt-1"
                    style={{
                      borderColor: colors.border,
                      backgroundColor:
                        openFaq === index ? colors.primary : colors.surface,
                    }}
                  >
                    {openFaq === index ? (
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
                  id={`faq-${index}`}
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-[800px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div
                    className="p-10 pt-0 border-t border-dashed mt-0"
                    style={{ borderColor: colors.border }}
                  >
                    <p
                      className="text-lg leading-relaxed font-medium mt-8 max-w-2xl opacity-70"
                      style={{ color: colors.text }}
                    >
                      {faq.answer}
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
