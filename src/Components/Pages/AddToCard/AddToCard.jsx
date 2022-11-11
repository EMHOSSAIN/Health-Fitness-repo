import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddToCard = () => {
    const {img, title,description}=useLoaderData([])
    return (
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 ml-24 pt-9 gap-3 pl-8'>
            <div className="max-w-sm">
  <Card imgSrc= {img} >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>
  </Card>
</div>
        </div>
    );
};

export default AddToCard;