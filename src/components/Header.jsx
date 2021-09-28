import React from "react";
import './style/Header.css'
import logo from '../images/logo.png'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/email.svg'
const Header = () => {
  return (
    <div className="Header">
    <img src={logo} alt="logo" className="header_logo"/>
    <nav>
        <a href="https://twitter.com/soyClaraMaria?s=08" target='_blank'><img src={twitter} alt=""  className="header_twitter"/></a>
        <a href="https://www.linkedin.com/in/clara-di-sorbo-a824b71b3/" target='_blank'><img src={linkedin} alt=""  className="header_linkedin"/></a>
        <a href="mailto:claradisorbo@gmail.com" target='_blank'><img src={mail} alt=""  className="header_mail"/></a>
    </nav>    
  </div>

  );
}
export default Header;
