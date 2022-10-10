import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className='header w-full'>

            <div className='logo'>
                <a className='text-1xl md:text-3xl text-white x-0'>Esho Poti</a>
            </div>

            <div className="flex space-x-2 ">
                <Link
                    // className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                    to='/home'
                >Home</Link>
                <Link
                    
                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                    to='/features'
                >Features</Link>
                <Link
                    
                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                    to='/modules'
                >Modules</Link>

                <Link
                    
                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                    to='/blog'
                >Bloge </Link>
            </div>
        </nav >
    )
};

export default Header;