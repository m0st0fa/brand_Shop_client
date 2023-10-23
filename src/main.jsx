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
import MyCart from './Components/MyCart';
import PriviteRoutes from './Components/PriviteRoutes';
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
        loader: ({ params }) => fetch(`https://brand-shop-server-54jwmy5uy-mostofas-projects-b43a9202.vercel.app/product/${params.brandName}`)
      },
      {
        path: 'update/:id',
        element: <PriviteRoutes><UpdateProductDeatils></UpdateProductDeatils></PriviteRoutes>,
        loader: ({ params }) => fetch(`https://brand-shop-server-54jwmy5uy-mostofas-projects-b43a9202.vercel.app/update/${params.id}`)
      },
      {
        path: '/deatils/:id',
        element: <PriviteRoutes>
          <ProductDeatils></ProductDeatils>
        </PriviteRoutes>,
        loader: ({ params }) => fetch(`https://brand-shop-server-54jwmy5uy-mostofas-projects-b43a9202.vercel.app/deatils/${params.id}`)
      },
      {
        path: '/Carts',
        element: <PriviteRoutes>
          <MyCart></MyCart>
        </PriviteRoutes>,
        loader: () => fetch('https://brand-shop-server-54jwmy5uy-mostofas-projects-b43a9202.vercel.app/carts')

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
