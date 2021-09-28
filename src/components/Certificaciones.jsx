import React from 'react'
import Programacion from './Programacion.jsx'
import Diseño from './Diseño.jsx'
import UXdesign from './UXdesign.jsx'
import '../components/style/Certificaciones.css'

function Certificaciones () {
    return (
        <div className="seccionCertificaciones">
            <h1 className="Título">Certifications</h1>
                <div className="certificaciones">
                    <Programacion/>
                    <Diseño/>
                    <UXdesign />
                </div>
        </div>
    );
}
export default Certificaciones;