import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <nav>
            <a>Deco<span className="italic">shelf</span>.</a>
            <div className="navlink-wrapper">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            {/* <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore</NavLink> */}
            <NavLink to="/mybooks" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>My books</NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Profile</NavLink>

            <NavLink to="/ratings" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Ratings</NavLink>
            <NavLink to="/reviews" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Reviews</NavLink>
            </div>
            {/* <NavLink to="/profile" className={({ isActive }) => (isActive ? "profile-link active" : "profile-link")}></NavLink> */}
            <Button variant="link" className="info-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>            </Button>
        </nav>
    )
}

export default NavBar;