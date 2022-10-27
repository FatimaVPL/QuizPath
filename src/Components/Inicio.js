import React, {useState} from 'react';
import MenuResponsive from './MenuResponsive';
import NavBar from './NavBar';
const Inicio = () =>{
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