import React from 'react';
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/email.svg'
import './style/Header.css'
import './style/Contacto.css'
function Contacto (){
    return(
        <div className="Contacto">
            <h2>Thanks for your time!</h2>
            <p>If you´d like to talk, you can DM me on LinkedIn or Twitter! Also my mailbox is always open!</p>
            <div className="redes">
                <div>
                    <a href="https://twitter.com/soyClaraMaria?s=08" target='_blank'><img src={twitter} alt="Icono Twitter"  className="header_twitter"/></a>
                    <a href="https://www.linkedin.com/in/clara-di-sorbo-a824b71b3/" target='_blank'><img src={linkedin} alt="Icono Linkedin"  className="header_linkedin"/></a>
                </div>
                <div className="email">
                    <a href="mailto:claradisorbo@gmail.com"><img src={mail} alt=""  className="header_mail"/>claradisorbo@gmail.com</a>
                </div>
            </div>
            <p >La Plata, Buenos Aires, Argentina</p>
        </div>
    )
}
export default Contacto