import React from "react";
import './style/Introduccion.css'
import ilustracion from '../images/ilustracionbyn.png'
const Introduccion = () => {
    return (
        <section className="introduccion">
            <img src={ilustracion} alt="" className="introduccion_ilustracion"/>
            <div className="textoIntro">
                <h1>Hi! I´m Clara María Di Sorbo</h1>
                <p>I´m a Software Developer and <br/> I have a degree in Social Communication (Journalism orientation)</p> 
                <p> I belive that Communication can´t be thinked out of the new technologies, that was the thought <br/>
                that made me discover this new world that I´m passionate about now.</p>
                <p> I´m looking forward to give the next step on my journey in tech by becoming part of a great team and contribute to the creation of amazing products.</p>
            </div>
        </section>
    )
}
export default Introduccion;