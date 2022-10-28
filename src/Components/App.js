import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Categorias from './Categorias';
import Inicio from './Inicio';
import Estadisticas from './Estadisticas'
import Perfil from './Perfil';
import Login from './Login';
import Jugar from './Jugar';
const App = () => {
    return (
        <div className="w-full h-full">
            <Router>
                <Routes>
                    <Route
                        path="/inicio"
                        element={<Inicio/>}
                    />
                    <Route
                        path="/categorias"
                        element={<Categorias/>}
                    />
                    <Route
                        path="/estadisticas"
                        element={<Estadisticas/>}
                    />
                    <Route
                        path="/perfil"
                        element={<Perfil/>}
                    />
                    <Route
                        path="/login"
                        element={<Login/>}
                    />
                    <Route
                        path="/"
                        element={<Inicio/>}
                    />
                    <Route
                        path='/jugar'
                        element={<Jugar/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;