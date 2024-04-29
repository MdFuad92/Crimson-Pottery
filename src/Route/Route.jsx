import React from 'react';
import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from '../layout/Root';

import Home from '../Home/Home';

import Register from '../AuthenticatePage/Register';
import Login from '../AuthenticatePage/Login';
import Addcrafts from '../components/Addcrafts';
import Allcrafteditems from '../components/Allcrafteditems';

import Craftdetails from '../components/Craftdetails';
import MyCraftedItems from '../components/MyCraftedItems';
import Update from '../components/Update';
import Error from '../Error/Error';
import PrivateRoute from './PrivateRoute';





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
           path:'/',
           element:<Home></Home>,
           loader:()=>fetch('http://localhost:5000/crafts')
        },
        {
         path:'/register',
         element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
         
        },
        {
          path:'/add',
          element:<PrivateRoute><Addcrafts></Addcrafts></PrivateRoute>,
        },
        {
          path:'/products',
          element:<Allcrafteditems></Allcrafteditems>,
          loader:()=>fetch('http://localhost:5000/crafts'),
         
        },
        {
          path:'/craftDetails/:id',
          element:<PrivateRoute><Craftdetails></Craftdetails>,</PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/crafts/id/${params.id}`)

        },
        {
          path:'/mylist',
          element:<PrivateRoute><MyCraftedItems></MyCraftedItems></PrivateRoute>

        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/crafts/id/${params.id}`)
        }
      
      ]
    },
]);


export default router;