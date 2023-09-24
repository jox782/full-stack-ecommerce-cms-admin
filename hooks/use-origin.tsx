import { useState, useEffect } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  // return the protocol and the domain name or the port
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  // to be sure that the component fully mounted before accessing the window obj
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return "";
  }
  return origin;
};
