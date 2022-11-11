import { Button, Rating, Table } from 'flowbite-react';
import React, { useState } from 'react';

const ShowReviewRow = ({ review,handleDelet }) => {
    const [reviews,setReviews]=useState([])
    const{_id,message,email}=review
    
    // const handleDelet=id=>{
    //     const proceed = window.confirm('Are you sure you want to delete!!')
    //     if(proceed){
    //         fetch(`http://localhost:5000/reviews/${id}`,{
    //             method:'DELETE'
    //         })
    //         .then(res=> res.json())
    //         .then(data=>{
    //             console.log(data)
    //         })
    //     }

    // }
    const handleupdate=id=>{
        fetch(`http://localhost:5000/reviews/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({message:'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining=reviews.filter(ord=> ord._id !==id)
                const approving = reviews.find(ord=> ord._id === id)
                approving.message='Approved'

                const newReview = [approving,...remaining];
                setReviews(newReview)
            }

        })
    }
    return (
        <div>
            <Table hoverable={true}>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="!p-4">
                        <Button onClick={() => handleDelet(_id) } >x</Button>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                       {message}
                    </Table.Cell>
                    <Table.Cell>
                       {email}
                    </Table.Cell>
                    <Table.Cell>
                      4.5  <Rating/>
                        <Rating/>
                    </Table.Cell>
                    
                    <Table.Cell>
                        <Button onClick= { ()=> handleupdate (_id) } > Edit </Button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
        </div>
    );
};

export default ShowReviewRow;