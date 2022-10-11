import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const ModulesTopicCard = ({ topic }) => {
    console.log(topic)
    const { name, logo, total } = topic;
    return (
        <div className='flex flex-col  w-56 h-64 border-solid border-2 border-white shadow-2xl rounded'>
            <div className='w-full h-53 p-1'>
                <img className='bg-cyan-900 rounded' src={logo} alt="" />
            </div>
            <div className='flex justify-between mt-1 px-2'>
                <h1 className='font-semibold text-1xl text-blue-500'> {name} </h1>
                <button className='text-sm px-2 hover:bg-slate-500 bg-blue-500 rounded text-white'>Start Practice <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ModulesTopicCard;