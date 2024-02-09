import React from "react";
import "./Services.css";
import ColorBox from "./servicesCard";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";

export default function Services() {
  return (
    <><div className="WholeSection">
      <div className="divisorFirst"></div>
      <h3 className="heading">Our Services</h3>
      <div className="horizontal-container">
        <div>
       <ColorBox cardColor="#FB6738" TextColor="White" SubheadingColor="#fff9f0" ImgSrc={Ellipse1} TextContent="Whether you need a responsive website, intuitive mobile app, or both, our expert team will bring your vision to life with precision and flair."
        Subheading="Web & Mobile Development "></ColorBox>
        </div>
        <div>
          <ColorBox cardColor="#fff9f0" TextColor="#555555"SubheadingColor="#FB6738" ImgSrc={Ellipse2} TextContent="From initial ideation to end-of-life strategies, we provide robust tools to optimize processes, minimize risks, and drive growth
        " Subheading=" Product Lifecycle Software"></ColorBox>
        </div>
        <div>
        <ColorBox cardColor="#FB6738" TextColor="White" SubheadingColor="#fff9f0"ImgSrc={Ellipse1} TextContent="Unlock the full potential of your existing systems with our seamless integration solutions."
        Subheading="Integration Solution"></ColorBox>
        </div>
      </div>
      <div className="divisor"></div>
      </div>
    </>
  );
}
