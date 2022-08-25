import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Inicio from '../Components/Inicio'
import Estadisticas from '../Components/Estadisticas'
import { Error } from '../Components/Error'
import { Menu } from '../Components/Menu'

export const RouterPrincipal = () => {
    return (
        <BrowserRouter className='menu'>
            <header>
                    <nav>
                        <ul>
                        <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/inicio">Inicio</NavLink>
                        &nbsp;
                        <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/estadisticas">Estadisticas</NavLink>
                        &nbsp;
                        <NavLink className={({ isActive }) => isActive ? "activado" : ""} to="/menu">Menú</NavLink>
                    </ul>
                    </nav>
            </header>
            <section className='content'>
                <Routes>
                    <Route path='/inicio' element={<Inicio></Inicio>} />
                    <Route path='/estadisticas' element={<Estadisticas></Estadisticas>} />
                    <Route path='/menu' element={<Menu></Menu>} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}