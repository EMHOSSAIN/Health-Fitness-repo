import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Threeproducts from './3products/Threeproducts';
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Home = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/specificProduct')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='text-4xl'>
            <marquee direction="right">
                I'm Really glad to see you on my Personal webside.You have to login this wedside with your email and visit everywhere.Where you want!!
            </marquee>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 ml-24 pt-9 gap-3 '>
                {
                    products.map(product => <Threeproducts
                        key={product._id}
                        product={product}
                    ></Threeproducts>)
                }
            </div>

           <div className='w-4/5 pl-32 pt-9'  >
          <Link  to='/service'> <Button>
      See More
      < BsFillArrowRightSquareFill className="ml-2 h-5 w-5" />
    </Button></Link>
           
           </div>
        </div>
    );
};

export default Home;