import {  Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Share/AuthProvider/AuthProvider';
import ShowReviewRow from './ShowReviewRow/ShowReviewRow';

const ShowReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelet=id=>{
        const proceed = window.confirm('Are you sure you want to delete!!')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                if(data.deleteCount > 0){
                    alert('Delete Successfully');
                    const remaining = reviews.filter(ord=>ord._id===id);
                    setReview(remaining)
                }
            })
        }

    }
    return (
        <div>
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Viewers
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                       Rating
                    </Table.HeadCell>
                   
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                {
                    reviews.map(review => <ShowReviewRow
                        key={review._id}
                        review={review}
                        handleDelet={handleDelet}
                    ></ShowReviewRow>)
                }
            </Table>
        </div>
    );
};

export default ShowReview;