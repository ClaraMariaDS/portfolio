import React from 'react';
import './style/Proyectos.css'
import imagen1 from '../images/cuidandoMeDesign.png'
import imagen2 from '../images/appDeComprasDesign.png'
import imagen3 from '../images/soyclaramariadesign.png'
import imagen5 from '../images/porfolio.png'
import imagen10 from '../images/porfolio.png'
import ProyectoRight from './ProyectoRight.jsx'
import ProyectoLeft from './ProyectoLeft.jsx'
import imagen6 from '../images/atelierDesign.png'
import imagen7 from '../images/CatalogoDesign.png'

import verdeAgua from '../images/verdeAgua.png'
import rosaOscuro from '../images/rosaOscuro.png'

function Proyectos (props){
    return(
        <section className="proyectos ">
            <h1 className="Título">Projects</h1>
            <div className="proyecto">
                <ProyectoRight 
                fondo={verdeAgua}
                classFondo="fondoAtelier"
                class="Proyecto-estructura Atelier"
                deskimg= {imagen6}
                titulo="Atelier Latina"
                skill1= "- HTML"
                skill2= "- CSS"
                skill3= "- Web Design"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/AtelierLatina"}}
                projectLink={{pathname:"https://atelierlatina-1a817.web.app/"}}
                primerDescripcion={<>My first Web Page. It´s the result of the combination <br /> of all my passions: Programming, Communication, <br/>Editing and Design</>} 
                segundaDescripcion={<>It´s the final product of my thesis as a journalist.<br /> Both articles and code <br />where made with Florencia Di Sorbo, <br />who's a restorer and programmer too <br/>I also filmed and edited the video in this article</>}
                />
                <ProyectoLeft  
                fondo={rosaOscuro}
                classFondo="fondoSoyCM"
                class="Proyecto-estructura SoyCM"
                deskimg= {imagen3}
                titulo="Soy Clara María"
                skill1= "- HTML"
                skill2= "- CSS"
                skill3= "- Web Design"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/AtelierLatina"}}
                projectLink={{pathname:"https://soyclaramaria.web.app/"}}
                primerDescripcion={<>My Freelancer service page, offering web design and development services, as well as  <br/>community management for entrepreneurs and small business.</>}
                segundaDescripcion={<>In this static page,<br /> I focused on developing my design skills.</>}
                />
                <ProyectoRight 
                class="Proyecto-estructura Catalogo"
                fondo={verdeAgua}
                classFondo="fondoCatalogo"
                deskimg= {imagen7}
                titulo="Catálogo de productos"
                skill1= "- HTML"
                skill2= "- CSS"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/catalogodeproductosHTML"}}
                projectLink={{pathname:"https://productosamoblamientos.web.app/"}}
                primerDescripcion={<>A product catalog for one of my first clients</>}
                segundaDescripcion={<>Giving my first steps <br />as a freelancer developer</>}
                />
                <ProyectoLeft  
                 fondo={rosaOscuro}
                 classFondo="fondoCompras"
                class="Proyecto-estructura Compras"
                deskimg= {imagen2}
                titulo="App de compras"
                skill1= "- HTML"
                skill2= "- JavaScript"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/appDeCompras"}}
                projectLink={{pathname:"https://appdecompras-956e5.web.app/"}}
                primerDescripcion={<>My first WebApp. <br/>I made it as an exercise for the SummerHack course.<br/>It aims to generate a shopping list.</>}
                segundaDescripcion={<>I made an iteration using<br /> the local storage functionality</>}
                />
                <ProyectoRight 
                fondo={verdeAgua}
                classFondo="fondoCuidandoMe" 
                class="Proyecto-estructura CuidandoMe"
                deskimg= {imagen1}
                titulo="CuidandoMe"
                skill1= "- HTML"
                skill2= "- JavaScript"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/cuidandoMe"}}
                projectLink={{pathname:"https://tucontroldiario.web.app/"}}
                primerDescripcion={<>A WebApp to control daily pressure,<br /> glucose and medication intake </>}
                segundaDescripcion={<>Beginning to create usable products <br />for the community</>}
                />
                
                <ProyectoLeft 
                 fondo={rosaOscuro}
                 classFondo="fondoPorfolio"
                class="Proyecto-estructura Porfolio"
                deskimg= {imagen6}
                resimg= {imagen10}
                titulo="My Porfolio"
                skill1= "- HTML"
                skill2= "- React JS"
                skill3= "- Web Design"
                codeLink={{pathname:"https://github.com/ClaraMariaDS/AtelierLatina"}}
                projectLink={{pathname:""}}
                primerDescripcion="My first project using React JS,"
                segundaDescripcion="It represents a milestone for me!"
                />
            </div>
        </section>
    );
}
export default Proyectos;