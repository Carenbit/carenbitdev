import React, { useState, useEffect } from "react";
import "./App.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import AboutUs from "./component/aboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import Products from "./component/Products/Products";
import Solutions from "./component/Solutions/solution";
import Services from "./component/Services/Services";
import { PiWhatsappLogoFill } from "react-icons/pi";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll); // eslint-disable-next-line
  }, []);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ld0tokpAAAAAEHVaDoLyEcCrXPOqUj7vUCfTF9x"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <div className="App">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about-us">
          <AboutUs innerwidth={width} />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="contact-us">
          <ContactUs />
        </div>
        {isVisible && (
          <div className="scrollTop">
            <a href="#home" aria-label="scrollToTop" title="scrollToTop">
              <MdKeyboardDoubleArrowUp className="iconvector" />
            </a>
          </div>
        )}
        <div className="whatsappLink">
          <a
            href="https://api.whatsapp.com/send?phone=917972379031"
            target="_blank"
            rel="noreferrer"
          >
            <PiWhatsappLogoFill className="whatsappIcon" />
          </a>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default App;
