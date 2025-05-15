import { useEffect, useState } from "react";
import "./BookCard.scss";
import { useShelves } from "../../context/ShelvesContext";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';
import { fetchPageCount } from "../../pages/Ratings/Ratings"; 

type BookCardProps = {
    id: string;
    img: string;
    name: string;
    author: string;
    numberOfPages?: number;
};

function BookCard({ id, img, name, author, numberOfPages }: BookCardProps) {
    const [showPopup, setShowPopup] = useState(false);  
    const [customShelf, setCustomShelf] = useState(""); 
    const [confirmRemoveShelf, setConfirmRemoveShelf] = useState<string | null>(null); 
    const { shelves, addBookToShelf, addShelf, removeBookFromShelf } = useShelves();
    const navigate = useNavigate(); 

    const [pageCount, setPageCount] = useState<number | null>(null);
    const [pageLoading, setPageLoading] = useState(false);

    // const book = { id, name, author, img, numberOfPages };
    const cleanId = id && typeof id === 'string' && id.startsWith('/works/') ? id.replace('/works/', '') : id;

    useEffect(() => {
        const fetchPageCount = async () => {
            try {
                setPageLoading(true);
                const res = await fetch(`https://openlibrary.org/works/${cleanId}/editions.json`);
                const data = await res.json();

                const editionWithPages = data.entries.find((ed: any) => ed.number_of_pages);

                setPageCount(editionWithPages?.number_of_pages ?? null);
            } catch (err) {
                console.error("Error fetching page count:", err);
                setPageCount(null);
            } finally {
                setPageLoading(false);
            }
        };

        if (cleanId) fetchPageCount();
    }, [cleanId]);

    const book = { id, name, author, img, numberOfPages: pageCount ?? undefined };

    const isBookInShelf = (shelfName: string) =>
        shelves.find((shelf) => shelf.name === shelfName)?.books.some(
        (b) => b.name === name && b.author === author
        );

    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (confirmRemoveShelf) return;
        
        setShowPopup(!showPopup);  
    };

    const handleShelfClick = (shelfName: string) => {
        if (isBookInShelf(shelfName)) {
        setShowPopup(false); 
        setConfirmRemoveShelf(shelfName);
        } else {
        handleShelfSelect(shelfName);
        }
    };

    const handleShelfSelect = (shelfName: string) => {
        if (shelfName === "read") {
            addBookToShelf(shelfName, book);
        } else {
            addBookToShelf(shelfName, { id, name, author, img, numberOfPages });
        }
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

    const handleRemoveCancel = () => {
        setConfirmRemoveShelf(null);
    };

    const handleRemoveConfirm = () => {
        if (confirmRemoveShelf) {
        removeBookFromShelf(confirmRemoveShelf, book);
        setConfirmRemoveShelf(null);
        setShowPopup(false);
        }
    };

    return (
        <div onClick={() => navigate(`/home/${cleanId}`)} className="book-card">
            <img src={img} alt={name} className="book-card-image" />
            <div className="book-card-info">
                <h3 className="book-card-name">{name}</h3>
                <p className="book-card-author">{author}</p>
                <li>Pages: {pageCount}</li>
            </div>
            <BookmarkIcon book={{ id, name, author, img }} onClick={handleBookmarkClick} className="shelf-icon"/>

            {showPopup && !confirmRemoveShelf && (
                <div className="shelf-popup" onClick={(e) => e.stopPropagation()}>
                    <div className="shelf-popup-header">
                        <h3>Add to shelf:</h3>
                        <Button variant="secondary" onClick={(e) => {e.stopPropagation(); handleCancel();}}>Cancel</Button>
                    </div>
                    {shelves.map((shelf) => (
                        <Button key={shelf.name} variant="secondary" onClick={(e) => {e.stopPropagation(); handleShelfClick(shelf.name);}} className="shelf-button">
                            {shelf.name}
                            {isBookInShelf(shelf.name) && (
                                <BookmarkIcon book={book} className="" size={20} />
                            )}
                        </Button>
                    ))}
                    <div className="custom-shelf">
                        <input type="text" placeholder="Create new shelf..." value={customShelf} onChange={(e) => setCustomShelf(e.target.value)} />
                        <Button variant="primary" onClick={(e) => {e.stopPropagation(); handleCreateShelf();}}>Create</Button>
                    </div>
                </div>
            )}

            {confirmRemoveShelf && (
                <div className="confirm-remove-popup" onClick={(e) => e.stopPropagation()}>
                    <p>Remove {name} from {confirmRemoveShelf}-shelf?</p>
                    <div className="popup-buttons">
                        <Button variant="secondary" onClick={handleRemoveCancel}>Cancel</Button>
                        <Button variant="primary" onClick={handleRemoveConfirm}>Yes</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookCard;
