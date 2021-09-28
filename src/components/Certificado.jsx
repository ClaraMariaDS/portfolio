import React from 'react'
import './style/Certificado.css'

function Certificado (props){
    return(
        <fragment>
        <div className="certificacion">
            <div>
                <img src={props.img} alt="Certificacion" className="Certificado_img"/>
            </div>
            <div className="infoCertificado">
                <p className="TituloCertificado">{props.titulo}</p>
                <p>{props.academia}</p>
                <p>{props.fecha}</p>
            </div>
        </div>
        </fragment>
    )
}
export default Certificado;