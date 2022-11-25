import React from 'react';
const TarjetaDePreguntas = ({pregunta, respuestas, veredicto}) => {
    const listaRespuestas = respuestas.map(
        (r) => {
            return( 
                <div className='flex items-center justify-center m-4'>
                    <button className='text-3xl rounded-lg bg-sky-500 text-white w-full'
                        onClick={() => veredicto(r.correcta)}
                    >{r.name}
                    </button>                    
                </div>

            );
        }
    );
    return(
        <div className='flex h-full flex-col justify-center w-full m-4 rounded-lg border-2 p-4 bg-purple-200'>
            <div className='text-3xl bold m-4'>
                {pregunta}
            </div>
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                {listaRespuestas}
            </div>
        </div>
    );
}


export default TarjetaDePreguntas;