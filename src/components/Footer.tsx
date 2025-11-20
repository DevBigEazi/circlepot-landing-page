import React from "react";
import { FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";
import type { ThemeColors } from "../types";
import appLogo from "../assets/full-logo.png";

interface FooterProps {
  colors: ThemeColors;
}

export const Footer: React.FC<FooterProps> = ({ colors }) => {
  const socialLinks = [
    {
      name: "X",
      url: "https://twitter.com",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: FaLinkedin,
    },
    {
      name: "Telegram",
      url: "https://telegram.org",
      icon: FaTelegram,
    },
  ];

  return (
    <footer
      className="border-t py-12"
      style={{ backgroundColor: colors.infoBg, borderColor: colors.border }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={appLogo}
              alt="Circlepot logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
            />
            <p
              className="text-sm font-medium mt-4"
              style={{ color: colors.text, opacity: 0.75 }}
            >
              Powered by Celo Blockchain
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="transition hover:opacity-100"
                    style={{ color: colors.text, opacity: 0.75 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>
              Product
            </h4>
            <ul
              className="space-y-2 text-sm font-medium"
              style={{ color: colors.text, opacity: 0.75 }}
            >
              <li>
                <a href="#how-it-works" className="hover:opacity-100 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:opacity-100 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:opacity-100 transition">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>
              Support
            </h4>
            <ul
              className="space-y-2 text-sm font-medium"
              style={{ color: colors.text, opacity: 0.75 }}
            >
              <li>
                <a href="#faq" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: colors.text }}>
              Legal
            </h4>
            <ul
              className="space-y-2 text-sm font-medium"
              style={{ color: colors.text, opacity: 0.75 }}
            >
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-8 text-center text-sm font-medium"
          style={{
            borderColor: colors.border,
            color: colors.text,
            opacity: 0.7,
          }}
        >
          © 2025 Circlepot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};