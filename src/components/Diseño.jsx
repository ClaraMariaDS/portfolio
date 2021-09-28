import React from 'react'
import Certificado from './Certificado.jsx'
import IntroAlDiseño from '../images/CertInroAlDiseño.png'
import diseñoComposicion from '../images/CertComposicion.png'
import diseñoTipografía from '../images/CertTipografia.png'
import ImagenCertificado  from '../components/ImagenCertificado.jsx'
import './style/Certificaciones.css'
function Diseño (props){
    return(
        <div>
            <h2 className="tituloCertificacion">Design</h2>
            <div>
                <div className="ContenedorModalCert">
                <Certificado
                img={IntroAlDiseño}
                titulo="Introduction to graphic design"
                academia= "LinkedIn"
                fecha= "24/11/2020"
                />
                <ImagenCertificado
                imgModal={IntroAlDiseño}/>
                </div>
                <div className="ContenedorModalCert">
                <Certificado
                img={diseñoTipografía}
                titulo="Design fundamentals: Typography"
                academia= "LinkedIn"
                fecha= "27/12/2020"/>
                <ImagenCertificado
                imgModal={diseñoTipografía}/>
                </div>
                <div className="ContenedorModalCert">
                <Certificado
                img={diseñoComposicion}
                titulo="Design fundamentals: Composition"
                academia= "LinkedIn"
                fecha= "16/12/2020"/>
                <ImagenCertificado
                imgModal={diseñoComposicion}/>
                </div>
            </div>
        </div>
    )
}
export default Diseño;