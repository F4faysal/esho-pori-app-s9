import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className='w-full flex justify-between items-center px-3 md:px-20 h-16 bg-[#1c2b35]'>

            <div className='logo'>
                <Link to='/' className='text-1xl md:text-3xl text-white x-0'>এসো পড়ি</Link>
            </div>

            <div className="flex md:space-x-2 space-x-0">
                <Link
                    // className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md md:px-3 px-1 py-2 text-sm font-medium"
                    to='/'
                >Home</Link>
                
                <Link

                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md md:px-3 px-1 py-2 text-sm font-medium"
                    to='/modules'
                >Modules</Link>

                <Link

                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md md:px-3 px-1 py-2 text-sm font-medium"
                    to='/statistik'
                >statistik</Link>

                <Link

                    className="text-slate-700 hover:bg-gray-400 hover:text-white dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-200 rounded-md md:px-3 px-1  py-2 text-sm font-medium"
                    to='/blog'
                >Bloge </Link>
            </div>
        </nav >
    )
};

export default Header;