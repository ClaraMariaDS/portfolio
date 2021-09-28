import React from 'react'
import Certificado from './Certificado.jsx'
import Coursera1 from '../images/CertCoursera.png'
import './style/Certificaciones.css'
import ImagenCertificado  from '../components/ImagenCertificado.jsx'
function UXdesign (props){
    return(
        <div className="seccionUX" >
            <h2 className="tituloCertificacion">UX design</h2>
            <div className="ContenedorModalCert">
                <Certificado
                img={Coursera1}
                titulo="Foundations of User Experience (UX Design)"
                academia= "Coursera-Google"
                fecha= "13/5/2021"
                />
                <ImagenCertificado
                imgModal={Coursera1}/>
            </div>
        </div>
    )
}
export default UXdesign;