import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';
import { auth, db, } from '../database/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {collection, addDoc} from "firebase/firestore";
const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const ocultarMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", ocultarMenu);

        return () => {
            window.removeEventListener("resize", ocultarMenu);
        }
    });

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState('');
    const database = [
        {
            username: "Fati",
            password: "123F"
        },
        {
            username: "Gabi",
            password: "123G"
        },
        {
            username: "Mario",
            password: "123M"
        },
        {
            username: "Meño",
            password: "123M"
        }
    ];

    const logInWithEmailAndPassword = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          setIsSubmitted(true);
          console.log(auth.currentUser);
          setUser(auth.currentUser.email);
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    const errors = {
        uname: "Usuario no valido",
        pass: "Contraseña no valida"
    };

    const handleSubmit = (event) => {
        //Prevenir reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Encontrar la información del usuario
        const userData = database.find((user) => user.username === uname.value);

        // Comparar información
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Usuario no encontrado
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    //Se muestra cuando hay un error
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

        const registerWithEmailAndPassword = async (name, email, password) => {
            try {
              const res = await createUserWithEmailAndPassword(auth, email, password);
              const user = res.user;
              await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
              });
              alert("Usuario Registrado");
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          };

    // Formulario
    const renderForm = (
        <div className="h-screen w-screen">
            <input
                type="text"
                className="text-2xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Usuario"
            />
            <input
                type="password"
                className="login__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Constrasenia"
            />
            <div className='flex'>
                <button onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>
                <button onClick={() => registerWithEmailAndPassword("Mario", email, password)}>
                    Registrarse
                </button>
            </div>
        </div>
    );

    return (
        <div className='h-screen'>
            <Menu abrirCerrar={toggleOpen} />
            {isOpen && <MenuResponsive abrirCerrar={toggleOpen} />}
            <div className='flex flex-col h-full rounded-lg bg-yellow-300 '>
                <div className="title">Sign In</div>
                {!isSubmitted && renderForm}
                {isSubmitted && <div className='bienveido-etiqueta'>Bienvenido {user} </div> }
                <Link to='/inicio'>
                </Link>
            </div>
        </div>
    );
}

export default Login;