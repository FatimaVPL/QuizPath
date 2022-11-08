import React from 'react';

const Veredicto = ({ver, continuar}) => {
    return(
        <div className='flex flex-col w-full p-4 bg-purple-200'>
            {ver}
            <div className='flex item-center justify-center'>
                <button className='text-3xl	rounded-lg bg-sky-500'
                onClick={continuar}>
                    Siguiente
                </button>                
            </div>
        </div>
    );
}

export default Veredicto;