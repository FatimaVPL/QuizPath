import React from 'react';
const CardSubject = ({name, description}) => {
    return(
        <div className="flex flex-col items-center p-2 justify-center rounded-lg border-2 lg:w-[30%] w-[50%] bg-white mr-4">
            <div className="flex bold">{name}</div>
            <div className="flex">
                {description}
            </div>
            <div className="flex">
                <button className="bg-blue-500 p-2 rounded-lg">Jugar</button>
            </div>
        </div>
        );
}
export default CardSubject;