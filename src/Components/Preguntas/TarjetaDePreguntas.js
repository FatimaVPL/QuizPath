import React from 'react';
import Pregunta from './Pregunta';
import Respuesta from './Respuesta';

const TarjetaDePreguntas = () => {
    return(
        <div>
            <div>
                <Pregunta name="Como se llama tu nombre"/>
            </div>
            <div>
                <Respuesta name="Mario"/>
                <Respuesta name="Menho"/>
                <Respuesta name="Fati"/>
                <Respuesta name="Gabi"/>
            </div>
        </div>
    );
}


export default TarjetaDePreguntas;