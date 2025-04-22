import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Bookshelves from './pages/Bookshelves'
import Profile from './pages/Profile'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookshelves" element={<Bookshelves />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
