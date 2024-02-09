import React from 'react'
import PropTypes from 'prop-types'
import { useState } from "react";
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';
import logo from "../component/images/Deepan-logo.png";

function Home(props) {

  const[theme,setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    theme === "light" ? document.body.classList.add("light-mode") : document.body.classList.remove("light-mode");
  }

  return (
    <div>
    <div className='logo'>
      <img src={logo} alt="TDC"/>
    </div>
    <div onClick={toggleTheme} className="toggleIcon">
      {theme === "dark"? <ToggleOffTwoToneIcon/> : <ToggleOnTwoToneIcon/>}
   </div>
   </div>
  )
}

Home.propTypes = {

}

export default Home

