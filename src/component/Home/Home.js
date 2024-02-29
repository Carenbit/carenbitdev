import React from "react";
import "./Home.css";
import { MdEmail } from "react-icons/md";
import frameHome from "../../assets/frameHome.png";

const Home = () => {
  return (
    <>
      <div id="homePage">
        <h1 className="mainHeading grid-item">
          Simplify Your Product Journey with Carenbit
        </h1>
        <div className="grid-item">
          <p className="subTitle ">
            Explore Carenbit's PLM Solutions for Enhanced Product Lifecycle
            Management.
          </p>
          <a
            href="mailto:carenbit.tech@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <MdEmail className="mailIcon m-1" />
              Quick Enquiry
            </button>
          </a>
        </div>
        <img
          src={frameHome}
          alt="..."
          className="plmImage img-fluid grid-item"
        />
      </div>
    </>
  );
};

export default Home;
