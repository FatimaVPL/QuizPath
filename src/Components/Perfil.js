import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
const Perfil = () =>{
    const[isOpen, setIsOpen] = useState(false);
    
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
                Perfil
            </div>
        </div>
    );
}
export default Perfil;