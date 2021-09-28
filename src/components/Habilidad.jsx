import React from 'react'
import './style/Habilidad.css'
function Habilidad (props){
    return(
        <div className="columna-habilidad">
            <h2>{props.titulos}</h2>
                <ul className="habilidad">
                    <div className="contenedorHabilidad">
                        <img src={props.img1} alt="" className="iconoHabilidad" />
                        <li>{props.Habilidad1}</li>
                    </div>
                    <div className="contenedorHabilidad">
                        <img src={props.img2} alt="" className="iconoHabilidad" />
                        <li>{props.Habilidad2}</li>
                    </div>
                    <div className="contenedorHabilidad">
                        <img src={props.img3} alt="" className="iconoHabilidad" />
                        <li>{props.Habilidad3}</li>
                    </div>
                    <div className="contenedorHabilidad">
                        <img src={props.img4} alt="" className="iconoHabilidad" />
                        <li>{props.Habilidad4}</li>
                    </div>
                    <div className="contenedorHabilidad">
                        <img src={props.img5} alt="" className="iconoHabilidad" />
                        <li>{props.Habilidad5}</li>
                    </div>
                </ul>
        </div>
)
}
export default Habilidad;