import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyBooks from './pages/MyBooks';
import Profile from './pages/Profile';
import RootLayout from './layouts/RootLayout';
import { ShelvesProvider } from './context/ShelvesContext';
import BookModal from './components/BookModal/BookModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'home',
        // element: <Home />,
        children: [
          {
            index: true,
            element: <Home /> // renders the search
          },
          {
            path: ':bookId',
            element: <BookModal />
          }
        ]
      },
      {
        path: 'explore',
        element: <Explore />,
        // children: [
        //   {
        //     path: ':bookId',
        //     element: <BookModal />
        //   }
        // ]
      },
      {
        path: 'mybooks',
        element: <MyBooks />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  },
]);

export default function App() {
  return (
    <ShelvesProvider>
      <RouterProvider router={router} />
    </ShelvesProvider>
  );
}