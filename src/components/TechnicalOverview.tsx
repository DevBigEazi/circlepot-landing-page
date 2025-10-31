import React from 'react';
import { Globe, Coins, Zap, Shield } from 'lucide-react';
import type { ThemeColors } from '../types';

interface TechnicalOverviewProps {
  colors: ThemeColors;
}

export const TechnicalOverview: React.FC<TechnicalOverviewProps> = ({ colors }) => {
  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl font-bold mb-4" style={{ color: colors.text }}>How CirclePot Works</h2>
          <p className="text-xl max-w-3xl mx-auto font-medium" style={{ color: colors.text, opacity: 0.8 }}>
            The technology behind secure, transparent, and automated community savings
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Stack */}
          <div className="rounded-3xl p-8 shadow-xl border animate-slideInLeft" style={{ backgroundColor: colors.surface, borderColor: colors.border }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>Our Technology</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: colors.background }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold" style={{ color: colors.text }}>Celo Network</div>
                  <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Fast, secure, and environmentally friendly blockchain network</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: colors.background }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
                  <Coins className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold" style={{ color: colors.text }}>Mento Protocol</div>
                  <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Creates stable digital currencies pegged to real-world currencies</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: colors.background }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold" style={{ color: colors.text }}>Thirdweb</div>
                  <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Makes blockchain technology simple and user-friendly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Automated Systems */}
          <div className="rounded-3xl p-8 shadow-xl border animate-slideInRight" style={{ backgroundColor: colors.surface, borderColor: colors.border }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>Automated Systems</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border" style={{ borderColor: colors.border }}>
                <div className="font-bold mb-2" style={{ color: colors.text }}>Circle Management</div>
                <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Automatically handles contributions, payouts, and circle rules</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: colors.border }}>
                <div className="font-bold mb-2" style={{ color: colors.text }}>Goal Tracking</div>
                <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Monitors your savings progress and sends reminders</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: colors.border }}>
                <div className="font-bold mb-2" style={{ color: colors.text }}>Trust Scoring</div>
                <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Tracks reliability and builds community trust</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ borderColor: colors.border }}>
                <div className="font-bold mb-2" style={{ color: colors.text }}>Security Monitoring</div>
                <div className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>24/7 protection of your funds and transactions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Zero Smart Contract Gas Fees', desc: 'Advanced technology eliminates all transaction costs', color: colors.primary },
            { icon: Shield, title: 'Your Money, Your Control', desc: 'You always maintain full control of your funds', color: colors.secondary },
            { icon: Globe, title: 'Global & Future-Ready', desc: 'Built to expand worldwide and support more currencies', color: colors.accent }
          ].map((benefit, idx) => (
            <div key={idx} className="rounded-2xl p-6 shadow-lg border text-center animate-slideUp" style={{ backgroundColor: colors.surface, borderColor: colors.border, animationDelay: `${idx * 0.1}s` }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: benefit.color }}>
                <benefit.icon className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{benefit.title}</h4>
              <p className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
