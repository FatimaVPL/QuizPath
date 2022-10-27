import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Inicio from '../Components/Inicio'
import Estadisticas from '../Components/Estadisticas'
import { Error } from '../Components/Error'
import { Categorias } from  '../Components/Categorias'
import Perfil from '../Components/Perfil'
import '../CSS/Router.css'
import Login from '../Components/Login'
export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <header>
                    <div className='ui menu'>
                        <NavLink className={({ isActive }) => isActive ? "active  blue item" : "blue item"} to="/inicio">Inicio</NavLink>
                        &nbsp;
                        <NavLink className={({ isActive }) => isActive ? "active blue item" : "blue item"} to="/categorias">Categorias</NavLink>
                        &nbsp;
                        <NavLink className={({ isActive }) => isActive ? "active blue item" : "blue item"} to="/estadisticas">Estadisticas</NavLink>
                        &nbsp;
                        <NavLink className={({ isActive }) => isActive ? "active blue item" : "blue item"} to="/perfil">Perfil</NavLink>
                        <div className='right menu back'>
                            <NavLink className={({ isActive }) => isActive ? "active blue item" : "blue item"} to="/login"> Login</NavLink>
                        </div>
                    </div>
                    
            </header>
            <section className='content'>
                <Routes>
                    <Route path='/inicio' element={<Inicio/>} />
                    <Route path='/estadisticas' element={<Estadisticas/>} />
                    <Route path='/categorias' element={<Categorias/>} />
                    <Route path='/perfil' element={<Perfil/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}