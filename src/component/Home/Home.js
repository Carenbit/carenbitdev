import React from "react";
import "./Home.css";
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
        <button>Quick Inquiry</button>
      </div>
      <img src={frameHome} alt="..." class="plmImage img-fluid" />
    </div>
  );
};

export default Home;
