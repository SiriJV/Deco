import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <a>Decoshelf</a>
            <div className="navlink-wrapper">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore</NavLink>
            <NavLink to="/mybooks" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>My books</NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Profile</NavLink>
            </div>
            <p>?</p>
        </nav>
    )
}

export default NavBar