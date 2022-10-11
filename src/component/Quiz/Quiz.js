import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizData = useLoaderData()
    const {name, logo , questions , id} = quizData.data
    console.log(quizData)

    return (
        <div className='flex flex-col justify-center items-center mt-6'>
            <img className='bg-cyan-900 rounded w-20 h-20' src={logo} alt="" />
            <h1 className='text-2xl font-semibold text-cyan-900 '>Qusz of {name}</h1>
            {
                questions.map((question, lengtn) => <Questions lengtn={lengtn} questione={question} key={question.id}></Questions>)
            }
        </div>
    );
};

export default Quiz;