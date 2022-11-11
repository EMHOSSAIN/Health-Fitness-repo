import React from 'react';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/Router';



const App = () => {
  
  return (
    <div className='w-11/12 m-auto'>
    <RouterProvider router={router} > </RouterProvider>
    </div>
  );
};

export default App;