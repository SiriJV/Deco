import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home'
import Explore from './pages/Explore'
import MyBooks from './pages/MyBooks'
import Profile from './pages/Profile'
import RootLayout from './layouts/RootLayout';
import BookModal from './components/BookModal/BookModal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'mybooks',
        element: <MyBooks />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: ':bookid',
            element: <BookModal />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}












// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <NavBar />
//       <main>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" replace />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/mybooks" element={<MyBooks />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//       </main>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App












{/* <section className="temporary-search-wrapper">
        <SearchBar />
        <FilterButton />
      </section>
        <h2 className="temporary-title">Developers Favs</h2>
      <section className="temporary-bookcard-wrapper">
      <BookCard
        img="public\images\fifteen_dogs.jpg"
        name="Fifteen Dogs"
        author="André Alexis"
      />
      <BookCard
        img="public\images\strange_the_dreamer.jpg"
        name="Strange the Dreamer"
        author="Laini Taylor"
      />
      <BookCard
        img="public\images\bunny.jpg"
        name="Bunny"
        author="Mona Awad"
      />
      <BookCard
        img="public\images\mockingjay.jpeg"
        name="Mockingjay"
        author="Suzanne Collins"
      />
      <BookCard
        img="public\images\alls_well.jpg"
        name="All's Well"
        author="Mona Awad"
      />
      </section>
        <Rating /> */}