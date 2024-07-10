// import logo from './logo.svg';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import AddBlog from './pages/AddBlog';
import BlogDetail from './pages/BlogDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/post/:id',
      element: <SinglePost />,
    },
    {
      path: '/add_blog',
      element: <AddBlog />,
    },
    {
      path: '/blog/:slug',
      element: <BlogDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
