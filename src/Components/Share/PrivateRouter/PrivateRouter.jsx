import { Button, Spinner } from 'flowbite-react';
import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
   const {user,loading}=useContext(AuthContext)
   const location=useLocation();
   if(loading){
      return <Button>
      <Spinner aria-label="Spinner button example" />
      <span className="pl-3">
        Loading...
      </span>
    </Button>
   }
   
   if(!user){
    return <Navigate state={{form:location}} replace to="login"/>
   }
   return children;
};

export default PrivateRouter;