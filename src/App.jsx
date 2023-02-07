import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Care from './pages/Care';
import Main from './pages/Main';
import Root from './pages/Root';
import Camp from './pages/Camp';

const router = createBrowserRouter([
  {
    path: '/react',
    element: <Root />,
    errorElement: <p>Not Found 😢</p>,
    children: [
      { index: true, element: <Main /> },
      { path: 'care', element: <Care /> },
      { path: 'goGamping', element: <Camp /> },
    ],
  },
]);

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
