import { Button, Rating, Table } from 'flowbite-react';
import React from 'react';

const ShowReviewRow = ({ review }) => {
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
                        <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Edit
                        </a>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
        </div>
    );
};

export default ShowReviewRow;