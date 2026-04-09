import { useState, useCallback } from "react";
import {
  useDynamicContext,
  useConnectWithOtp,
  useSocialAccounts,
} from "@dynamic-labs/sdk-react-core";
import { ProviderEnum } from "@dynamic-labs/types";
import { useAccountAddress } from "./useAccountAddress";

export interface AuthError {
  code: string;
  message: string;
  details?: unknown;
}

export interface AuthState {
  isLoading: boolean;
  error: AuthError | null;
  isConnected: boolean;
}

export const useAuth = () => {
  const { user, handleLogOut } = useDynamicContext();
  const { address } = useAccountAddress();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const isConnected = !!user;

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const logout = useCallback(async () => {
    try {
      await handleLogOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  }, [handleLogOut]);

  return {
    isLoading,
    error,
    isConnected,
    account: address ? { address } : null,
    user,
    clearError,
    setIsLoading,
    setError,
    logout,
  };
};

export const useGoogleAuth = () => {
  const {
    isLoading,
    error,
    setError,
    setIsLoading,
    clearError,
    isConnected,
    user,
  } = useAuth();
  const { signInWithSocialAccount, isProcessing } = useSocialAccounts();

  const loginWithGoogle = useCallback(async () => {
    try {
      setIsLoading(true);
      clearError();
      await signInWithSocialAccount(ProviderEnum.Google);
    } catch (err) {
      console.error("Google login error:", err);
      setError({
        code: "GOOGLE_AUTH_ERROR",
        message: (err as Error).message || "Failed to connect with Google",
        details: err,
      });
    } finally {
      setIsLoading(false);
    }
  }, [signInWithSocialAccount, setIsLoading, clearError, setError]);

  return {
    isLoading: isLoading || isProcessing,
    error,
    isConnected,
    user,
    loginWithGoogle,
  };
};

export interface UseEmailAuthReturn {
  isLoading: boolean;
  error: AuthError | null;
  isConnected: boolean;
  account: { address: string } | null;
  emailSent: boolean;
  clearError: () => void;
  loginWithEmail: (email: string, verificationCode: string) => Promise<boolean>;
  sendEmailCode: (email: string) => Promise<boolean>;
  resetEmailFlow: () => void;
}

export const useEmailAuth = (): UseEmailAuthReturn => {
  const {
    isLoading,
    setIsLoading,
    error,
    setError,
    clearError,
    isConnected,
    account,
  } = useAuth();
  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();
  const [emailSent, setEmailSent] = useState(false);

  const resetEmailFlow = useCallback(() => {
    setEmailSent(false);
    clearError();
  }, [clearError]);

  const sendEmailCode = useCallback(
    async (email: string): Promise<boolean> => {
      try {
        setIsLoading(true);
        clearError();
        await connectWithEmail(email);
        setEmailSent(true);
        return true;
      } catch (err) {
        console.error("Email OTP error:", err);
        setError({
          code: "EMAIL_SEND_ERROR",
          message: (err as Error).message || "Failed to send verification code",
          details: err,
        });
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [connectWithEmail, setIsLoading, clearError, setError],
  );

  const loginWithEmail = useCallback(
    async (_email: string, verificationCode: string): Promise<boolean> => {
      try {
        setIsLoading(true);
        clearError();
        await verifyOneTimePassword(verificationCode);
        return true;
      } catch (err) {
        console.error("OTP verification error:", err);
        setError({
          code: "INVALID_CODE",
          message: (err as Error).message || "Invalid or expired verification code",
          details: err,
        });
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [verifyOneTimePassword, setIsLoading, clearError, setError],
  );

  return {
    isLoading,
    error,
    isConnected,
    account,
    emailSent,
    clearError,
    sendEmailCode,
    loginWithEmail,
    resetEmailFlow,
  };
};
