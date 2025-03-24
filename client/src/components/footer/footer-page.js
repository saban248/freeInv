import React from "react";
import "./style.css"; 
import { WebGeneralInforamtion } from "../../logic/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-brand">
          <h1>{WebGeneralInforamtion.COMPANY_NAME_HE}</h1>
          <p>&copy; {new Date().getFullYear()} {WebGeneralInforamtion.COMPANY_NAME_EN}. All rights reserved.</p>
          <p>Written and developed</p>
          {Object.entries(WebGeneralInforamtion.DEVELOPERS).map(([key, genius]) => (
            <a key={key} href={`mailto:${genius.mail}`} target="_blank" rel="noopener noreferrer" style={{color:"rgb(255, 228, 147)"}}>
              {genius.name} 
            </a> 
          ))}

        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h2>שתפו אותנו!</h2>
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faInstagram} style={{color:"pink"}}/>
               <a href="/">אינסטגרם</a></li>
            <li>
              <FontAwesomeIcon className="icon" icon={faWhatsapp} style={{color:"#a3ffa8"}}/>
              <a href="/">וואצאפ</a>
              </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faLink}/>
              <a href="/">העתק קישור</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;