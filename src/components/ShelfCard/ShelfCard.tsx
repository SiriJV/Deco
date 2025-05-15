import './ShelfCard.scss'

import React, { useState } from "react";
import { Book } from "../../context/ShelvesContext";
import { useShelves } from "../../context/ShelvesContext";
import SmallBookCard from '../SmallBookCard/SmallBookCard';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

type ShelfCardProps = {
  name: string;
};

const ShelfCard = ({ name }: ShelfCardProps) => {
  const { shelves, removeShelf, editShelf, removeBookFromShelf } = useShelves();
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const shelf = shelves.find((shelf) => shelf.name === name);
  const shelfBooks = shelf ? shelf.books : [];

  const handleRemoveBook = (index: number) => {
    const bookToRemove = shelfBooks[index];
    removeBookFromShelf(name, bookToRemove);
  };

  const handleSave = () => {
    editShelf(name, newName);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewName(name);
    // setShelfBooks(books);
  };

  const navigate = useNavigate();
    
    const handleExploreBooks = () => {
      navigate("/home");
    };

  return (
    <div className="shelf">
      {editing ? (
        <section className="shelf-card-header-editing">
          <input className="shelf-card-editing-input" value={newName} onChange={(e) => setNewName(e.target.value)}/>
          <Button variant="default" onClick={() => removeShelf(name)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </Button>
        </section>
      ) : (
        <>
        <div className="shelf-card-header">
            <h3>{name} ({shelfBooks.length})</h3>
            <Button variant="default" onClick={() => setEditing(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen-line-icon lucide-pen-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
            </Button>
        </div>
        </>
      )}

      <div className="books-list">
        {shelfBooks.length === 0 ? (
          <p>This shelf is empty for now. <Button variant="link" onClick={handleExploreBooks}>Explore books</Button> to fill it with stories you love.</p>
        ) : (
          shelfBooks.map((book, index) => (
            <div key={index}>
              <SmallBookCard {...book} />
              {editing && (
                <Button variant="link" className="remove-book-from-shelf-button-2" onClick={() => handleRemoveBook(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </Button>
              )}
            </div>
          ))
        )}
      </div>

      {editing ? (
        <section className="shelf-card-button-wrapper">
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </section>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default ShelfCard;