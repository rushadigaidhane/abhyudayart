import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

import searchlogo from '../assets/searchlogo.png';
import menulogo from '../assets/menulogo.png';
import Hero from "./Hero/Hero";
import { hex } from "framer-motion";

 const  Header = () => {
  return (
    <>
      <div id="parent">
        <header>
          <div style={{ width: "40%" }}>
            <img src="logo2.png" width="150" />
          </div>

          <div id="header-second">
            <Link className="nav-btn" to="/">Home</Link>
            <Link className="nav-btn" to="/About">About</Link>
            <Link className="nav-btn" to="/CLasses">Classes</Link>
            <Link className="nav-btn" to="/Work">Art Work</Link>
            <Link className="nav-btn" to="/Contact">Contact</Link>

            <img src={searchlogo} width="30" />
            <img src={menulogo} width="30" />
          </div>
        </header>

        {/* Place Hero here */}
        <Hero />
      </div>
    </>
  );
};
 export default Header;