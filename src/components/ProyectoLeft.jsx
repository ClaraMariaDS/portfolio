import React from 'react';
import './style/Proyecto.css'
import {Link} from 'react-router-dom'

class Proyecto extends React.Component{
    constructor(){
        super()
        this.state={
            mostrar:false
        }
    }
    ampliar()
    {
        this.setState({
            mostrar:!this.state.mostrar
        })
    }
    
    render(props){
        return(
            <div className={this.props.class}>
                <img src={this.props.deskimg} alt="Imagen del proyecto" className="proyecto_imagen"/>
                <div className="info_proyecto">
                <h3>{this.props.titulo}</h3>
                <Link to={this.props.projectLink} target="_blank"><button className="buttonLeft">Project</button></Link>
                <Link to={this.props.codeLink} target="_blank"><button className="buttonLeft">Code</button></Link>
                <ul className="skills">
                    <li>{this.props.skill1}</li>
                    <li>{this.props.skill2}</li>
                    <li>{this.props.skill3}</li>
                    <li>{this.props.skill4}</li>
                </ul>
                <div>
                    <p>{this.props.primerDescripcion}</p>
                    <button onClick={()=>this.ampliar()} className="buttonLeft plus">+</button>
                    {
                        this.state.mostrar?
                        <p>{this.props.segundaDescripcion}</p>
                        :null
                    }
                </div>
                </div>
                {/* <img src={this.props.fondo} alt="rosaFondo" className={this.props.classFondo} /> */}
                
            </div>
            
        );
    }

}
export default Proyecto;