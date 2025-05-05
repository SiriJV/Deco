import { useState } from "react";
import "./BookCard.scss";
import { useShelves } from "../../context/ShelvesContext";

type BookCardProps = {
  img: string;
  name: string;
  author: string;
};

function BookCard({ img, name, author }: BookCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [customShelf, setCustomShelf] = useState("");
  const { addBookToShelf, addShelf } = useShelves();

  const handleBookmarkClick = () => {
    setShowPopup(!showPopup);
  };

  const handleShelfSelect = (shelfName: string) => {
    const book = { name, author, img };
    addBookToShelf(shelfName, book);
    setShowPopup(false);
    alert(`Added to shelf: ${shelfName}`);
  };
  

  const handleCreateShelf = () => {
    if (customShelf.trim()) {
      addShelf(customShelf.trim());
      addBookToShelf(customShelf.trim(), name);
      setCustomShelf("");
      alert(`Added "${name}" to newly created shelf: ${customShelf}`);
    }
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
            <button onClick={handleCreateShelf}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookCard;
