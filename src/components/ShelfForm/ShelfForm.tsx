import React, { useState } from "react";
import { useShelves } from "../../context/ShelvesContext";
import './ShelfForm.scss'
import Button from "../Button/Button";

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
        <div className="shelf-wrapper">
        <form className="shelf-form" onSubmit={handleSubmit}>
            <input className="shelf-form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Shelf name..."/>
            <div className="shelf-form-button-wrapper">
                <Button variant="primary" type="submit">Add Shelf</Button>
                <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
            </div>
        </form>
        </div>
    );
};

export default ShelfForm;