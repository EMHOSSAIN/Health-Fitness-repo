import { createBrowserRouter } from "react-router-dom";
import DescriptionCard from "../Components/Pages/DescriptionCard/DescriptionCard";
import Home from "../Components/Pages/Home/Home";
import Servics from "../Components/Pages/Services/Servics";
import Login from "../Components/Share/Login/Login";
import PrivateRouter from "../Components/Share/PrivateRouter/PrivateRouter";
import SignUp from "../Components/Share/SignUp/SignUp";
import ShowReview from "../Components/ShowReview/ShowReview";
import NotFoundData from '../Components/Error/NotFoundData'
import Main from "../Layout/Main";
import AddToCard from "../Components/Pages/AddToCard/AddToCard";

const router =  createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'home',
          element:<PrivateRouter><Home></Home> </PrivateRouter>
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
          element: <PrivateRouter><DescriptionCard></DescriptionCard></PrivateRouter>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
          
        },
        {
          path:'/addtocard/:id',
          element:<AddToCard></AddToCard>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
       
       
        {
          path:'/myreview',
          element:<PrivateRouter><ShowReview></ShowReview></PrivateRouter>

        }
        
      ]
      
    },
    {
      path:'*',
      element:<NotFoundData></NotFoundData>
    }
  ])

  export default router