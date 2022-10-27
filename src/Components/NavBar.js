import React from 'react';
import {Link} from "react-router-dom";
const NavBar = ({abrirCerrar}) => {
    return(
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm'>
            <Link to="/" classname= "pl-8">
                Logo
            </Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={abrirCerrar}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h8m-8 6h16'
                    />
                </svg>
            </div>
            <div className='pr-8 hidden md:block'>
                <Link to='/inicio' className='p-4'>
                    Inicio
                </Link>
                <Link to='/categorias' className='p-4'>
                    Categorias
                </Link>
                <Link to='/estadisticas' className='p-4'>
                    Estadisticas
                </Link>
                <Link to='/perfil' className='p-4'>
                    Perfil
                </Link>
            </div>
        </nav>
    );
}


export default NavBar;