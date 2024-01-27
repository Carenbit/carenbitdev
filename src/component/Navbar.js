import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md">
          <a className="navbar-brand" href="#">
            <img className="img-fluid" src="/images/logo.png" alt="Logo" />
          </a>
          {/* <div className="con"> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </div>
    </>
  );
}
