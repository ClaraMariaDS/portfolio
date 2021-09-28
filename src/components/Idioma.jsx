import React from 'react'
import './style/Resume.css'
import ImgIdioma from '../images/traducir.svg'
function Idioma(props){
    return(
        <div className="Idioma-texto">
            <img src={ImgIdioma} alt="" className="imgIdioma"/>
            <h3>{props.idioma}</h3>
        </div>
    )
}
export default Idioma;