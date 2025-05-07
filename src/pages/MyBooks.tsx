import { useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { useShelves } from "../context/ShelvesContext";
import ShelfForm from "../components/ShelfForm/ShelfForm";

import './MyBooks.scss'
import ShelfCard from "../components/ShelfCard/ShelfCard";
import Button from "../components/Button/Button";

const MyBooks = () => {
  const { shelves, removeShelf, editShelf, addShelf } = useShelves();
  const [showShelfForm, setShowShelfForm] = useState(false);

  const handleRemoveShelf = (shelfName: string) => {
    removeShelf(shelfName);
  };

  const handleAddNewShelf = () => {
    setShowShelfForm(true);
  };

  return (
    <article className="mybooks-page">
        <div className="main-content">
            <Button variant="default" onClick={handleAddNewShelf} className="add-shelf-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </Button>
            <div className="shelves">
                {shelves.map((shelf) => (
                <ShelfCard key={shelf.name} name={shelf.name} books={shelf.books} />
                ))}

                {showShelfForm && (
                    <ShelfForm onClose={() => setShowShelfForm(false)} />
                )}
            </div>
        </div>
    </article>
  );
};

export default MyBooks;