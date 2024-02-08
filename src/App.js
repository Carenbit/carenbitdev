import React, { useState, useEffect } from "react";
import "./App.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import AboutUs from "./component/aboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import Products from "./component/Products/Products";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <AboutUs innerwidth={width} />
      <Products />
      <ContactUs />
      <div className="scrollTop">
        <a href="#home" aria-label="scrollToTop">
          <MdKeyboardDoubleArrowUp className="iconvector" />
        </a>
      </div>
    </div>
  );
};

export default App;
