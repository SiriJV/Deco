import { useState } from 'react';
import './Rating.scss';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (index: number) => {
    if (!isLocked) {
      setRating(index + 1);
      setIsLocked(true);
    }
  };

  const handleChange = (newRating: number) => {
    setRating(newRating);
    setShowModal(false);
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
          <button onClick={() => setShowModal(true)}>(Change rating)</button>
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
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Rating;