import { useCallback, useEffect, useMemo, useState } from "react";
import Script from "next/script";

const TURNSTILE_PUBLIC_SITE_KEY = "0x4AAAAAAAhS4g4xCxAh-RWp";

const useTurnstileCaptcha = () => {
  const [token, setToken] = useState();
  const [widgetId, setWidgetId] = useState();

  const content = useMemo(
    () => (
      <>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
          strategy="lazyOnload"
          defer
          async
        />
        <div id="captcha-container" />
      </>
    ),
    []
  );

  const initializeCaptcha = () => {
    console.log("initializeCaptcha");
    // @ts-ignore
    if (window && window?.turnstile) {
      // @ts-ignore
      const id = window.turnstile.render("#captcha-container", {
        sitekey: TURNSTILE_PUBLIC_SITE_KEY,
        // @ts-ignore
        callback: function (token) {
          setToken(token);
        },
      });
      console.log("id", id);
      setWidgetId(id);
    }
  };

  useEffect(() => {
    if (window) {
      // @ts-ignore
      window.onloadTurnstileCallback = initializeCaptcha;
    }

    return () => {
      // @ts-ignore
      window.onloadTurnstileCallback = null;
    };
  }, []);

  // Since the Next.js is a single page application
  // the captcha widget will not be re-rendered on route change
  // so we need to issue a re-render manually
  useEffect(() => {
    initializeCaptcha();
  }, [content]);

  // This is the function that resets the captcha widget
  // which will give you a new token

  // routing to a new page will create a new widget with new widgetId
  // it is crucial to call the reset with the widgetId
  const resetWidget = useCallback(() => {
    // @ts-ignore
    if (window && window?.turnstile) {
      // @ts-ignore
      window.turnstile.reset(widgetId);
    }
  }, [widgetId]);

  return { content, token, resetWidget };
};

export default useTurnstileCaptcha;
