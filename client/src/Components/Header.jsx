import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

import searchlogo from '../assets/searchlogo.png';
import menulogo from '../assets/menulogo.png';


const Header =()=>{
    return(
        <>
        <div id="parent"  >
    <header>
        <div style={{width: "40%"}}>
            <img src="logo2.png" width="150"/>
        </div>

        <div id="header-second">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/CLasses">Classes</Link>
            <Link to="/Work">Art Work</Link>
            <Link to="/Contact">Contact</Link>
         
            <img src={searchlogo.png} width="30"/>
            <img src={menulogo.png} width="30"/>
        </div>
        
    </header>
    </div>
    </>

    );
};
export default Header;