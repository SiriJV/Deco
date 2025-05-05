import { useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { useShelves } from "../context/ShelvesContext";
import ShelfForm from "../components/ShelfForm/ShelfForm";

import './MyBooks.scss'
import ShelfCard from "../components/ShelfCard/ShelfCard";

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
    <button onClick={handleAddNewShelf} className="add-shelf-button">
        Add New Shelf
    </button>
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
