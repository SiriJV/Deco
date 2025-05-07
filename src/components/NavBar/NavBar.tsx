import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <nav>
            <a>Deco<span className="italic">shelf</span>.</a>
            <div className="navlink-wrapper">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore</NavLink>
            <NavLink to="/mybooks" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>My books</NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Profile</NavLink>

            <NavLink to="/ratings" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Ratings</NavLink>
            <NavLink to="/reviews" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Reviews</NavLink>
            </div>
            <Button variant="link" className="info-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>            </Button>
        </nav>
    )
}

export default NavBar

// shelves icon
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-big-icon lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg> */}