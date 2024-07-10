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
import UserProfile from './features/user/UserProfile';
import CartPage from './features/carts/CartPage';
import UserSecRoutes from './ui/UserSecRoutes';
import AdminRoutes from './ui/AdminRoutes';
import OrderDetail from './features/orders/OrderDetail';
import SearchPage from './features/home/SearchPage';



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

      {
        element: <AdminRoutes />,
        children:[
          {path: 'allProducts', element: <AdminProducts />},
          {path: 'addProduct', element: <ProductForm />},
          {path: 'edit-product/:id', element: <ProductEdit />},
          
        ]
      },

      {
        element: <UserSecRoutes />,
        children:[

          {path: 'carts', element: <CartPage />},
          { path: 'userProfile', element: <UserProfile /> },
          { path: 'orders/:id', element: <OrderDetail /> },
    
        ]
      },
      
      {path: 'search-page/:query', element: <SearchPage />},


      {path: 'about', element: <About />},


      {path: '*', element: <NotFound />},
      
    ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App



