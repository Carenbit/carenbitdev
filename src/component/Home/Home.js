import React from "react";
import "./Home.css";
import frameHome from "../../assets/frameHome.png";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div id="homePage">
      <h1 class="mainHeading">
        <small>
          Simplify Your Product<br></br> Journey with Carenbit
        </small>
      </h1>
      <div>
        <p>
          Explore Carenbit's PLM Solutions for <br></br>Enhanced Product
          Lifecycle Management.
        </p>
        <button>Quick Inquiry</button>
      </div>
      <img src={frameHome} alt="..." class="plmImage" />
    </div>
  );
};

export default Home;
