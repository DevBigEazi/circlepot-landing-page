import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { currencies } from '../data/constants';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesShowcase } from '../components/FeaturesShowcase';
import { PartnersSection } from '../components/PartnersSection';
import { FAQSection } from '../components/FAQSection';
import { TechnicalOverview } from '../components/TechnicalOverview';
import { CTASection } from '../components/CTASection';
import { CurrenciesSection } from '../components/CurrenciesSection';
import { Footer } from '../components/Footer';


export const Home: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { colors } = useTheme();

  const currentCurrency = currencies[selectedCurrency];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .animate-on-scroll { opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-on-scroll.animate-visible { opacity: 1; transform: translateY(0); }
      `}</style>

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
      <CurrenciesSection colors={colors}/>
      <FAQSection colors={colors} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <TechnicalOverview colors={colors} />
      <CTASection colors={colors} />
      <Footer colors={colors} />
    </div>
  );
};

export default Home;