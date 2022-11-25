import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Categorias from './Categorias';
import Inicio from './Inicio';
import Estadisticas from './Estadisticas'
import Perfil from './Perfil';
import Login from './Login';
import Jugar from './Jugar';
import Admin from './Admin';
import {ContextoProvider} from '../Context/Contexto';
const App = () => {
    return (
        <div className="w-full h-full">
            <ContextoProvider>
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
                        <Route
                            path='/admin'
                            element={<Admin/>}
                        />
                    </Routes>
                </Router>            
            </ContextoProvider>

        </div>
    );
}

export default App;