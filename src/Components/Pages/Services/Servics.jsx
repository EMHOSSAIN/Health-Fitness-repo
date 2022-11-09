
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Servics = () => {
    const[services, setServices]=useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='text-center' >
            <p className='text-2xl font-bold text-orange-600' > Services</p>
            <h1 className='text-5xl font-semibold' >My Services</h1>
            <p>My all services you can see and  you also can review as well as add Servicse </p>

           <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 ml-24 pt-9 gap-7 '>
           {
                services.map(service => <Product
                key={service._id}
                service={service}
                ></Product> )
            }
           </div>


        </div>
    );
};

export default Servics;