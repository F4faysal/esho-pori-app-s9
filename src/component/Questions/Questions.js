import React from 'react';
import Options from './Options/Options';

const Questions = ({ questione, lengtn } ) => {
    const { options, question, correctAnswer } = questione
    console.log(questione)

    const arryAnswer = []
    arryAnswer.push(correctAnswer)

    


    function checked(ans) {
        let message;
        const hello = arryAnswer.find(answer => answer === ans)
        // console.log(hello)
        // console.log('hello')
        if (ans === hello) {
            message = <p>'text-2xl'</p>
            // console.log(ans, hello )
        }
        else {
            message = <p>'text-1xl'</p>
        }
        console.log(message)
    }

    return (
        <div className=' w-11/12 md:w-4/5 lg:w-1/2 h-auto  mt-5 shadow-2xl  rounded' >
            <div className='p-3 '>
                <p className='text-1xl md:text-2xl text-semibold'>
                    <span className='text-2xl md:text-3xl'> Quiz {lengtn + 1} :</span> {question}
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5   justify-items-center mb-4'>
                {
                    options.map(option => <Options checked={checked} option={option} correctAnswer={correctAnswer} kry={correctAnswer}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;