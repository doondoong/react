import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Care from './pages/Care';
import Main from './pages/Main';
import Root from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/react',
        element: <Root />,
        errorElement: <p>Not Found 😢</p>,
        children: [
            {index: true, element: <Main />},
            {path: 'care', element: <Care />},
        ]
    },
])

export default function App() {
  
    return <RouterProvider router={router} />  
}

