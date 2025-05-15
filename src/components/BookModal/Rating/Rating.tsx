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

  const handleChange = (newRating: number) => {
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
          <div
            key={i}
            className={`shape ${i < rating ? 'filled' : ''}`}
            onClick={() => handleClick(i)}
          />
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
                onClick={() => handleChange(i + 1)}
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