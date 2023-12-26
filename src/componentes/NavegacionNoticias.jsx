import React from "react";
import '../estilos/NavegacionNoticias.css'

function NavegacionNoticias ({noticiasPorPagina, currentNoticias, setCurrentNoticias, totalNoticias}) {

    const numerosPagina = []

    for (let i = 1; i  <= Math.ceil(totalNoticias / noticiasPorPagina); i++){
        numerosPagina.push(i)
    }

    const anteriorPagina = () => {
        setCurrentNoticias(currentNoticias - 1)
    }

    const siguientePagina = () => {
        setCurrentNoticias(currentNoticias + 1)
    }

    const paginaEspecifica =(n) => {
        setCurrentNoticias(n)
    }

    return (
        <nav  aria-label="..." className="navegacion-noticias">
            <ul className="pagination">

                <li className="page-item">
                    <a className={`page-link ${currentNoticias === 1 ? 'disabled' : ''}`} href="#" onClick={anteriorPagina}>Anterior</a>
                </li>

                {numerosPagina.map(paginaNo => (
                    <li key={paginaNo} >
                        <a className={`page-link ${paginaNo === currentNoticias ? 'active' : ''}`} href="#" onClick={() => paginaEspecifica(paginaNo)}>{paginaNo}</a>
                    </li>
                ))}

                <li className="page-item">
                    <a className={`page-link ${currentNoticias >= numerosPagina.length ? 'disabled' : ''}`} href="#" onClick={siguientePagina}>Siguiente</a>
                </li>

            </ul>
        </nav>
    )
}

export default NavegacionNoticias;