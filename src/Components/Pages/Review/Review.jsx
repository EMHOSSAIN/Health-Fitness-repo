import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const{title}=useLoaderData()
    console.log(title)
    return (
        <div>
           <h1> {title} </h1>
        </div>
    );
};

export default Review;