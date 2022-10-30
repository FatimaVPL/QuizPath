import React from 'react';

const BannerCategoria = ({name}) => {
    return(
        <nav className='flex items-center h-16 bg-sky-300 text-black relative shadow-sm'>
            <div className='pl-8'>logo {name}</div>

        </nav>
    );
}


export default BannerCategoria;