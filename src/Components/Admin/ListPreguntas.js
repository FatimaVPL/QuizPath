import React from 'react';
import TarjetaCRUD from './TarjetaCRUD';

const ListPreguntas = (props) => {
    return(
        <div className='flex flex-col'>
            {
                props.p.map(
                    (pregunta, key) => <TarjetaCRUD key = {key} data = {pregunta}/>
                )
            }
        </div>
    );
}

export default ListPreguntas;