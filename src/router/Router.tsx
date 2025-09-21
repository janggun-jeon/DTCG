import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SplashPage from '@pages/SplashPage/SplashPage';
import HomePage from '@pages/HomePage/HomePage';
import { PATH } from '@constants/path';
import Layout from './Layout';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: PATH.ROOT, element: <SplashPage /> },
          { path: PATH.HOME, element: <HomePage /> },
        ],
      },
    ])}
  />
);

export default Router;
