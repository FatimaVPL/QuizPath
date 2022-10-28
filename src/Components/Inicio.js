import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
const Inicio = () =>{
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
            <Menu/>
            {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
            <div className='flex flex-col h-full rounded-lg bg-yellow-300 '>
                <div className='flex items-center justify-center'>
                    <h1 className='p-6'>
                        QuizPath
                        
                    </h1>
                </div>
                <div className='flex items-center justify-center'>
                    <h2>
                        ¿Te gustan los retos y aprender más cada día?
                        <br></br>
                        Prueba tus conocimientos y aprende más con QuizPath
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Inicio;