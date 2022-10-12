import React from 'react';
import Options from './Options/Options';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Questions = ({ questione, lengtn } ) => {
    const { options, question, correctAnswer } = questione
    console.log(questione)

    const arryAnswer = []
    arryAnswer.push(correctAnswer)
    const notify = () => toast("Wow so easy!");
    notify()
    console.log('sotto')
    function checked(ans) {
        const hello = arryAnswer.find(answer => answer === ans)
        if (ans === hello) {
            notify()
            console.log('sotti')
        }
        else {
            console.log('mittha')

        }
    }

    return (
        <div className=' w-11/12 md:w-4/5 lg:w-1/2 h-auto  mt-5 shadow-2xl  rounded' >
            <div className='p-3 flex'>
                <p className='text-1xl md:text-2xl text-semibold'>
                    <span className='text-2xl md:text-3xl'> Quiz {lengtn + 1} :</span> {question}
                </p >
                <p className='px-2'>
                    <FontAwesomeIcon className='text-green-400' icon={faEye} ></FontAwesomeIcon>

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