import React from "react";
import { FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";
import type { ThemeColors } from "../types";
import appLogo from "../assets/images/full-logo.png";
import { Link } from "react-router-dom";
import { icons } from "../data/icons";

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
      className="border-t py-16 sm:py-20"
      style={{ backgroundColor: colors.background, borderColor: colors.border }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/">
              <img
                src={appLogo}
                alt="Circlepot logo"
                className="h-14 w-auto mb-8"
              />
            </Link>
            <p
              className="text-lg font-bold mb-8 max-w-xs"
              style={{ color: colors.textLight }}
            >
              The global engine for community wealth. Built on Celo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:text-black"
                    style={{ borderColor: colors.border, color: colors.text }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              className="text-sm font-black uppercase tracking-widest mb-8"
              style={{ color: colors.primary }}
            >
              Product
            </h4>
            <ul
              className="space-y-4 text-lg font-bold"
              style={{ color: colors.text }}
            >
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-emerald-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/#partners"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-black uppercase tracking-widest mb-8"
              style={{ color: colors.primary }}
            >
              Support
            </h4>
            <ul
              className="space-y-4 text-lg font-bold"
              style={{ color: colors.text }}
            >
              <li>
                <Link
                  to="/help"
                  className="hover:text-emerald-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-black uppercase tracking-widest mb-8"
              style={{ color: colors.primary }}
            >
              Legal
            </h4>
            <ul
              className="space-y-4 text-lg font-bold"
              style={{ color: colors.text }}
            >
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Audit Report
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Ecosystem Row */}
        <div
          className="py-12 border-t flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ borderColor: colors.border }}
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40"
              style={{ color: colors.text }}
            >
              Building on
            </span>
            <div className="flex items-center gap-10 opacity-70 hover:opacity-100 transition-all duration-700">
              <img src={icons.celoLogo} alt="Celo" className="h-6 w-auto" />
              <img src={icons.mentoLogo} alt="Mento" className="h-6 w-auto" />
              <img
                src={icons.thirdwebLogo}
                alt="Thirdweb"
                className="h-6 w-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span
              className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40"
              style={{ color: colors.text }}
            >
              Audited & Secure
            </span>
            <div className="flex items-center gap-4">
              <div
                className="px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest"
                style={{
                  borderColor: colors.primary,
                  backgroundColor: colors.primary + "10",
                  color: colors.primary,
                }}
              >
                verified smart contract
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest"
          style={{
            borderColor: colors.border,
            color: colors.text,
            opacity: 0.3,
          }}
        >
          <div>© 2025 Circlepot Global.</div>
          <div className="flex gap-8">
            <span>Verified Smart Contract</span>
            <span>Non-Custodial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
