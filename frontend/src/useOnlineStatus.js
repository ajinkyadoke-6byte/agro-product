import { useState, useEffect } from "react";

// ---------------------------------------------------------------------------
// navigator.onLine flips to false when the device has no network connection
// at all (airplane mode, wifi off, etc). It does NOT catch "DNS not
// resolving but network is up" — for that we also ping a tiny same-origin
// request; if it fails, we treat it the same as offline. This is the
// standard combination used for a reliable offline banner/page.
// ---------------------------------------------------------------------------
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    // Extra check: browsers can report onLine=true even when DNS/server is
    // unreachable. A lightweight HEAD request confirms real connectivity.
    const verify = async () => {
      try {
        await fetch("/favicon.ico", { method: "HEAD", cache: "no-store" });
        setIsOnline(true);
      } catch {
        setIsOnline(false);
      }
    };
    const interval = setInterval(verify, 15000); // recheck every 15s

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
      clearInterval(interval);
    };
  }, []);

  return isOnline;
}
