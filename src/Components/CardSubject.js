import React from 'react';
import '../CSS/Card.css'
const CardSubject = () =>{
    return(
        <div className="ui cards">
            <div className="ui card carta">
                <div className="content">
                    <div className="header">Matemáticas</div>
                    <div className="description">
                        Preguntas sobre conceptos importantes de Matemáticas Basicas.
                        <br></br>
                        <strong>Nivel: </strong>
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Ciencias Naturales</div>
                    
                    <div className="description">
                        Pon a prueba tus conocimientos sobre ciencias naturales
                        <br></br>
                        <strong>Nivel: </strong>
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Geografía</div>
                    <div className="description">
                        ¿Qué tanto conoces nuestro planeta Tierra? 
                        <br></br>
                        <strong>Nivel: </strong>
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Historia</div>
                    <div className="description">
                        ¿Qué tanto conoces de nuestro pasado?
                        <br></br>
                        <strong>Nivel: </strong>
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Arte</div>
                    <div className="description">
                        ¿Te consideras un conocedor del arte?
                        <br></br>
                        <strong>Nivel: </strong>
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Tecnología</div>
                    <div className="description">
                        ¿Conoces los nuevos avances tecnlogicos?
                        <br></br>
                        <strong>Nivel: </strong>1
                    </div>
                </div>
                <div className="extra content">
                        <button className="ui blue button">Jugar</button>
                </div>
            </div>
        </div>
        );
}
export default CardSubject;