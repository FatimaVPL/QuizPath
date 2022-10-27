import React, {useState} from 'react';
import NavBar from './NavBar';
import MenuResponsive from './MenuResponsive';
const Perfil = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        console.log("GG");
        setIsOpen(!isOpen);
    }
    return(
        <div className='h-screen'>
            <NavBar abrirCerrar={toggleOpen}/>
            {isOpen && <MenuResponsive/>}
            <div className='flex flex-col h-full items-center justify-center rounded-lg bg-yellow-300 '>
                <div className='flex items-center justify-center'>
                    <h1 className='p-6'>
                        Perfil
                    </h1>
                </div>
            </div>
        </div>
    );
}
export default Perfil;