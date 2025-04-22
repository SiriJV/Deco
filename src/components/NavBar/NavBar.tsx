import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/bookshelves">Bookshelves</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default NavBar