import React from 'react';
import {FaCheck, FaTrashAlt, FaEdit} from 'react-icons/fa';
import { db } from '../../database/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TarjetaCRUD = (props) => {
    
    const modificar = () => {

    }
    const eliminar = async(id) => {
        const docRef = doc(db, "Preguntas", id);
        await deleteDoc(docRef);
        console.log(id);
        toast.error('Se eliminó la pregunta', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return(
        <div className='flex w-full h-fit p-4 m-4'>
            <div className='flex w-full m-4 p-4 rounded-lg border-1 bg-white  text-black'>
                <div className='flex flex-col w-full text-left'>
                    <span className='font-bold'>{props.pregunta.Categoria}</span>
                    {props.pregunta.Pregunta} <br/>
                    <div className='flex'>
                        {props.pregunta.AC} 
                        <FaCheck className='m-2 text-green-500 items-center justify-center text-xs'/>
                    </div>
                    {props.pregunta.WA1}<br/>
                    {props.pregunta.WA2}<br/>
                    {props.pregunta.WA3}    
                </div>
                    <div className='flex h-full items-center justify-center text-6xl'>
                    <FaEdit className='text-blue-700 m-2' onClick={modificar} cursor="pointer"/>
                    <FaTrashAlt className='text-red-700 m-2' onClick={() => eliminar(props.pregunta.id)} cursor="pointer"/>
                </div>       
            </div>    

        </div>
    );
}

export default TarjetaCRUD;