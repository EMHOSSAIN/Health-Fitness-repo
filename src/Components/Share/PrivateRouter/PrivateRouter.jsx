import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
   const {user}=useContext(AuthContext)
   
   if(!user){
    return <Navigate to="login"/>
   }
   return Children;
};

export default PrivateRouter;