import React from 'react';
import {Link} from 'react-router-dom';
import { useContexto } from '../Context/Contexto';

const MenuResponsive = ({abrirCerrar}) => {
    const {user, setUser} = useContexto();
    return(
        <div className='grid grid-rows-3 text-center items-center bg-purple-300'>
            <Link className='p-4' to='/inicio'>
                Inicio
            </Link>
            <Link className='p-4' to='/categorias'>
                Categorias
            </Link>
            <Link className='p-4' to='/estadisticas'>
                Estadisticas
            </Link>{
                user &&
            <Link className='p-4' to='/perfil'>
                Perfil
            </Link>}
            {user === "admin@gmail.com" && <Link to = '/admin' className='p-4'> Admin</Link>}
            {!user &&
                <Link className='p-4' to='/login'>
                    Login/Logout
                </Link>
            }
        </div>
    );
}

export default MenuResponsive;