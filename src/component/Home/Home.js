import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ModulesTopicCard from '../ModulesTopicCard/ModulesTopicCard';

const Home = () => {
    const modulesTopics = useLoaderData();
    const { data, status } = modulesTopics;

    return (
        <div className="">
            <div className='mt-10 px-20 lg:w-1/2'>
                <h1 className='md:text-5xl text-2xl font-medium text-[#123147]' >থিংক ইন এ <span className='text-emerald-700 font-semibold'>রিএক্ট</span> ওয়ে</h1>
                <h3 className='text-[#414344] text-sm font-medium md:text-[23px] mt-2 '>রিএক্ট  টুলকিট , এসো পড়ি  </h3>
                <p className='text-[#436680] font-medium text-sm md:text-[18px] mt-2'>রিএক্ট এর মৌলিক এবং আবশ্যিক বিষয়সমূহ গুরুত্বপূর্ণ কুইজ এই কুইজ প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিএক্ট প্রোগ্রামার হয়ে উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।</p>
                
                <div className='text-1lx font-medium px-2 py-2 hover:bg-emerald-900  bg-emerald-700 rounded text-white mt-2 md:w-1/5 flex justify-center'><Link  to='/blog'> এক নজরে </Link></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-10 '>
                {
                    data.map(topic => <ModulesTopicCard topic={topic} key={topic.id} > </ModulesTopicCard>)
                }
            </div>
        </div>
    );
};

export default Home;