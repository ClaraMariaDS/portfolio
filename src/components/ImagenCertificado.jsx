import React, { useState } from 'react';
import Modal from 'react-modal';
import '../components/UXdesign';
import '../components/style/Certificaciones.css'
import Cerrar from '../images/cancelar.svg'
function ImagenCertificado (props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

return(
    <fragment>
        <button onClick={() => setModalIsOpen(true)} class="botonModal">Certification</button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="cerrarModalBtn">
                    <button onClick={() => setModalIsOpen(false)} className="btnCerrarModal"><img src={Cerrar} alt="" /></button>
                </div>
            <div className="contenedorModal">
                <img src={props.imgModal} alt="" className="imagenModal"/>
            </div>    
                
            
        </Modal>
    </fragment>
);

}
export default ImagenCertificado;