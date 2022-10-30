import React from 'react';
import { Link } from 'react-router-dom';


const Resultados = ({aciertos}) => {
    return(
        <div className='flex flex-col'>
            Aciertos: {aciertos}
            <Link to='/categorias'>
                <button className='bg-sky-300 p-2 rounded-lg'>
                    Volver
                </button>
            </Link>
            
        </div>
    );
}

export default Resultados;