import React from "react";
import "./Services.css";
import ColorBox from "./servicesCard";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import Ellipse3 from "../../assets/Ellipse3.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedColorBox = ({ cardColor, TextColor, SubheadingColor, ImgSrc, TextContent, Subheading }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Trigger animation when the card comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, scale: 1 });
    } else {
      controls.start({ y: 200, scale: 0.7 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ y: 200, scale: 0.5 }} transition={{ duration: 0.5 }}>
      <ColorBox
        cardColor={cardColor}
        TextColor={TextColor}
        SubheadingColor={SubheadingColor}
        ImgSrc={ImgSrc}
        TextContent={TextContent}
        Subheading={Subheading}
      />
    </motion.div>
  );
};

export default function Services() {
  return (
    <div className="WholeSection">
      <div className="divisorFirst"></div>
      <div className="Seheading">Our Services</div>
      <div className="horizontal-container">
        <AnimatedColorBox
          cardColor="#fff9f0"
          TextColor="#555555"
          SubheadingColor="#FB6738"
          ImgSrc={Ellipse2}
          TextContent="Whether you need a responsive website, intuitive mobile app, or both, our expert team will bring your vision to life with precision and flair."
          Subheading="Web & Mobile Development "
        />
        <AnimatedColorBox
          cardColor="#FB6738"
          TextColor="White"
          SubheadingColor="#fff9f0"
          ImgSrc={Ellipse1}
          TextContent="From initial ideation to end-of-life strategies, we provide robust tools to optimize processes, minimize risks, and drive growth."
          Subheading="Product Lifecycle Software"
        />
        <AnimatedColorBox
          cardColor="#fff9f0"
          TextColor="#555555"
          SubheadingColor="#FB6738"
          ImgSrc={Ellipse3}
          TextContent="Unlock the full potential of your existing systems with our seamless integration solutions."
          Subheading="Integration Solution"
        />
      </div>
      <div className="divisor"></div>
    </div>
  );
}
