import React from "react";
import "./Services.css";
import ColorBox from "./servicesCard"

export default function services() {
  return (
    <><div className="WholeSection">
      <h3 className="heading">Our Services</h3>
      <div className="horizontal-container">
        <div>
       <ColorBox cardColor="#FB6738" TextColor="White" SubheadingColor="#fff9f0" ImgSrc="/images/Ellipse 1.svg" TextContent="Whether you need a responsive website, intuitive mobile app, or both, our expert team will bring your vision to life with precision and flair."
        Subheading="Web & Mobile Development "></ColorBox>
        </div>
        <div>
          <ColorBox cardColor="#fff9f0" TextColor="#555555"SubheadingColor="#FB6738" ImgSrc="/images/Ellipse2.svg" TextContent="From initial ideation to end-of-life strategies, we provide robust tools to optimize processes, minimize risks, and drive growth
        " Subheading=" Product Lifecycle Software"></ColorBox>
        </div>
        <div>
        <ColorBox cardColor="#FB6738" TextColor="White" SubheadingColor="#fff9f0"ImgSrc="/images/Ellipse 1.svg" TextContent="Unlock the full potential of your existing systems with our seamless integration solutions."
        Subheading="Integration Solution"></ColorBox>
        </div>
      </div>
      </div>
    </>
  );
}
