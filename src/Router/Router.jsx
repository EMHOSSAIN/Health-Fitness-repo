import { createBrowserRouter } from "react-router-dom";
import DescriptionCard from "../Components/Pages/DescriptionCard/DescriptionCard";
import Home from "../Components/Pages/Home/Home";
import Review from "../Components/Pages/Review/Review";
import Servics from "../Components/Pages/Services/Servics";
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
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/service'  ,
          element:<Servics></Servics>
        },
        {
          path:'/card/:id',
          element:<DescriptionCard></DescriptionCard>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
          
        },
        {
          path:'/review/:id',
          element:<Review></Review>,
          loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
        }
        
      ]
      
    }
  ])

  export default router