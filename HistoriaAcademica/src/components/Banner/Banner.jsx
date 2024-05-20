import React from 'react'
import profilepic from "../../assets/profilepic.png"
import emailLogo from "../../assets/email.png"
import officeIcon from "../../assets/office.png"
import cvIcon from "../../assets/cv.png"
import linkedinIcon from "../../assets/linkedin.png"
import orcidIcon from "../../assets/orcid.png"
import hermesIcon from "../../assets/hermes.png"
import scopusIcon from "../../assets/scopus.png"
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='img-container'>
            <img src={profilepic} />
        </div>
        <div className="info-container">
        <div className="data-container">
          <div className="header-data">
          <h3>Profesor Asociado</h3>
              <h2>Severus Snape</h2>
              <p className='departamento'>Departamento de materiales y minerales</p>
              <p className='facultad'>Facultad de minas, sede Medellín</p>
          </div>
              <div className="contact-info">
                <ul className="u-info">
                  <li className='info-item'><img src={emailLogo} alt="" />ssnape@unal.edu.co</li>
                  <li className='info-item'><img src={officeIcon} alt="" />M4 - 317  </li>
                </ul>
                <ul className='icons-info'>
                  <li><img src={cvIcon} alt="" /></li>
                  <li><img src={linkedinIcon} alt="" /></li>
                  <li><img src={orcidIcon} alt="" /></li>
                  <li><img src={hermesIcon} alt="" /></li>
                  <li><img src={scopusIcon} alt="" /></li>
                </ul>
              </div>
        </div>
        </div>
        
    </div>
  )
}

export default Banner