import React from 'react'
import './style/Resume.css'
import Idiomas from './Idiomas.jsx'
import Experiencias from './Experiencias.jsx'

function Resume(props){
    return(
        <div className="seccionResume" >
            <h1 className="Título">Resume</h1>
            <Experiencias/>
            <Idiomas/>
            
        </div>
    )
}
export default Resume;