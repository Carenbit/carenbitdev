import React from "react";
import "./Home.css";
import { MdEmail } from "react-icons/md";
import frameHome from "../../assets/frameHome.png";

const Home = () => {
  return (
    <div id="homePage">
      <h1 class="mainHeading">Simplify Your Product Journey with Carenbit</h1>
      <div>
        <p>
          Explore Carenbit's PLM Solutions for Enhanced Product Lifecycle
          Management.
        </p>
        <a href="mailto:companyxyz@gmail.com" target="_blank" rel="noreferrer">
          <button>
            <MdEmail className="mailIcon" />
            Quick Enquiry
          </button>
        </a>
      </div>
      <img src={frameHome} alt="..." class="plmImage img-fluid" />
    </div>
  );
};

export default Home;
