import React, {useState} from 'react';

const Contexto = React.createContext();

export const useContexto = () => {
    return React.useContext(Contexto);
}

export const ContextoProvider = ({children}) =>{
    const [user, setUser] = useState('');
    const [pregunta, setPregunta] = useState({});
    return(
        <Contexto.Provider value={{user, setUser, pregunta, setPregunta}}>
            {children}
        </Contexto.Provider>
    );
}