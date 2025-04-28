import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import MyBooks from './pages/MyBooks'
import Profile from './pages/Profile'
import BookCard from './components/BookCard/BookCard'
import FilterButton from './components/FilterButton/FilterButton'
import SearchBar from './components/SearchBar/SearchBar'
import Rating from './components/BookModal/Rating/Rating'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <section className="temporary-search-wrapper">
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
        <Rating />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
