import { useEffect } from "react";

let activeBodyScrollLocks = 0;
let previousOverflowStyle = "";

const lockBodyScroll = () => {
  if (typeof document === "undefined") return;

  if (activeBodyScrollLocks === 0) {
    previousOverflowStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  activeBodyScrollLocks += 1;
};

const unlockBodyScroll = () => {
  if (typeof document === "undefined") return;
  if (activeBodyScrollLocks === 0) return;

  activeBodyScrollLocks -= 1;

  if (activeBodyScrollLocks === 0) {
    document.body.style.overflow = previousOverflowStyle;
  }
};

export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [isLocked]);
};
