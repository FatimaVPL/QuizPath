import React from 'react';
import {Link} from 'react-router-dom';

const CardSubject = ({name, description}) =>{
    return(
        <div className="flex flex-col items-center p-2 justify-center rounded-lg border-2 w-[30%]">
            <div className="flex bold">{name}</div>
            <div className="flex">
                {description}
            </div>
            <div className="flex">
                <Link to='/jugar'>
                    <button className="bg-blue-500 p-2 rounded-lg">Jugar</button>
                </Link>
            </div>
        </div>
        );
}
export default CardSubject;