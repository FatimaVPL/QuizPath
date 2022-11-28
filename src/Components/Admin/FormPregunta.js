import React, {useState} from "react";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const FormPregunta = ({volver}) => {
    const [formValue, setFormValue] = useState({
        Categoria: "",
        Pregunta: "",
        AC: "",
        WA1: "",
        WA2: "",
        WA3: ""
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
      const agregarPregunta = async () => {
        await
            addDoc(collection(db, "Preguntas"), formValue);
            toast.success('Se agregó la pregunta', {
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
            <div className="flex flex-col w-full items-center justify-center">
                <input type="text" name="Categoria" onChange={handleChange} placeholder='Categoria' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <input type="text" name="Pregunta" onChange={handleChange} placeholder='Pregunta' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <input type="text" name="AC" onChange={handleChange} placeholder='Respuesta Correcta' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <input type="text" name="WA1" onChange={handleChange} placeholder='Respuesta Incorrecta 1' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <input type="text" name="WA2" onChange={handleChange} placeholder='Respuesta Incorrecta 2' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <input type="text" name="WA3" onChange={handleChange} placeholder='Respuesta Incorrecta 3' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
                <div className="flex w-full items-center justify-center">
                    <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                        onClick={volver}
                    >Cancelar
                    </button>
                    <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                        onClick={() => agregarPregunta()}
                    >Agregar
                    </button>             
                </div>
            </div>    
    );
}

export default FormPregunta;