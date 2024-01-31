import React from "react";
import "./AboutUs.css";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";

const AboutUs = () => {
  return (
    <div id="aboutUsPage">
      <div className="aboutTitle">
        <h1>Welcome To Carenbit</h1>
        <p>
          Carenbit Technology Services, founded in 2022, is a pioneering startup
          based in Pune's tech hub, Wakad. We specialize in providing expert
          solutions in Teamcenter PLM, aiming to unlock the full potential of
          businesses across diverse industries.
        </p>
      </div>
      <div className="visionCard">
        <img src={vision} alt="..." />
        <div>
          <h2>Vision</h2>
          <p>
            Our vision is to pioneer the Teamcenter PLM landscape, providing
            clients with high-quality, innovative, and cost-effective solutions,
            ultimately paving the path for their triumph.
          </p>
        </div>
      </div>
      <div className="missionCard">
        <img src={mission} alt="..." />
        <div>
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
