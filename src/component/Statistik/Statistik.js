import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';



const Statistik = () => {
    const statistik = useLoaderData()  
    
    const { data } = statistik
    console.log(data)

    return (
        <div className= ''>
            <div className='bg-slate-500 w-full flex flex-col  items-center py-10'>
                <h1 className='text-5xl text-white font-semibold '>statistik of quiz mark</h1>
            </div>

            <div className=' flex justify-center mt-6 '>
                <LineChart width={500}
                    height={300}
                    data={data}>

                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>

                </LineChart>
            </div>
         
        
    </div>
    );
};

export default Statistik;