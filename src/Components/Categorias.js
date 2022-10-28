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
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
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
      <div className='h-screen'>
          <Menu/>
          {isOpen && <MenuResponsive abrirCerrar={toggleOpen}/>}
          <div className='flex flex-col h-full rounded-lg bg-yellow-300 '>
            {categoryList}
          </div>
      </div>
  );
}
export default Categorias;