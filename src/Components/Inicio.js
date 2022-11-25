import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../database/firebase';
import { useContexto } from '../Context/Contexto';
const Inicio = (props) =>{
    function inicio() {
        if (localStorage.getItem('cont') === null) {
            localStorage.setItem('cont',0);
        }
        var cont = JSON.parse(localStorage.getItem('cont'));
        cont++;
        localStorage.setItem('cont', cont);
        console.log(props);
        console.log(props.testvalue)
    }  
     
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

    const cargarCategorias = async (categoria) => {
        await addDoc(collection(db, "categoria"), categoria);
        alert("success");
    }
    const cat = {
        id: 1,
        nombreCategoria: "Matematicas",
        descripcion: "Aprende Matematicas",
        image: "https://drive.google.com/file/d/1sFJbZy2MufgG3aRKumbJESx9Rc_YhewG/view?usp=share_link"
    }
    const q = [
        {
            idPregunta: 1,
            idCategoria: 1,
            pregunta: "Cuanto es 2 + 2?"
        },
        {
            idPregunta: 2,
            idCategoria: 1,
            pregunta: "Cuanto es 2 + 5?"
        }
    ];
    const r = [
        {
            idRespuesta: 1,
            idPregunta: 1,
            respuesta: "4",
            esCorrecta: true
        },
        {
            idRespuesta: 1,
            idPregunta: 2,
            respuesta: "2",
            esCorrecta: false
        },
        {
            idRespuesta: 1,
            idPregunta: 3,
            respuesta: "3",
            esCorrecta: false
        },
        {
            idRespuesta: 1,
            idPregunta: 4,
            respuesta: "5",
            esCorrecta: false
        },
    ];
    const {user, setUser} = useContexto();

    return(
        <div className='h-screen' onLoad={inicio()}>
            <h2>Número de visitantes:  {localStorage.getItem('cont')}</h2>
            <Menu abrirCerrar={toggleOpen}/>
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
                        {props.testvalue}
                    </h2>
                    <button onClick={() => cargarCategorias(cat)}>
                        Cargar        
                    </button>
                </div>
                {console.log(user)}
            </div>
        </div>
    );
}

export default Inicio;