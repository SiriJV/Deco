import React, { useState } from "react";
import './BookmarkIcon.scss';
import Button from "../Button/Button";
import { useShelves } from "../../context/ShelvesContext";
import { Book } from "../../context/ShelvesContext";

type BookmarkIconProps = {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    book: Book;
    size?: number;
};

const BookmarkIcon = ({ className = "", onClick, book, size = 24}: BookmarkIconProps) => {
    const { shelves } = useShelves();

    const isBookmarked = shelves.some(shelf =>
      shelf.books.some(b => b.name === book.name && b.author === book.author)
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (onClick) {
        onClick(e);
        }
    };

    return (
        <Button variant="link" onClick={handleClick} className={className}>
        {isBookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
        )}
        </Button>
    );
};

export default BookmarkIcon;
