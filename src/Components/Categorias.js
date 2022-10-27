import React, {useState} from 'react'
import CardSubject from '../Components/CardSubject'
import MenuResponsive from './MenuResponsive';
import NavBar from './NavBar';


const datos = [
  {
    name: "Matematicas",
    description: "Matematicas hijo"
  },
  {
    name: "Historia",
    description: "Aprende sobre historia"
  },
  {
    name: "Geografia",
    description: "Aprende sobre el planeta donde vives"
  }
]

export const Categorias = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const CardSubjectList = datos.map(
      (cat) =>{
        return <CardSubject name={cat.name} description={cat.description}/>
      }
    )

    return(
        <div className='h-screen'>
            <NavBar abrirCerrar={toggleOpen}/>
            {isOpen && <MenuResponsive/>}
            <div className='flex flex-col h-full items-center justify-center rounded-lg bg-yellow-300 '>
                <div className='flex w-full items-center justify-center'>
                    <h1 className='p-6'>
                        Categorias
                    </h1>
                </div>
                <div className='flex w-full items-center justify-center'>
                    {CardSubjectList}
                </div>
            </div>
        </div>
    );
}
export default Categorias;