import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Home from './movies/Home';
import AddForm from './movies/AddForm';
import UpdateForm from './movies/UpdateForm';
import About from './users/About';
import NotFound from './users/NotFound';



const App = () => {
  const router = createBrowserRouter([
    {
     path: '/',
     element: <RootLayout />,
     children: [
      { index: true, element:<Home />},
      {path: 'addform', element: <AddForm /> },
      {path: 'updateform', element: <UpdateForm /> },
      {path: 'about', element: <About />},
      {path: '*', element: <NotFound />}
      

    ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App



