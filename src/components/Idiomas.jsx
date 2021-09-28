import React from 'react'
import Idioma from './Idioma.jsx';
import './style/Resume.css'

function Idiomas(props){
    return(
        <div className="seccionIdiomas">
            <h1 className="subtitulo">Languages</h1>
            <div className="idioma">
                <Idioma idioma="Spanish" />
                <Idioma idioma="English" />
                <Idioma idioma="Italian" />
            </div>
        </div>
    )
}
export default Idiomas;