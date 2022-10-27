import React from 'react';
const CardSubject = () =>{
    return(
        <div className="flex flex-col items-center p-2 justify-center rounded-lg border-2 w-[30%]">
            <div className="flex bold">Matemáticas</div>
            <div className="flex">
                Preguntas sobre conceptos importantes de Matemáticas Basicas.
            </div>
            <div className="flex">
                <button className="bg-blue-500 p-2 rounded-lg">Jugar</button>
            </div>
        </div>
        );
}
export default CardSubject;