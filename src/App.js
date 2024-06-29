import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './ui/RootLayout';

import About from './users/About';
import NotFound from './users/NotFound';
import Home from './ui/Home';
import SignUp from './features/auth/SignUp';
import Login from './features/auth/Login';
import UserRoute from './ui/UserRoute';
import Detail from './features/home/Detail';
import AdminProducts from './features/admin/ProductAdmin';
import ProductForm from './features/admin/ProductForm';
import ProductEdit from './features/admin/ProductEdit/ProductEdit';
import CartPage from './features/carts/CartPage';



const App = () => {
  const router = createBrowserRouter([
    {
     path: '/',
     element: <RootLayout />,
     children: [
      { index: true, element:<Home />},
      { path: 'product/:id', element: <Detail />},


      { element : <UserRoute />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <SignUp /> },

        ]
      },
      {path: 'allProducts', element: <AdminProducts />},
      {path: 'addProduct', element: <ProductForm />},
      {path: 'edit-product/:id', element: <ProductEdit />},
      {path: 'carts', element: <CartPage />},
      

      {path: 'about', element: <About />},


      {path: '*', element: <NotFound />}
      

    ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App



