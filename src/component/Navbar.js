import React from "react";
import "./NavBar.css";

export default function Navbar () {
  return (
  <>
      <div>
        <nav
          className="navbar navbar-expand-lg" >
          <a className="navbar-brand" href="#">
            <img className="logo" src="/images/logo.jpg" alt="Logo" />
          </a>
          <div className="container-fluid">
            <ul className="navbar-nav ms-auto">
              <li>
                <a
                  className="navBtn"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  className="navBtn"
                  href="#"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
    )
};


