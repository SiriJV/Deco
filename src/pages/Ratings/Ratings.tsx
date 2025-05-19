import { useRatingContext } from '../../context/RatingsContext';
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
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={i < entry.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
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