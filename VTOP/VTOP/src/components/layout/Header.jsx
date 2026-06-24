import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Header(){
    return(<div>
        <div className='bg-blue-500 pb-3 pt-3 w-full'>
            <img src="src/assets/VIT.png" alt="Error loading vit image" className='w-55'/>
        </div>
    </div>);
}

export default Header;