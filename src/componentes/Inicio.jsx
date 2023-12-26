import React from "react";
import '../estilos/Inicio.css'
import Piepagina from "./Piepagina";

function Inicio () {
    return (
        <div>
            <div className="contenedor-pagina-inicio">
                <h3>Hola soy la pagina de inicio</h3>
            </div>

            <div>
                <Piepagina />
            </div>
        </div>
    )
}

export default Inicio;