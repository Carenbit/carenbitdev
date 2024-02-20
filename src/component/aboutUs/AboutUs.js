import React from "react";
import "./AboutUs.css";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";

const AboutUs = (props) => {
  const { innerwidth } = props;

  return (
    <div id="aboutUsPage">
      <div className="aboutTitle">
        <h1 className="welcomeMessage">Welcome To Carenbit</h1>
        {innerwidth > 464 ? (
          <p className="description my-4 ">
            Carenbit Technology Services, founded in 2022, is a pioneering
            startup based in Pune. We specialize in providing expert solutions
            in Teamcenter PLM, aiming to unlock the full potential of businesses
            across diverse industries.
          </p>
        ) : (
          <p className="description my-4 ">
            At Carenbit, we're driven by a singular passion: to empower
            businesses with cutting-edge Product Lifecycle Management (PLM)
            solutions that redefine excellence.
          </p>
        )}
      </div>
      <div className="blockCard d-flex align-content-center justify-content-center">
        <img src={vision} alt="..." class="cardImage bg-white rounded-3 p-3" />
        <div className="statements px-1">
          <h2>Vision</h2>
          <p>
            Our vision is to pioneer the Teamcenter PLM landscape, providing
            clients with high-quality, innovative, and cost-effective solutions,
            ultimately paving the path for their triumph.
          </p>
        </div>
      </div>
      <div className="blockCard reverse">
        <img
          src={mission}
          alt="..."
          class="cardImage img-fluid  bg-white rounded-3 p-3"
        />
        <div className="statements">
          <h2>Mission</h2>
          <p>
            At Carenbit, we propel our clients to unparalleled success in
            product development by delivering tailor-made and comprehensive
            Teamcenter PLM solutions, empowering businesses to thrive and excel
            in the dynamic landscape of today’s evolving market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
