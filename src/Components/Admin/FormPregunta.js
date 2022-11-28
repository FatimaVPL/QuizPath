import React, {useState} from "react";
import { db } from "../../database/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useContexto } from "../../Context/Contexto";
const FormPregunta = ({volver, label}) => {
    const {pregunta, setPregunta} = useContexto();
    const [formValue, setFormValue] = useState(pregunta);
      const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(formValue);
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
      const agregarPregunta = async () => {
        if(label === "Agregar"){
            await addDoc(collection(db, "Preguntas"), formValue);
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
                setPregunta({});            
        }
        else{

            const docRef = doc(db, "Preguntas", pregunta.id);
            await updateDoc(docRef, {
                Categoria: formValue.Categoria,
                Pregunta: formValue.Pregunta,
                AC: formValue.AC,
                WA1: formValue.WA1,
                WA2: formValue.WA2,
                WA3: formValue.WA3
            });
            toast.success('Se actualizó la pregunta', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setPregunta({});
        }

    }
    return(
            <div className="flex flex-col w-full items-center justify-center">
                <input type="text" name="Categoria" defaultValue={formValue.Categoria} onChange={handleChange} placeholder='Categoria' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <input type="text" name="Pregunta" defaultValue={formValue.Pregunta} onChange={handleChange} placeholder='Pregunta' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <input type="text" name="AC" defaultValue={formValue.AC} onChange={handleChange} placeholder='Respuesta Correcta' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <input type="text" name="WA1" defaultValue={formValue.WA1} onChange={handleChange} placeholder='Respuesta Incorrecta 1' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <input type="text" name="WA2" defaultValue={formValue.WA2} onChange={handleChange} placeholder='Respuesta Incorrecta 2' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <input type="text" name="WA3" defaultValue={formValue.WA3} onChange={handleChange} placeholder='Respuesta Incorrecta 3' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'/>
                <div className="flex w-full items-center justify-center">
                    <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                        onClick={volver}
                    >Volver
                    </button>
                        <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                            onClick={() => agregarPregunta()}
                        >{label}
                        </button>                       
          
                </div>
            </div>    
    );
}

export default FormPregunta;