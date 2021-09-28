import React from 'react'
import './style/Resume.css'
import Experiencia from './Experiencia';

function Experiencias(props){
    return(
        <div className="seccionExperiencia">
            <h1 className="subtitulo">Experience</h1>
            <Experiencia
            año="2021"
            descripcion="Digital Agency"
            lugar="CS Comunicaciones"
            rol="Founder / Community Manager"
            />
            <Experiencia
            año="2019"
            descripcion="Start Up"
            lugar="MUTUA"
            rol="In charge of the communication area / Creation and implementation of communication campaing"
            />
             <Experiencia
            año="2018"
            descripcion="Radio Show"
            lugar="Latinoamérica Rebelde"
            rol="Radio producer"
            />
        </div>
    )
}
export default Experiencias;