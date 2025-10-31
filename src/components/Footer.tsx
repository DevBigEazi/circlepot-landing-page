import React from 'react';
import type { ThemeColors } from '../types';
import appLogo from '../assets/app-logo.png';

interface FooterProps {
  colors: ThemeColors;
}

export const Footer: React.FC<FooterProps> = ({ colors }) => {
  return (
    <footer className="border-t py-12" style={{ backgroundColor: colors.infoBg, borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                <img src={appLogo} alt="Cirlepot logo" height={50} width={50}/>
              </div>
              <span className="font-bold text-xl" style={{ color: colors.text }}>CirclePot</span>
            </div>
            <p className="text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>Powered by Celo Blockchain</p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>Product</h4>
            <ul className="space-y-2 text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>
              <li><a href="#" className="hover:opacity-100 transition">How It Works</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Features</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>Support</h4>
            <ul className="space-y-2 text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>
              <li><a href="#" className="hover:opacity-100 transition">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>Legal</h4>
            <ul className="space-y-2 text-sm font-medium" style={{ color: colors.text, opacity: 0.75 }}>
              <li><a href="#" className="hover:opacity-100 transition">Terms</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm font-medium" style={{ borderColor: colors.border, color: colors.text, opacity: 0.7 }}>
          © 2025 CirclePot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};