import React, { useContext } from 'react';
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
import { AuthContext } from '../AuthProvider/AuthProvider';
import SubCategory from '../components/SubCategory';

import Section from '../Section/Section';





const router = createBrowserRouter([



    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
           path:'/',
           element:<Home></Home>,
           loader:()=>fetch('https://assignment-ten-server-steel.vercel.app/crafts')
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
          loader:()=>fetch('https://assignment-ten-server-steel.vercel.app/crafts')


         
        },
        {
          path:'/craftDetails/:id',
          element:<PrivateRoute><Craftdetails></Craftdetails>,</PrivateRoute>,
          loader:({params}) => fetch(`https://assignment-ten-server-steel.vercel.app/crafts/id/${params.id}`)

        },
        {
          path:'/mylist',
          element:<PrivateRoute><MyCraftedItems></MyCraftedItems></PrivateRoute>

        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params}) => fetch(`https://assignment-ten-server-steel.vercel.app/crafts/id/${params.id}`)
        },
        {
        path:'/newcrafts/:subcategory_name',
        element:<SubCategory></SubCategory>,
        loader:({params}) => fetch(`https://assignment-ten-server-steel.vercel.app/newcrafts/new/${params.subcategory_name}`)

        },
        {
          path:'/items/:id',
          element:<Section></Section>,
          loader:({params}) => fetch(`https://assignment-ten-server-steel.vercel.app/newcrafts/${params.id}`)
        
        }

      
      ]
    },
]);


export default router;