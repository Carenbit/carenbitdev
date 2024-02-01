import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import AboutUs from "./component/aboutUs/AboutUs";

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
      <Home />
      <AboutUs innerwidth={width} />
    </div>
  );
};

export default App;
