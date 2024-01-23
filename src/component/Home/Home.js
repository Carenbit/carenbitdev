import React from "react";
import frameHome from "../../assets/frameHome.png";

const Home = () => {
  return (
    <div id="homePage">
      <div>
        <h1>Simplify Your Product Journey with Carenbit</h1>
        <p>
          Explore Carenbit's PLM Solutions for Enhanced Product Lifecycle
          Management.
        </p>
        <button>Quick Inquiry</button>
      </div>
      <img src={frameHome} alt="..." />
    </div>
  );
};

export default Home;
