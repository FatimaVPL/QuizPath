import React, {useState} from "react";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
const FormCategoria = ({volver}) => {
    const [formValue, setFormValue] = useState({
        Categoria: "",
        Descripcion: "",
        Imagen: ""
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
        console.log(formValue);
      };
      const agregarCategoria = async () => {
        await addDoc(collection(db, "Categoria"), formValue);
        alert("success");
    }
    return(
        <div className="flex flex-col w-full items-center justify-center">
            <input type="text" name="Categoria" onChange={handleChange} placeholder='Nombre de la Categoria' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
            <textarea type="text" name="Descripcion" onChange={handleChange} placeholder='Descripcion' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></textarea>
            <input type="text" name="Imagen" onChange={handleChange} placeholder='URL imagen' className='w-[80%] m-2 p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'></input>
            <div className="flex w-full items-center justify-center">
                <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                    onClick={volver}
                >Cancelar
                </button>
                <button className='text-3xl m-4 p-4 rounded-lg bg-sky-500 text-white w-fit'
                    onClick={() => agregarCategoria()}
                >Agregar
                </button>             
            </div>

        </div>
    );
}

export default FormCategoria;