import React, {useState} from "react";
import Noticieros from './Noticieros.jsx'
import NavegacionNoticias from "./NavegacionNoticias.jsx";
import '../estilos/PaginaNoticias.css'
import Posts from "./Posts.jsx";
import Piepagina from "./Piepagina.jsx";
import { Link } from "react-router-dom";

function PaginaNoticias () {

    const [noticias, setNoticias] = useState(Noticieros)
    const [noticiasPorPagina, setNoticiasPorPagina] = useState(6) 
    const [currentNoticias, setCurrentNoticias] = useState(1)

    const totalNoticias = Noticieros.length 

    const ultimoIndex = currentNoticias * noticiasPorPagina // 1 * 6 = 6
    const primerIndex = ultimoIndex - noticiasPorPagina // 6 - 6 = 0

    return (
        <div>
        <div>
            <Posts 
                postear='¡Explora las maravillas del cosmos! ¡Preparate para un viaje cósmico!'
            />
        </div>

        <main className='contenedor-secundario-noticias'>

            {noticias.map(notici => (
            <section key={notici.id} className='contenedor-noticias'>

                <figure >
                    <h2>{notici.titulo}</h2>
                    <img 
                        className='imagen-noticia'
                        src={require(`../imagenes/${notici.imagen}.jpg`)} 
                        alt='Foto de noticia'
                    />
                </figure>

                <div className='contenedor-informacion-noticia'>
                    <p>{notici.noticia}</p>
                    <Link to="">Leer más</Link>
                    {/*<a href="#">Leer más</a>*/}
                </div>
                
            </section>
            )).slice(primerIndex, ultimoIndex)}
            
        </main>
        <div className="navegacion-noticias">
            <NavegacionNoticias 
                noticiasPorPagina={noticiasPorPagina} 
                currentNoticias={currentNoticias} 
                setCurrentNoticias={setCurrentNoticias} 
                totalNoticias={totalNoticias}
            />
        </div>
        <div>
            <Piepagina />
        </div>
        </div>
    ) 
}

export default PaginaNoticias;