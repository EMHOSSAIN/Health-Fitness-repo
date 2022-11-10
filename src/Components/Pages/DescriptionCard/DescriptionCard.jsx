import {  Button, Card, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Share/AuthProvider/AuthProvider';

const DescriptionCard = () => {
    
    const { user } = useContext(AuthContext)
    const { _id, img, title, description, name, details, rating } = useLoaderData([])

    const handlereview = event => {
        event.preventDefault()
        const form = event.target;
        const email = user?.email || "Unregesterd"
        const message = form.message.value;
       

        const review = {
            service : _id,
            serviceName:title,
            email:email,
            message:message,
        }
        console.log(review)

        fetch('http://localhost:5000/reviews',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){

             alert('Your are successfully reviewer')
                form.reset();
            }

        })
        .catch(error=>console.error(error))
           

       

    }

    return (
        <div className='w-8/12 m-auto rounded-lg pt-8 mb-16 '>
            <div  >
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Title:{title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <h6> Rating:{rating} </h6>
                    <h1 className='text-red'> 1 Facility with Details </h1>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Facelity name :{name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <span className='text-black-600'> Facelity Details</span>:{details}
                    </p>


                </Card>
            </div>

            <div className='pt-5'>
                <h3> Title: {title} </h3>
               <form onSubmit={handlereview}>
               <input name='email' type='email' placeholder='email' />
             <  Textarea  name='message' placeholder='Leave one review' />
                    <Button type="submit" >Review Submit</Button>
               </form>


            </div>
        </div>
    );
};

export default DescriptionCard;