import React from 'react';
const Inicio = () =>{
    return(
        <div className='flex flex-col h-screen rounded-lg bg-yellow-300 '>
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
    );
}

export default Inicio;