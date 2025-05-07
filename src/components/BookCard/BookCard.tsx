import { useState } from "react";
import "./BookCard.scss";
import { useShelves } from "../../context/ShelvesContext";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';

type BookCardProps = {
    id: string;
    img: string;
    name: string;
    author: string;
};

function BookCard({ id, img, name, author }: BookCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [customShelf, setCustomShelf] = useState("");
  const [confirmRemoveShelf, setConfirmRemoveShelf] = useState<string | null>(null);
  const { shelves, addBookToShelf, addShelf, removeBookFromShelf } = useShelves();
  const navigate = useNavigate(); 

  const book = { id, name, author, img };
//   const cleanId = id.replace('/works/', '');
  console.log(id);
const cleanId = id && typeof id === 'string' && id.startsWith('/works/') ? id.replace('/works/', '') : id;


  const isBookInShelf = (shelfName: string) =>
    shelves.find((shelf) => shelf.name === shelfName)?.books.some(
      (b) => b.name === name && b.author === author
    );

  const handleShelfClick = (shelfName: string) => {
    if (isBookInShelf(shelfName)) {
      setConfirmRemoveShelf(shelfName);
    } else {
      handleShelfSelect(shelfName);
    }
  };

  const handleBookmarkClick = () => {
    setShowPopup(!showPopup);
  };

  const handleShelfSelect = (shelfName: string) => {
    const book = { id, name, author, img };
    addBookToShelf(shelfName, book);
    setShowPopup(false);
    alert(`Added to shelf: ${shelfName}`);
  };

  const handleCreateShelf = () => {
    if (customShelf.trim()) {
      addShelf(customShelf.trim());
      setCustomShelf("");
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div onClick={() => navigate(`/home/${cleanId}`)} className="book-card">
        <img src={img} alt={name} className="book-card-image" />
        <div className="book-card-info">
            <h3 className="book-card-name">{name}</h3>
            <p className="book-card-author">{author}</p>
        </div>
        <BookmarkIcon book={{ id, name, author, img }} onClick={handleBookmarkClick} className="shelf-icon"/>

        {showPopup && !confirmRemoveShelf && (
            <div className="shelf-popup">
                <div className="shelf-popup-header">
                <h3>Add to shelf:</h3>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                </div>
                {shelves.map((shelf) => (
                    <Button key={shelf.name} variant="secondary" onClick={() => handleShelfClick(shelf.name)} className="shelf-button">{shelf.name}
                        {isBookInShelf(shelf.name) && (
                            <BookmarkIcon book={book} className="" size={20} />
                        )}
                    </Button>
                ))}

                <div className="custom-shelf">
                    <input type="text" placeholder="Create new shelf..." value={customShelf} onChange={(e) => setCustomShelf(e.target.value)}/>
                    <Button variant="primary" onClick={handleCreateShelf}>Create</Button>
                </div>
            </div>
        )}

        {confirmRemoveShelf && (
        <div className="confirm-remove-popup">
            <p>Remove {name} from {confirmRemoveShelf}-shelf?</p>
            <div className="popup-buttons">
            <Button variant="secondary" onClick={() => setConfirmRemoveShelf(null)}>Cancel</Button>
            <Button variant="primary" onClick={() => { removeBookFromShelf(confirmRemoveShelf, book); setConfirmRemoveShelf(null); setShowPopup(false);}}>Yes</Button>
            </div>
        </div>
        )}
    </div>

    
  );
}

export default BookCard;
