import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({service}) => {
    const{_id,img,title,price,description}=service;
    return (
        <div className='pt-10'>
            <div className="  ">
  <Card imgSrc= {img} >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Title: {title}
    </h5>
    <p className='text-xl'> $ {price} </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {
        description.length > 150?
        <h3> {description.slice(0-150) + '...'} <Link to={`/card/${_id}`}> Read More </Link> </h3>
        :
        {description}
     }
    </p>
  </Card>
</div>
        </div>
    );
};

export default Product;