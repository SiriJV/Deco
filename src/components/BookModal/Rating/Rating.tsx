import { useState, useEffect } from 'react';
import './Rating.scss';
import Button from '../../Button/Button';
import { useParams } from 'react-router-dom';
import { useRatingContext } from '../../../context/RatingsContext';

const Rating = ({ title }: { title: string }) => {
  const { bookId } = useParams();
  const { ratings, setRating: saveRating } = useRatingContext();
  const [rating, setRating] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (bookId && ratings[bookId]) {
      setRating(ratings[bookId].rating);
      setIsLocked(true);
    }
  }, [bookId, ratings]);

  const handleClick = (index: number) => {
    if (!isLocked && bookId) {
      const newRating = index + 1;
      setRating(newRating);
      setIsLocked(true);
      saveRating(bookId, title, newRating);
    }
  };

  const handleChangeRating = (newRating: number) => {
    if (bookId) {
      setRating(newRating);
      saveRating(bookId, title, newRating);
      setShowModal(false);
    }
  };

  return (
    <div className="rating-wrapper">
      <div className="rating-icons">
        {[...Array(5)].map((_, i) => (
          <div key={i} onClick={() => handleClick(i)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>
        ))}
      </div>


      {isLocked && (
        <div className="rating-result">
          <span>You rated this book {rating} star{rating > 1 ? 's' : ''}</span>
          <Button variant="link" onClick={() => setShowModal(true)}>(Change rating)</Button>
        </div>
      )}

      {showModal && (
        <div className="rating-modal">
          <h3>Change your rating</h3>
          <div className="modal-icons">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`shape ${i < rating ? 'filled' : ''}`}
                onClick={() => handleChangeRating(i + 1)}
              />
            ))}
          </div>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default Rating;