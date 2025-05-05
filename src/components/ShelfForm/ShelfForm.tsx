import React, { useState } from "react";
import { useShelves } from "../../context/ShelvesContext";
import './ShelfForm.scss'

type ShelfFormProps = {
  onClose: () => void;
};

const ShelfForm = ({ onClose }: ShelfFormProps) => {
  const [name, setName] = useState("");
  const { addShelf } = useShelves();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addShelf(name.trim());
      setName("");
      onClose();
    }
  };

  return (
    <div className="shelf-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Shelf Name"
        />
        <button type="submit">Add Shelf</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ShelfForm;