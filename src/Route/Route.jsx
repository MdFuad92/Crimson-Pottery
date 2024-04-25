import React from 'react';
import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from '../layout/Root';

import Home from '../Home/Home';

import Register from '../AuthenticatePage/Register';
import Login from '../AuthenticatePage/Login';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
         path:'/register',
         element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
         
        }
      ]
    },
]);


export default router;