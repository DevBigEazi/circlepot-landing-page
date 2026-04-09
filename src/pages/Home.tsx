import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { currencies, faqs } from "../data/constants";
import { HowItWorks } from "../components/HowItWorks";
import { FeaturesShowcase } from "../components/FeaturesShowcase";
import { PartnersSection } from "../components/PartnersSection";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";
// import { CurrenciesSection } from '../components/CurrenciesSection';
import { Footer } from "../components/Footer";
import SEO from "../components/SEO";

export const Home: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { colors } = useTheme();

  const currentCurrency = currencies[selectedCurrency];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <SEO
        title="Circlepot - Secure & Transparent Community Savings"
        description="The modern way to save together. Join community savings circles, earn interest, and build your digital Credit Score with Circlepot."
        faqData={faqs}
      />
      <Navigation />
      <HeroSection
        colors={colors}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currentCurrency={currentCurrency}
      />
      <HowItWorks colors={colors} />
      <FeaturesShowcase colors={colors} currentCurrency={currentCurrency} />
      <PartnersSection colors={colors} />
      <FAQSection colors={colors} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CTASection colors={colors} />
      <Footer colors={colors} />
    </div>
  );
};

export default Home;
