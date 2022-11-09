import { Rating } from 'flowbite-react';
import React from 'react';
import { AiOutlineCalendar } from "react-icons/ai";

const Banner = () => {
    return (
        <div className='w-10/12 h-80 m-auto bg-black text-white rounded-lg '>
            <marquee direction="left">
           <div className='pt-10 pl-8'>
           <h2>E.H.E Nutrition and Personal Training</h2>
            <h4>Applying EHE nutrition to personal training and food logs</h4>
            <Rating className='pt-4'>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 text-white">
                    4.95
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500  text-orange" />
                <a
                    href="#"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline text-white "
                >
                    73 reviews
                </a>
            </Rating>
            <h5 className='pt-3'>Created By <span className='text-red-600' > EMAM HOSSAIN </span> </h5>
           <div className='flex pt-2'>
           <AiOutlineCalendar/>
           <p className='pl-3'>  Last Update 09/11/2022 </p>
           </div>
           </div>
           </marquee>
        </div>
    );
};

export default Banner;