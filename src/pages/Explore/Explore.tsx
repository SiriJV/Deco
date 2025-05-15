import './Explore.scss'
import { Outlet } from 'react-router-dom';

const Explore = () => {
    return (
        <article className="explore-page">
            <div>
                {/* <BookCarousel title="Developers’ favourites" books={mockBooks} /> */}
            </div>
            <Outlet />
        </article>
    )
}

export default Explore