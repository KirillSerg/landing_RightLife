import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieBanner: React.FC = () => {
  const isHaveCookie =
    getCookieConsentValue("cookieConsent") === "false" ||
    getCookieConsentValue("cookieConsent") === "true";

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show && !isHaveCookie) {
        setShow(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [show, isHaveCookie]);

  return (
    <CookieConsent
      cookieName="cookieConsent"
      location="bottom"
      visible={"show"}
      buttonText="Accettare"
      onAccept={() => setShow(true)}
      enableDeclineButton
      declineButtonText="Disattivare"
      onDecline={() => setShow(true)}
      expires={30}
      style={{
        background: "#2B373B",
        opacity: "0.95",
        position: "fixed",
        top: `${show ? "100vh" : "calc(100vh - var(--footer-height))"}`,
        transition: "top 2s",
      }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    >
      Questo sito web utilizza i cookie per migliorare l'esperienza dell'utente.
      <Link
        to="/informativa sulla privacy"
        style={{
          textDecoration: "underline",
          fontSize: "12px",
          color: "palevioletred",
        }}
      >
        {" "}
        Informativa sulla privacy
      </Link>
    </CookieConsent>
  );
};

export default CookieBanner;
