import React from 'react'
import "./Header.css"
import LogoUN from "../../assets/logoUN.png"
const Header = () => {
  return (
    <div className="header">
        <img src={LogoUN} />
    </div>
  )
}

export default Header