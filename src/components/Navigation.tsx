import React, { useState, useEffect } from "react";
import appLogo from "../assets/images/full-logo.png";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { WaitlistModal } from "./WaitlistModal";
import { Link, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const { colors, isDark, toggleTheme } = useTheme();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Security", path: "/security" },
    { name: "Help", path: "/help" },
    { name: "Pricing", path: "/pricing" },
  ];

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    // Force direct scroll to top on path change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed w-full top-0 z-5"
      style={{
        backgroundColor: isMenuOpen
          ? colors.background
          : `${colors.background}CC`,
        borderColor: colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <img
                src={appLogo}
                alt="Circlepot logo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-black uppercase tracking-widest transition-all duration-300 hover:opacity-100 ${
                    location.pathname === link.path
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                  style={{ color: colors.text }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden sm:flex items-center gap-3 sm:gap-6">
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-xl transition-all duration-300 border border-transparent"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="px-5 py-2 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-2xl font-bold shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 text-black whitespace-nowrap"
                style={{ backgroundColor: colors.primary }}
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Actions (Visible only on very small screens) */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  color: colors.text,
                }}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl transition-all duration-300 border"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text,
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            <WaitlistModal
              isOpen={isWaitlistOpen}
              onClose={() => setIsWaitlistOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: colors.background }}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`p-6 rounded-3xl text-2xl font-black tracking-tighter transition-all duration-300 border-2 ${
                location.pathname === link.path ? "scale-[1.02]" : "opacity-40"
              }`}
              style={{
                backgroundColor: colors.surface,
                borderColor:
                  location.pathname === link.path
                    ? colors.primary
                    : colors.border,
                color: colors.text,
              }}
            >
              <div className="flex justify-between items-center">
                <span>{link.name}</span>
                <span className="text-sm opacity-20">0{idx + 1}</span>
              </div>
            </Link>
          ))}

          <div
            className="mt-8 sm:hidden space-y-4 pt-8 border-t"
            style={{ borderColor: colors.border }}
          >
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsWaitlistOpen(true);
              }}
              className="w-full py-6 rounded-3xl font-black text-xl text-black transition-all active:scale-95 active:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Join Waitlist
            </button>
          </div>

          <div className="mt-auto pb-12 text-center opacity-30">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: colors.text }}
            >
              © 2025 Circlepot Global
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
