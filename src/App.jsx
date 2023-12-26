import './App.css';
import Inicio from './componentes/Inicio.jsx'
import Navegacion from './componentes/Navegacion.jsx'
import Posts from './componentes/Posts.jsx'
import PaginaNoticias from './componentes/PaginaNoticias.jsx'
import Piepagina from './componentes/Piepagina.jsx'
import { Routes, Route } from 'react-router-dom';
import NoticiasIndividuales from './componentes/NoticiasIndividuales.jsx';

function App() {
  return (
    <div className='App'>

        <Routes>
            <Route path='/' element={<Navegacion />}>
                <Route path='/' element={<Inicio />} />
                <Route path='PaginaNoticias' element={<PaginaNoticias />} />
                

            </Route>
        </Routes>

    </div>
  );
}

export default App;
