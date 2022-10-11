import React from 'react';

const Questions = ({ questione, lengtn } ) => {
    const { options, question, correctAnswer } = questione

    return (
        <div className=' w-11/12 md:w-4/5 lg:w-1/2 h-72 border-solid border-2 border-sky-500 mt-3 ' >
            <div>
                <p className='text-3xl text-semibold'>
                    <span className='text-4xl'> Quiz {lengtn + 1} :</span> {question}
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Questions;