import { Card } from 'flowbite-react';
import React from 'react';

const Threeproducts = ({product}) => {
    const{img,title,description}=product;
    return (
        <div>
            <div className="max-w-sm">
  <Card imgSrc={img}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {
        description.length>100? description.slice(0,100):{description}
       
     }
    </p>
  </Card>
</div>
        </div>
    );
};

export default Threeproducts;