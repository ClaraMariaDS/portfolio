import React from 'react'
import './style/Habilidades.css'
import Habilidad from './Habilidad.jsx'
import html from '../images/html.png'
import css from '../images/css3.png'
import firebase from '../images/firebase.png'
import javascript from '../images/js.png'
import react from '../images/react.png'
import premiere from '../images/premiere.png'
import photoshop from '../images/photoshop.png'
import illustrator from '../images/illustrator.png'
import canva from '../images/canva.png'
function Habilidades (props){
    return (
        <div className="seccionHabilidades">
            <h1 className="Título">Skills</h1>
            <div className="hablilidades">
                <Habilidad 
                titulos="Programming"
                Habilidad1="HTML5"
                img1={html}
                Habilidad2= "CSS3"
                img2={css}
                Habilidad3= "Firebase"
                img3={firebase}
                Habilidad4= "JavaScript ES6"
                img4={javascript}
                Habilidad5= "React Js"
                img5={react}/>
                <Habilidad 
                titulos="Design"
                Habilidad1="Adobe Premiere"
                img1={premiere}
                Habilidad2= "Adobe Photoshop"
                img2={photoshop}
                Habilidad3= "Adobe Illustrator"
                img3={illustrator}
                Habilidad4= "Canva"
                img4={canva}/>
            </div>
        </div>
    );
}
export default Habilidades