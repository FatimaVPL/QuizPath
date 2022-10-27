import React from 'react';
import Categorias from './Categorias';
import Estadisticas from './Estadisticas';
import Inicio from './Inicio';
import Login from './Login';
import Perfil from './Perfil';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
                        path="/perfil"
                        element={<Perfil/>}
                    />
                    <Route
                        path="/estadisticas"
                        element={<Estadisticas/>}
                    />
                    <Route
                        path="/login"
                        element={<Login/>}
                    />
                    <Route path="/" element={<Inicio/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;