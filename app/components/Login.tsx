"use client";
import { useEffect, useState } from "react";

const Turnstile = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const handleCallback = (token: string) => {
      setToken(token);
      console.log("Turnstile Token:", token);
    };
    // @ts-ignore
    window.onTurnstileSuccess = handleCallback;

    // Load Turnstile API
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // @ts-ignore
      window.onTurnstileSuccess = null;
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!token) {
      event.preventDefault();
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <form id="myForm" action="/submit" method="POST" onSubmit={handleSubmit}>
      {/* Other form fields */}
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAAhS4g4xCxAh-RWp"
        data-callback="onTurnstileSuccess"
      ></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Turnstile;
