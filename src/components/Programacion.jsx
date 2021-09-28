import React from 'react'
import Certificado from './Certificado.jsx'
import SummerHack from '../images/CertificadoEscuelaDevRock.png'
import FreeCodeCamp from '../images/CertFreeCodeCamp.png'
import ImagenCertificado  from '../components/ImagenCertificado.jsx'

import './style/Certificaciones.css'
function Programacion (props){
    return(
        <div>
            <h2 className="tituloCertificacion">Programming</h2>
            <div>
                <div className="ContenedorModalCert"> 
                <Certificado
                img={SummerHack}
                titulo="Summer Hack"
                academia= "Escuela Dev Rock"
                fecha= "18/5/2021"/>
                <ImagenCertificado
                imgModal={SummerHack}/>
                </div>
                <div className="ContenedorModalCert">
                <Certificado
                img={FreeCodeCamp}
                titulo="Responsive Web Design"
                academia= "FreeCodeCamp"
                fecha= "27/2/2021"/>
                <ImagenCertificado
                imgModal={FreeCodeCamp}/>
                </div>
            </div>
        </div>
    )
}
export default Programacion;