import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart } from 'recharts';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];


const Statistik = () => {
    const statistik = useLoaderData()  
    
    const { data } = statistik
    console.log(data)
   
    return (
        <div>

            <BarChart width={150} height={40} data={data}>
                <Bar dataKey='data.total' fill="#8884d8" />
            </BarChart>
            

            {/* {
                data.map(datas => <Rechat datas={datas}></Rechat> )
           } */}
    </div>
    );
};


const Rechat = ({ datas }) => {
    console.log(datas)
    return (
        <BarChart width={150} height={40} data={datas}>
            <Bar dataKey='datas.total' fill="#8884d8" />
        </BarChart>
    )
}

export default Statistik;