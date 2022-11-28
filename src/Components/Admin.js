import React, {useState, useEffect} from 'react';
import FormPregunta from './Admin/FormPregunta';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
import { db } from '../database/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import TarjetaCRUD from './Admin/TarjetaCRUD';
import FormCategoria from './Admin/FormCategoria';

const Admin = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        const ocultarMenu = () =>{
            //if(window.innerWidth > 768 && isOpen){
                //setIsOpen(false);
            //}            
        }
        window.addEventListener("resize", ocultarMenu);

        
        const collectionRef = collection(db, "Preguntas");
        const q = query(collectionRef, orderBy("Categoria", "desc"));
      
        const unsuscribe = onSnapshot(q, querySnapshot => {
          setPreguntas(
            querySnapshot.docs.map(
              doc => ({
                id: doc.id,
                Categoria: doc.data().Categoria,
                Pregunta: doc.data().Pregunta,
                AC: doc.data().AC,
                WA1: doc.data().WA1,
                WA2: doc.data().WA2,
                WA3: doc.data().WA3
              }
              )
            )
          )
        });
        return unsuscribe;
    }, []);
    
    const [addPregunta, setAddPregunta] = useState(false);
    const [addCategoria, setAddCategoria] = useState(false);

    const toggleOpen = () =>{
        setIsOpen(!isOpen);
    }
    const agregarPregunta = () =>{
        setAddPregunta(true);
        setAddCategoria(false);
    }
    const agregarCategoria = () =>{
        setAddPregunta(false);
        setAddCategoria(true);
    }
    const btnVolver = () => {
        setAddPregunta(false);
        setAddCategoria(false);
    }
    const renderedList = preguntas.map(
        (pregunta) => {
            return <TarjetaCRUD pregunta = {pregunta}/>
        }
    )

    return(
        <div className='h-screen w-screen'>
            <Menu abrirCerrar={toggleOpen}/>
            {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
            <div className='flex flex-col w-full h-full rounded-lg bg-yellow-300 '>
                <div className='flex'>
                    <button className='text-3xl m-4 rounded-lg bg-sky-500 text-white w-full'
                        onClick={agregarPregunta}
                    >Agregar Pregunta
                    </button>                    
                    <button className='text-3xl m-4 rounded-lg bg-sky-500 text-white w-full'
                        onClick={agregarCategoria}
                    >Agregar Categoria
                    </button>                    
                </div>
                {addPregunta && <FormPregunta volver={btnVolver}/>}
                {addCategoria && <FormCategoria volver={btnVolver}/>}
                {!(addPregunta | addCategoria) && renderedList}
            </div>
        </div>
    );
}

export default Admin;