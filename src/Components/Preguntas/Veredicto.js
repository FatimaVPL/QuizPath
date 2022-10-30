import React from 'react';

const Veredicto = ({ver, continuar}) => {
    return(
        <div className='flex flex-col bg-purple-200'>
            {ver}
            <button className='text-3xl	rounded-lg bg-sky-300'
            onClick={continuar}>
                Siguiente
            </button>
        </div>
    );
}

export default Veredicto;