import React from "react";
import "./solution.css";
import solution1 from "../../assets/solution1.svg";
import solution2 from "../../assets/solution2.svg";
import solution3 from "../../assets/solution3.svg";
export default function solutions() {
  return (
    <div className="Solution-Section">
      <div className="Sheading">Our Solutions</div>
      <div className="solution-box">
        <div className="solution-container">
          <div className="solution1">
            <img className="Solution-img" src={solution1} alt="image"></img>
            <div className="subheading">Seamless Integration</div>
            <div className="Text">
              Elevate your product development lifecycle with our advanced
              solutions, seamlessly integrating IoT, AI, and cutting-edge
              technologies for unparalleled efficiency.
            </div>
          </div>
          <div className="solution1">
            <img className="Solution-img" src={solution2} alt="image"></img>
            <div className="subheading">Agile Solutions</div>
            <div className="Text">
              Drive innovation and agility in your product lifecycle management
              with our transformative solutions, harnessing the power of AI, IoT
              integration, and data analytics.
            </div>
          </div>
          <div className="solution1">
            <img className="Solution-img" src={solution3} alt="image"></img>
            <div className="subheading">AI-Powered Excellence</div>
            <div className="Text">
              Experience engineering excellence like never before with our
              solutions, leveraging AI and IoT integration to optimize every
              stage of your product lifecycle.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
