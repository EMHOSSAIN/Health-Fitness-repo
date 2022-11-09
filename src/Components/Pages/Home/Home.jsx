import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Threeproducts from './3products/Threeproducts';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Banner from './Banner/Banner';
import CourseCard from './CourseCard/CourseCard';

const Home = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/specificProduct')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div className='text-4xl text-orange-500'>
            <marquee direction="right">
                I'm Really glad to see you on my Personal webside.You have to login this wedside with your email and visit everywhere.Where you want!!
            </marquee>

            <Banner></Banner>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 ml-24 pt-9 gap-3 pl-8 '>
                {
                    products.map(product => <Threeproducts
                        key={product._id}
                        product={product}
                    ></Threeproducts>)
                }
            </div>

           <div className=' pl-72 pt-5'  >
          <Link   to='/service'> <Button>
      See More
      < BsFillArrowRightSquareFill className="ml-2 h-5 w-5" />
    </Button></Link>
           
           </div>
        </div>

        <CourseCard></CourseCard>



        </div>
    );
};

export default Home;