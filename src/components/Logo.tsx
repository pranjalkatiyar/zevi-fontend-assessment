import React from 'react'
import zevi_logo from "../assets/SVGs/zevi_logo_svg.svg";
import { useNavigate } from 'react-router-dom';
import './Logo.scss'

const Logo = () => {

    const navigate=useNavigate();

    const navigateToHomePage=()=>{
      console.log("first")
      navigate("/");
    }
  

  return <img className="logo_navigate" src={zevi_logo} alt="" onClick={navigateToHomePage} />
}

export default Logo