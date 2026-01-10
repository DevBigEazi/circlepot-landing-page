import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useEmailAuth } from "../hooks/useAuth";

interface SubmitStatus {
  success: boolean;
  message: string;
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { colors } = useTheme();
  const {
    isLoading: authLoading,
    error: authError,
    sendEmailCode,
    loginWithEmail,
    account,
    resetEmailFlow,
  } = useEmailAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    hasUsedWeb3: "no",
    verificationCode: "",
  });

  const [step, setStep] = useState<"form" | "otp">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkExists = async (
    field: string,
    value: string
  ): Promise<boolean> => {
    const API_ID = import.meta.env.VITE_SHEETDB_API;
    if (!API_ID) return false;

    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/${API_ID}/search?${field}=${encodeURIComponent(
          value.trim()
        )}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) return false;

      const data = await response.json();
      return Array.isArray(data) && data.length > 0;
    } catch (error) {
      console.error(`Error checking ${field}:`, error);
      return false;
    }
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Check if email already exists
      const emailExists = await checkExists("Email", formData.email);
      if (emailExists) {
        setSubmitStatus({
          success: false,
          message: "This email is already on our waitlist. Thank you!",
        });
        setIsSubmitting(false);
        return;
      }

      // 2. Send OTP
      const success = await sendEmailCode(formData.email);
      if (success) {
        setStep("otp");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send verification code. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Verify OTP and connect wallet
      const loginSuccess = await loginWithEmail(
        formData.email,
        formData.verificationCode
      );

      if (!loginSuccess) {
        setIsSubmitting(false);
        return;
      }
      // Note: We keep isSubmitting true here so the button shows "Verifying..." or "Submitting..."
      // The useEffect below will handle the actual SheetDB submission.
    } catch (error) {
      console.error("Login Error:", error);
      setIsSubmitting(false);
    }
  };

  // This effect handles the submission after successful authentication
  useEffect(() => {
    const submitToSheet = async () => {
      // We check for account address and that we haven't succeeded yet
      if (account?.address && step === "otp" && !submitStatus?.success) {
        setIsSubmitting(true); // Ensure loading state is active
        const API_ID = import.meta.env.VITE_SHEETDB_API;

        try {
          // Check if wallet address already exists
          const walletExists = await checkExists(
            "Wallet Address",
            account.address
          );

          if (walletExists) {
            setSubmitStatus({
              success: false,
              message: "This wallet is already registered on our waitlist!",
            });
            setIsSubmitting(false);
            return;
          }

          const now = new Date();
          const watOffset = 60 * 60 * 1000;
          const watDate = new Date(now.getTime() + watOffset);

          const requestBody = {
            data: [
              {
                "Full Name": formData.fullName.trim(),
                Email: formData.email.trim(),
                "Wallet Address": account.address,
                "Has Used Web3 Before":
                  formData.hasUsedWeb3 === "yes" ? "Yes" : "No",
                Date:
                  watDate.toISOString().replace("T", " ").substring(0, 19) +
                  " WAT",
                Timestamp: watDate.toISOString(),
              },
            ],
          };

          const response = await fetch(`https://sheetdb.io/api/v1/${API_ID}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });

          const result = await response.json();

          if (response.ok && result.created > 0) {
            setSubmitStatus({
              success: true,
              message:
                "Welcome to Circlepot! You're officially on the list. 🚀",
            });
            setTimeout(() => {
              onClose();
              setStep("form");
              setFormData({
                fullName: "",
                email: "",
                hasUsedWeb3: "no",
                verificationCode: "",
              });
              resetEmailFlow();
            }, 3000);
          } else {
            throw new Error("Failed to save your details");
          }
        } catch (error) {
          setSubmitStatus({
            success: false,
            message:
              "Auth successful, but we couldn't save your details. Please try again.",
          });
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    if (account?.address && step === "otp") {
      submitToSheet();
    }
  }, [account?.address, step, onClose]);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showLoading = isSubmitting || authLoading;
  const errorToShow = submitStatus?.message || authError?.message;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 shadow-2xl ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: colors.text }}
            >
              {step === "otp" ? "Verify Email" : "Join the Waitlist"}
            </h2>
            <p
              className="text-sm opacity-60 mt-1"
              style={{ color: colors.text }}
            >
              {step === "otp"
                ? `Enter the code sent to ${formData.email} by Thirdweb`
                : "Be the first to know when we launch"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ color: colors.text }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {submitStatus?.success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.text }}
            >
              Success!
            </h3>
            <p style={{ color: colors.text }} className="opacity-80">
              {submitStatus.message}
            </p>
          </div>
        ) : (
          <>
            {errorToShow && (
              <div className="p-4 rounded-xl mb-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errorToShow}
              </div>
            )}

            {step === "form" ? (
              <form onSubmit={handleSendCode} className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Web3 Experience
                  </label>
                  <select
                    name="hasUsedWeb3"
                    value={formData.hasUsedWeb3}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 transition-all outline-none cursor-pointer"
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    }}
                  >
                    <option value="no">First time in Web3</option>
                    <option value="yes">Experienced User</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={showLoading}
                  className="w-full py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  style={{
                    backgroundColor: colors.primary,
                    color: "#FFFFFF",
                  }}
                >
                  {showLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Code...
                    </span>
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyAndSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-center"
                    style={{ color: colors.text }}
                  >
                    Verification Code
                  </label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    required
                    maxLength={6}
                    placeholder="000000"
                    className="w-full px-4 py-4 rounded-xl border text-center text-3xl font-mono tracking-[0.5em] focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    style={{
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="mt-4 text-sm font-medium hover:underline block mx-auto opacity-60"
                    style={{ color: colors.text }}
                  >
                    Changed your email? Go back
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={showLoading}
                  className="w-full py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  style={{
                    backgroundColor: colors.primary,
                    color: "#FFFFFF",
                  }}
                >
                  {showLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
