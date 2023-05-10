import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Care from './pages/Care';
import KidsPage from './pages/KidsPage';
import Root from './pages/Root';
import Todo from './pages/Todo';
import Login from './pages/Login';
import CheckPage from './pages/CheckPage';

export default function App() {
  const queryClient = new QueryClient();
  const [loggedIn, setLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/react',
      element: <Root />,
      errorElement: <p>Not Found 😢</p>,
      children: [
        { index: true, element: <Login /> },
        { path: 'todo', element: <Todo /> },
        { path: 'care', element: <Care /> },
        { path: 'kids', element: <KidsPage /> },
        { path: 'checkPage', element: <CheckPage /> },
      ],
    },
  ]);
  // const history = createBrowserHistory({ basename: '/react' });

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   if (!accessToken) {
  //     setLoggedIn(false);
  //   } else {
  //     fetch('https://kapi.kakao.com/v2/user/me', {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error('Invalid token');
  //         }
  //         setLoggedIn(true);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setLoggedIn(false);
  //       });
  //   }
  // }, [history]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <Router history={history}>
  //       <Routes>
  //         {loggedIn ? (
  //           <>
  //             <Route path="/todo" element={<Todo />} />
  //             <Route path="/care" element={<Care />} />
  //             <Route path="/kids" element={<KidsPage />} />
  //             {/* <Route path="/checkPage" element={<CheckPage />} /> */}
  //           </>
  //         ) : (
  //           <Route path="/" element={<Login />} />
  //         )}
  //       </Routes>
  //     </Router>
  //   </QueryClientProvider>
  // );
}
