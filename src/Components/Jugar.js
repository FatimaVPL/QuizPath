import React, {useState} from 'react';
import TarjetaDePreguntas from './Preguntas/TarjetaDePreguntas';
import BannerCategoria from './BannerCategoria';
import Veredicto from './Preguntas/Veredicto';
import Resultados from './Resultados';
const pregunta = 'cuanto es 2 + 2?'
const respuestas = [
    {
        name: '4',
        correcta: true,
    },
    {
        name: '5',
        correcta: false,
    },
    {
        name: '6',
        correcta: false,
    },
    {
        name: '3',
        correcta: false,
    },
]

const Jugar = () => {
    const [respondido, setRespondido] = useState(false);
    const [correcta, setCorrecta] = useState(false);
    const [cont, setCont] = useState(1);
    const siguientePregunta = () => {
        setRespondido(false);
        setCont(cont + 1);
    }
    const esCorrecta = (v) => {
        setCorrecta(v);
        setRespondido(true);
    }
    const ver = correcta? "Correcta :)" : "Incorrecta :("; 
    console.log(respondido);
    return(
        <div className='flex flex-col h-screen w-screen'>
            <BannerCategoria name='Matematicas'/>
            <div className='border-2 rounded-lg m-4 bg-emerald-300'>
                <div className='flex bold text-3xl m-2'>
                    Pregunta {cont} / 10
                </div>
                    {!respondido && cont <= 10 &&
                        <TarjetaDePreguntas pregunta = {pregunta} respuestas = {respuestas} veredicto = {esCorrecta}/>
                    }
                    {respondido && cont < 10 &&
                        <Veredicto ver={ver} continuar={siguientePregunta}/>
                    }          
                    {respondido && cont === 10 &&
                        <Resultados aciertos = {10}/>
                    }
            </div>

        </div>
    );
}

export default Jugar;