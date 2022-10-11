import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-5xl text-slate-700 font-semibold'>পেজটি খুঁজে পাওয়া যায়নি!</h1>
            <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-7 text-center'>আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি! উপরের মেনুতে দেখানো যেকোন লিঙ্ক এ ক্লিক করে আপনি আপনার প্রয়োজনীয় পেজে যেতে পারেন অথবা উপরের লার্ন উইথ সুমিত লোগো তে ক্লিক করে ওয়েবসাইটের হোম পেজে যেতে পারেন।</p>
            <div className='text-1lx font-medium px-2 py-2 hover:bg-emerald-900  bg-emerald-700 rounded text-white  w-40 flex justify-center mt-7'>
                <Link to='/'>হোম পেজে চলুন</Link>
            </div>
        </div>
    );
};

export default ErrorPage;