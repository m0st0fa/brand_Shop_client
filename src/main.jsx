import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import AddProduct from './Components/AddProduct';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductAddDetails from './Components/ProductAdd';
import ProductAddDeatils from './Components/ProductAddDeatils';
import ProductDeatils from './Components/ProductDeatils';
import Register from './Components/Register';
import ErrorElement from './ErrorElement';

import './index.css'
import Root from './Root/Root';
import UpdateProductDeatils from './UpdateProductDeatils';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/ProductAddDetails',
        element: <ProductAddDetails></ProductAddDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/products/:brandName',
        element: <ProductAddDeatils></ProductAddDeatils>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.brandName}`)
      },
      {
        path: 'update/:id',
        element: <UpdateProductDeatils></UpdateProductDeatils>,
        loader: ({ params }) => fetch(`http://localhost:5001/update/${params.id}`)
      },
      {
        path: '/deatils/:id',
        element: <ProductDeatils></ProductDeatils>,
        loader: ({ params }) => fetch(`http://localhost:5001/deatils/${params.id}`)
      },


      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
