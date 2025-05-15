import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
// import Explore from './pages/Explore';
import MyBooks from './pages/MyBooks/MyBooks';
import Profile from './pages/Profile/Profile';
import RootLayout from './layouts/RootLayout';
import { ShelvesProvider } from './context/ShelvesContext';
import BookModal from './components/BookModal/BookModal';
import Ratings from './pages/Ratings/Ratings';
import { RatingProvider } from './context/RatingsContext';

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
            element: <Home />
          },
          {
            path: ':bookId',
            element: <BookModal />
          }
        ]
      },
      // {
      //   path: 'explore',
      //   element: <Explore />,
      // },
      {
        path: 'mybooks',
        element: <MyBooks />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'ratings',
        element: <Ratings />
      },
    ]
  },
]);

export default function App() {
  return (
    <ShelvesProvider>
        <RatingProvider>
          <RouterProvider router={router} />
        </RatingProvider>
    </ShelvesProvider>
  );
}