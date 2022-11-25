import React, {useState} from 'react';

const Contexto = React.createContext();

export const useContexto = () => {
    return React.useContext(Contexto);
}

export const ContextoProvider = ({children}) =>{
    const [user, setUser] = useState('');

    return(
        <Contexto.Provider value={{user, setUser}}>
            {children}
        </Contexto.Provider>
    );
}