import React from 'react';
import { Link } from 'react-router-dom';

const Modules = () => {
    
    return (
        <div>
            <div className='bg-slate-500 w-full flex flex-col  items-center py-10'>
                <h1 className='text-5xl text-white font-semibold '>We're coming soon</h1>
            </div>
            <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-slate-700 font-semibold'>We're coming soon!</h1>
                <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-7 text-center'>আপনি যে পেজটি তে এসেছেন তার কাজ চলতেসে।</p>
                <div className='text-1lx font-medium px-2 py-2 hover:bg-emerald-900  bg-emerald-700 rounded text-white  w-40 flex justify-center mt-7'>
                    <Link to='/'>হোম পেজে চলুন</Link>
                </div>
            </div>
        </div>
    );
};

export default Modules;