import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
// import Explore from './pages/Explore';
import MyBooks from './pages/MyBooks';
import Profile from './pages/Profile';
import RootLayout from './layouts/RootLayout';
import { ShelvesProvider } from './context/ShelvesContext';
import BookModal from './components/BookModal/BookModal';
import Ratings from './pages/Ratings';
import { RatingProvider } from './context/RatingsContext';
import { StatisticsProvider } from './context/StatisticsContext';

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