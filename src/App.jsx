import React from 'react';
import '../src/components/style/style.css'
import Header from './components/Header.jsx'
import Introduccion from './components/Introduccion.jsx'
import Proyectos from './components/Proyectos.jsx'
import Habilidades from './components/Habilidades.jsx'
import Certificaciones from './components/Certificaciones.jsx'
import Resume from './components/Resume'
import Contacto from './components/Contacto.jsx';
import {BrowserRouter as Router} from 'react-router-dom'
export function App () {
    return (
        <Router>
            <Header />
            <Introduccion />
            <Proyectos />
            <Habilidades/> 
            <Certificaciones/>
            <Resume/>
            <Contacto />
        </Router>
    );
}

export default App;