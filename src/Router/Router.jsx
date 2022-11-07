import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Share/Login/Login";
import SignUp from "../Components/Share/SignUp/SignUp";
import Main from "../Layout/Main";

const router =  createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'home',
          element:<Home></Home>  
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>

        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            
        }
      ]
      
    }
  ])

  export default router