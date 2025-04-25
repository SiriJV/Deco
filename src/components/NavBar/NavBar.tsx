import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            <NavLink to="/explore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore</NavLink>
            <NavLink to="/mybooks" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>My books</NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Profile</NavLink>

        </nav>
    )
}

export default NavBar