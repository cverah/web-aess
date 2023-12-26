import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../estilos/Navegacion.css';


function Navegacion () {
    return (
        <div>
            <nav className='contenedor-navegacion'>

                <Link to="/">Inicio</Link>
                <Link to="/PaginaNoticias">Noticias</Link>
                <Link to="">Articulos</Link>
                <Link to="">Videos</Link>
                <Link to="">Contactos</Link>
            
            </nav>
            <Outlet />
        </div>
    )
}

export default Navegacion;