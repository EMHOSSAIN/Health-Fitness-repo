import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DescriptionCard = () => {
    const { img, title, description,facility  } = useLoaderData([])
    return (
        <div className='w-4/5 m-auto rounded-lg pt-8 '>
            <div  >
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc= {img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       Title:{title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                       {description}
                    </p>
                    <h1>Facility Side: </h1>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       Caregory:{facility.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Details{facility.details}
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default DescriptionCard;