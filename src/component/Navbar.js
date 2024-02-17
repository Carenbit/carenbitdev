import React from "react";
import "./NavBar.css";
import carenbit from "../assets/carenbit.png"
import Hamburger from "../assets/hamburger.svg"
import Cross from "../assets/cross.svg"

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <nav>
            <ul className="Nav-items">
              <li><img src={carenbit} alt="logo image" ></img></li>
              <li><a className="Nav-link">Home</a></li>
              <li><a className="Nav-link">About Us</a></li>
              <li><a className="Nav-link">Services</a></li>
              <li><a className="Nav-link">Products</a></li>
              <li><a className="Nav-link">Solutions</a></li>
              <li><a className="Nav-link">Contact Us</a></li>
              <li><button className="Hamburger" onClick={function(){
                const sidebar=document.querySelector(".side-bar")
                sidebar.style.display="flex"
              }}><img src={Hamburger} alt="hamburger" style={{width:"30px" ,height:"30px"}}></img></button></li>

            </ul>
            <ul className="side-bar">
              <li><button className="Cross" onClick={function(){
                const sidebar=document.querySelector(".side-bar")
                sidebar.style.display="none"
              }}><img src={Cross} alt="cross button"></img></button></li>
              <li><a >Home</a></li>
              <li><a >About Us</a></li>
              <li><a >Services</a></li>
              <li><a >Products</a></li>
              <li><a >Solutions</a></li>
              <li><a>Contact Us</a></li>
              
            </ul>
     
        </nav>

      </div>
    </>
  );
}
