import React from 'react';

const Bloge = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col  items-center '>

            <div className='bg-slate-500 w-full flex flex-col  items-center py-10'>
                <h1 className='text-5xl text-white font-semibold '>গুরুত্বপূর্ণ তিনটি প্রশ্ন এবং এর উত্তর !</h1>
            </div>
            <p className='text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 '> প্রশ্ন : ১. রিয়েক্ট রাউটার এর উদ্দেশ্য কি ?</p>
            <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 '> উঃ  রিঅ্যাক্ট রাউটার হল রিঅ্যাক্টে রাউটিং করার জন্য একটি স্ট্যান্ডার্ড লাইব্রেরি। এটি একটি প্রতিক্রিয়া অ্যাপ্লিকেশনের বিভিন্ন উপাদানের ভিউগুলির মধ্যে নেভিগেশন সক্ষম করে, ব্রাউজার URL পরিবর্তন করার অনুমতি দেয় এবং UI কে URL এর সাথে সিঙ্কে রাখে</p>

            <p className='text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 '> প্রশ্ন: ২. কনটেক্সট API কীভাবে রিয়েক্ট কাজ করে ?</p>
            <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 '> উঃ  রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা গ্রান্ডপারেন্ট থেকে চাইল্ড থেকে প্যারেন্ট কাছে প্রপস সরানোর বিকল্প। রেডক্স ব্যবহার করে রাজ্য পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা পদ্ধতি হিসাবেও উল্লেখ করা হয়।</p>

            <p className='text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 '> প্রশ্ন: ৩. useREf হুক এক্সপ্লেইনেড </p>
            <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 '> উঃ  useRef(initialValue) হল একটি বিল্ট-ইন রিঅ্যাক্ট হুক যা একটি আর্গুমেন্টকে প্রাথমিক মান হিসেবে গ্রহণ করে এবং একটি রেফারেন্স (ওরফে রেফ) প্রদান করে। একটি রেফারেন্স একটি বস্তু একটি বিশেষ সম্পত্তি বর্তমান আছে.
            
            </p>
            <p className='text-1xl text-slate-500 font-semibold md:w-1/2 mt-1 '> UseRef Hook আপনাকে রেন্ডারের মধ্যে মান বজায় রাখতে দেয়। এটি একটি পরিবর্তনযোগ্য মান সংরক্ষণ করতে ব্যবহার করা যেতে পারে যা আপডেট করার সময় পুনরায় রেন্ডারের কারণ হয় না। এটি সরাসরি একটি DOM উপাদান অ্যাক্সেস করতে ব্যবহার করা যেতে পারে।
            </p>
            
        </div>
    );
};

export default Bloge;