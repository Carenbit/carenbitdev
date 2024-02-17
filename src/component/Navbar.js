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
              <li><a className="Nav-link" href="#home"  >Home</a></li>
              <li><a className="Nav-link" href="#about-us">About Us</a></li>
              <li><a className="Nav-link" href="#services">Services</a></li>
              <li><a className="Nav-link" href="#products">Products</a></li>
              <li><a className="Nav-link" href="#solutions">Solutions</a></li>
              <li><a className="Nav-link" href="#contact-us">Contact Us</a></li>
             

            </ul>
            <ul className="smallNav">
            <li><img  className="logo"src={carenbit} alt="logo image" ></img></li>

            <li><button className="Hamburger" onClick={function(){
                const sidebar=document.querySelector(".side-bar")
                sidebar.style.display="flex"
              }}><img className="hamburger-image"src={Hamburger} alt="hamburger" ></img></button></li>
            </ul>
            
            <ul className="side-bar">
              <li><button className="Cross" onClick={function(){
                const sidebar=document.querySelector(".side-bar")
                sidebar.style.display="none"
              }}><img  className="cross-image"src={Cross} alt="cross button"></img></button></li>
              <li><a className="side-link" href="#home" >Home</a></li>
              <li><a className="side-link"href="#about-us">About Us</a></li>
              <li><a className="side-link"href="#services">Services</a></li>
              <li><a className="side-link"href="#products">Products</a></li>
              <li><a className="side-link"href="#solutions">Solutions</a></li>
              <li><a className="side-link"href="#contact-us">Contact Us</a></li>
              
            </ul>
         
     
        </nav>

      </div>
    </>
  );
}
