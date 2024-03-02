import React from "react";
import "./solution.css";
import solution1 from "../../assets/solution1.svg";
import solution2 from "../../assets/solution2.svg";
import solution3 from "../../assets/solution3.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Solutions() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  const solutionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="Solution-Section">
      <div className="Sheading">Our Solutions</div>
      <div className="solution-box">
        <div className="solution-container">
       
          <motion.div
            className="solution1"
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={solutionVariants}
          >
            <img className="Solution-img" src={solution1} alt=""></img>
            <div className="subheading">Seamless Integration</div>
            <div className="Text">
              Elevate your product development lifecycle with our advanced
              solutions, seamlessly integrating IoT, AI, and cutting-edge
              technologies for unparalleled efficiency.
            </div>
          </motion.div>

        
          <motion.div
            className="solution1"
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={solutionVariants}
          >
            <img className="Solution-img" src={solution2} alt=""></img>
            <div className="subheading">Agile Solutions</div>
            <div className="Text">
              Drive innovation and agility in your product lifecycle management
              with our transformative solutions, harnessing the power of AI, IoT
              integration, and data analytics.
            </div>
          </motion.div>

          
          <motion.div
            className="solution1"
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={solutionVariants}
          >
            <img className="Solution-img" src={solution3} alt=""></img>
            <div className="subheading">AI-Powered Excellence</div>
            <div className="Text">
              Experience engineering excellence like never before with our
              solutions, leveraging AI and IoT integration to optimize every
              stage of your product lifecycle.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

