import React, { useState, useEffect } from "react";
import "./App.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import AboutUs from "./component/aboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import Products from "./component/Products/Products";
import Solutions from "./component/Solutions/solution";
import Services from "./component/Services/Services";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const listenToScroll = () => {
    let heightToHideFrom = window.innerHeight;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
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
    </div>
  );
};

export default App;
