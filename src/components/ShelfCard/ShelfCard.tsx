import './ShelfCard.scss'

import React, { useState } from "react";
import { Book } from "../../context/ShelvesContext";
import { useShelves } from "../../context/ShelvesContext";
import SmallBookCard from '../SmallBookCard/SmallBookCard';

type ShelfCardProps = {
  name: string;
  books: Book[];
};

const ShelfCard: React.FC<ShelfCardProps> = ({ name, books }) => {
  const { removeShelf, editShelf, addBookToShelf } = useShelves();
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [shelfBooks, setShelfBooks] = useState<Book[]>(books);

  const handleRemoveBook = (index: number) => {
    const updatedBooks = [...shelfBooks];
    updatedBooks.splice(index, 1);
    setShelfBooks(updatedBooks);
  };

  const handleSave = () => {
    editShelf(name, newName);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewName(name);
    setShelfBooks(books);
  };

  return (
    <div className="shelf">
      {editing ? (
        <>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={() => removeShelf(name)}>Delete shelf</button>
        </>
      ) : (
        <>
        <div className="shelf-card-header">
          <h3>{name} ({books.length})</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
        </>
      )}

      <div className="books-list">
        {shelfBooks.length === 0 ? (
          <p>Empty</p>
        ) : (
          shelfBooks.map((book, index) => (
            <div key={index}>
              <SmallBookCard {...book} />
              {editing && (
                <button onClick={() => handleRemoveBook(index)}>Remove</button>
              )}
            </div>
          ))
        )}
      </div>

      {editing ? (
        <>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default ShelfCard;