import React, {useState, useEffect} from 'react';
import { useContexto } from '../Context/Contexto';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
import { auth } from '../database/firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Perfil = () =>{
    const[isOpen, setIsOpen] = useState(false);
    const {user, setUser} = useContexto();    
    const logout = () =>{
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        const ocultarMenu = () =>{
            if(window.innerWidth > 768 && isOpen){
                setIsOpen(false);
            }            
        }
        window.addEventListener("resize", ocultarMenu);

        return () => {
            window.removeEventListener("resize", ocultarMenu);
        }
    });

    const toggleOpen = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div className='h-screen'>
            <Menu abrirCerrar={toggleOpen}/>
            {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
            <div className='flex flex-col h-full rounded-lg bg-yellow-300 '>
                {user}
                <Link to="/inicio">
                    <button className='text-3xl rounded-lg bg-sky-500 text-white w-fit p-2' onClick={() => logout()}>
                        Logout
                    </button>                    
                </Link>
            </div>
        </div>
    );
}
export default Perfil;