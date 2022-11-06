import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';

const Login = () => {
    const[isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const ocultarMenu = () =>{
            if(window.innerWidth > 768 && isOpen){
                setIsOpen(false);
            }            
        }
        window.addEventListener("resize", ocultarMenu);

        return () => {
            window.removeEventListener("resize", ocultarMenu);
        }
    });

    const toggleOpen = () =>{
        setIsOpen(!isOpen);
    }

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "Fati",
      password: "123"
    },
    {
      username: "Gabi",
      password: "123"
    },
    {
      username: "Mario",
      password: "123"
    },
    {
      username: "Meño",
      password: "123"
    }
  ];

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

  // Formulario
  const renderForm = (
    <div className="h-screen w-screen">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className='h-screen'>
         <Menu abrirCerrar={toggleOpen}/>
            {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
        <div className='flex flex-col h-full rounded-lg bg-yellow-300 '>
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Bienvenido</div> : renderForm}
        <Link to='/inicio'>
                <button className='bg-sky-300 p-2 rounded-lg'>
                    Volver
                </button>
            </Link>
            </div>
      </div>
  );
}

export default Login;