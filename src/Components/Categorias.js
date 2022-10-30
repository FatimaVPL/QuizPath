import React, {useState, useEffect} from 'react'
import CardSubject from '../Components/CardSubject'
import Menu from './Menu';
import MenuResponsive from './MenuResponsive';


const categories = [
  {
    name: 'Math',
    description: 'Matematicas Hijo'
  },
  {
    name: 'History',
    description: 'Historia mundial'
  },
  {
    name: 'Geografia',
    description: 'Aprende sobre el planeta donde vives'
  }
];

export const Categorias = () => {
  const categoryList = categories.map(
    (cat) => {
      return <CardSubject name={cat.name} description={cat.description}/>
    }
  );
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
  return(
      <div className='h-screen w-screen'>
          <Menu abrirCerrar={toggleOpen}/>
          {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
          <div className='flex-col h-full w-full rounded-lg justify-center items-center bg-yellow-300 md:flex'>
            {categoryList}
          </div>
      </div>
  );
}

export default Categorias;