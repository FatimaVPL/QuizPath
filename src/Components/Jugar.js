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
    const [aciertos, setAciertos] = useState(0);
    const siguientePregunta = () => {
        setRespondido(false);
        setCont(cont + 1);
    }
    const esCorrecta = ( v ) => {
        setCorrecta(v);
        setAciertos(aciertos + v);
        setRespondido(true);
    }
    const ver = correcta? "Correcta :)" : "Incorrecta :("; 
    return(
        <div className='flex flex-col h-screen w-screen bg-slate-900'>
            <BannerCategoria name='Matematicas'/>
            <div className='flex flex-col m-4 border-2 h-full w-full p-4 rounded-lg bg-emerald-300'>
                <div className='flex bold text-3xl m-2'>
                    Pregunta {cont} / 10
                </div>
                <div className='flex h-full w-full pr-4 items-center justify-center'>
                    {!respondido && cont <= 10 &&
                        <TarjetaDePreguntas pregunta = {pregunta} respuestas = {respuestas} veredicto = {esCorrecta}/>
                    }
                    {respondido && cont < 10 &&
                        <Veredicto ver={ver} continuar={siguientePregunta}/>
                    }          
                    {respondido && cont === 10 &&
                        <Resultados aciertos = {aciertos}/>
                    }                    
                </div>
            </div>
        </div>
    );
}

export default Jugar;