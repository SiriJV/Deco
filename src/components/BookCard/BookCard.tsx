import { useState } from "react";
import "./BookCard.scss";

type BookCardProps = {
  img: string;
  name: string;
  author: string;
};

function BookCard({ img, name, author }: BookCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [customShelf, setCustomShelf] = useState("");

  const handleBookmarkClick = () => {
    setShowPopup(!showPopup);
  };

  const handleShelfSelect = (shelf: string) => {
    setShowPopup(false);
    alert(`Added to shelf: ${shelf}`);
    // ersätt här med logik för att faktiskt spara till shelf
  };

  return (
    <div className="book-card">
      <img src={img} alt={name} className="book-card-image" />
      <div className="book-card-info">
        <h3 className="book-card-name">{name}</h3>
        <p className="book-card-author">{author}</p>
      </div>
      <button className="bookmark-icon" onClick={handleBookmarkClick}>
        shelf
      </button>

      {showPopup && (
        <div className="shelf-popup">
          <h3>add to shelf:</h3>
          <button onClick={() => handleShelfSelect("Favorites")}>Favorites</button>
          <button onClick={() => handleShelfSelect("Read")}>Read</button>
          <button onClick={() => handleShelfSelect("Want to Read")}>Want to Read</button>
          <div className="custom-shelf">
            <input
              type="text"
              placeholder="Create new"
              value={customShelf}
              onChange={(e) => setCustomShelf(e.target.value)}
            />
            <button
              onClick={() => {
                if (customShelf.trim()) {
                  handleShelfSelect(customShelf.trim());
                  setCustomShelf("");
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookCard;
