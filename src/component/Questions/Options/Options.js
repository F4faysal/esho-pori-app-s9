import React from 'react';

const Options = ({ option, correctAnswer, checked }) => {


    return (
        <div className={`  w-11/12  p-6 shadow hover:shadow-lg rounded-lg  bg-slate-600 hover:bg-slate-900 text-white  `} >
            <input class={`default:ring-6`} onClick={() => checked(option)} type="radio" id={option} name="option" value="HTML" />
            <label className='px-3 text-[18px]' for={option}>{option}</label> <br />
        </div>

    );
};

export default Options;