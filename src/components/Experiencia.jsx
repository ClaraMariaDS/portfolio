import React from 'react'
import './style/Resume.css'

function Experiencia(props){
    return(
            <div className="experiencia">
                <div>
                    <p className="añoExp">{props.año}</p>
                </div>
                <hr />
                <div className="infoExperiencia">
                    <p className="lugarExp">"{props.lugar}"</p>
                    <p className="descExp">{props.descripcion}</p>
                    <p className="rolExp">{props.rol}</p>
                </div>
            </div>
    )
}
export default Experiencia;