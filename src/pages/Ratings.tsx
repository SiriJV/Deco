import { useRatingContext } from '../context/RatingsContext';
import './Ratings.scss';

const Ratings = () => {
    const { ratings } = useRatingContext();

    return (
        <article className="ratings-page">
            <div className="ratings-main-content">
            {Object.keys(ratings).length === 0 ? (
            <p>No ratings yet.</p>
            ) : (
            <ul className="rating-wrapper">
            {Object.entries(ratings).map(([bookId, entry]) => (
                <li className="rating-card" key={bookId}>
                    <h3>{entry.title || "Unknown Title"}</h3>
                    <div className="rating-icons">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`shape ${i < entry.rating ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                    <p>{entry.rating}/5</p>
                </li>
            ))}
            </ul>
            )}
        </div>
    </article>
    );
};

export default Ratings;