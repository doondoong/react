import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Care from './pages/Care';
import Main from './pages/Main';
import Root from './pages/Root';
import Camp from './pages/Camp';
import Login from './pages/Login';
import CheckPage from './pages/CheckPage';

const router = createBrowserRouter([
  {
    path: '/react',
    element: <Root />,
    errorElement: <p>Not Found 😢</p>,
    children: [
      { index: true, element: <Login /> },
      { path: 'todo', element: <Camp /> },
      { path: 'care', element: <Care /> },
      { path: 'goGamping', element: <Main /> },
      { path: 'checkPage', element: <CheckPage /> },
    ],
  },
]);

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
