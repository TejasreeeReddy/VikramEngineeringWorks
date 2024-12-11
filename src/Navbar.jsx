import React from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Connect from "./Connect";
import Copyrights from "./Copyrights";

const Navbar = () => {

 

  return (
    <div>
      <div className="navbar-container fixed-top">
        <header className="navbar-header">
          <img src="./logo2.jpg" className="logo"></img>{" "}
          <h1 className="navbar-title">
            VIKRAM <span className="prefix">Engineering Works</span>
          </h1>
        
        </header>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item navitem">
              <a href="#">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item navitem">
              <a href="#">
                <Link to="/about">About</Link>
              </a>
            </li>
            <li className="nav-item navitem">
              <a href="#">
                <Link to="/services">Services</Link>
              </a>
            </li>
            <li className="nav-item navitem">
              <a href="#">
                <Link to="/contact">Contact</Link>
              </a>
            </li>
            
          </ul>
        </nav>
      </div>


      <div id="carouselExampleCaptions" className="carousel slide sticky">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./bg4.webp" className="d-block w-100" alt="pic1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Innovative Engineering Solutions for Every Industry</h5>
              <p>
                At Vikram Engineering Works, we specialize in providing
                innovative engineering solutions tailored to meet the unique
                needs of every industry. Our team is dedicated to developing
                cutting-edge solutions that drive efficiency and success,
                ensuring we stay ahead in the ever-evolving engineering
                landscape.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./bg3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Custom Solutions for Complex Engineering Challenges</h5>
              <p>
                When faced with complex engineering challenges, Vikram
                Engineering Works excels in providing custom-designed solutions
                that meet the most demanding requirements. Our expert team works
                closely with clients to ensure every project is executed with
                precision, delivering outstanding results and unmatched value.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./bg6.webp" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Delivering Quality Products with Cutting-Edge Technology</h5>
              <p>
                Vikram Engineering Works is committed to delivering high-quality
                products that incorporate the latest advancements in technology.
                We take pride in our state-of-the-art manufacturing processes,
                which allow us to provide solutions that are both reliable and
                future-proof for businesses across diverse sectors.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <Connect />
      <div className="copy">
      <marquee>
        <Copyrights />
      </marquee>
      </div>
    </div>
  );
};

export default Navbar; 