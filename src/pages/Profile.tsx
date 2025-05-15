import { useNavigate } from 'react-router-dom';
import { useShelves } from '../context/ShelvesContext';
import './Profile.scss'
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
import { getTotalPagesForShelf } from '../utils/getTotalPagesForShelf';

const ratedBooks = [
    { name: "Example 1", rating: 5 },
    { name: "Example 2", rating: 4 },
    { name: "Example 3", rating: 5 },
    { name: "Example 4", rating: 4 },
    { name: "Example 5", rating: 5 },
    { name: "Example 6", rating: 4 },
  ];
  
  const reviewedBooks = [
    { name: "Example 1", review: "A moving, introspective read." },
    { name: "Example 2", review: "Still incredibly relevant. A moving, introspective read." },
    { name: "Example 3", review: "A moving, introspective read. Still incredibly relevant." },
    { name: "Example 4", review: "Still incredibly relevant." },
  ];
  

const Profile= () => {
    const { shelves } = useShelves();
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();
    const readShelf = shelves.find(shelf => shelf.name === "Read");
    const readCount = readShelf ? readShelf.books.length : 0;
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function calculateTotalPages() {
          setLoading(true);
          const readShelf = shelves.find(shelf => shelf.name === "Read");
          if (!readShelf || readShelf.books.length === 0) {
            setTotalPages(0);
            setLoading(false);
            return;
          }
    
          const total = await getTotalPagesForShelf(readShelf.books);
          setTotalPages(total);
          setLoading(false);
        }
    
        calculateTotalPages();
      }, [shelves]);
    
    const handleSeeAllShelves = () => {
      navigate("/mybooks");
    };
    
    return (
        <article className="profile-page">
            <section className="profile">
                <img src="public\images\profile.jpg"></img>
                <div className="profile-info">
                    <div className="profile-info-header">
                        <h3>John Doe</h3>
                        <Button variant="default" onClick={() => setEditing(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen-line-icon lucide-pen-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                        </Button>
                    </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
            <section className="statistics">
                <h2>Statistics</h2>
                <div className="stats">
                    <div><span>{loading ? "Loading..." : totalPages ?? 0}</span>pages read</div>
                    <div><span>{readCount}</span>books read</div>
                    <div><span>4</span>genres read</div>
                </div>
            </section>
            <section className="shelves-section">
                <div className="shelves-header">
                <h2>Shelves</h2>
                <Button variant="link" onClick={handleSeeAllShelves}>See all shelves</Button>
                </div>
                <div className="scroll-row">
                    {shelves.map((shelf, index) => (
                    <div key={index} className="shelf-card">
                        <h3>{shelf.name}</h3>
                        <div className="shelf-books">
                        {shelf.books.slice(0, 3).map((book, idx) => (
                            <div key={idx} className="book-preview">
                            <img src={book.img} alt={book.name} />
                            </div>
                        ))}
                        {shelf.books.length === 0 && (
                            <p>No books yet</p>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            <section className="ratings">
                <div className="ratings-header">
                <h2>Ratings</h2>
                <Button variant="link">See all ratings</Button>
                </div>
                <div className="scroll-row">
                    {ratedBooks.slice(0, 5).map((book, index) => (
                    <div key={index} className="rating-card">
                        <div className="rating-title">{book.name}</div>
                        <div className="book-rating">⭐⭐⭐⭐⭐ {book.rating}/5</div>
                    </div>
                    ))}
                </div>
            </section>
            <section className="reviews">
                <div className="reviews-header">
                <h2>Reviews</h2>
                <Button variant="link">See all reviews</Button>
                </div>
                <div className="scroll-row">
                    {reviewedBooks.slice(0, 5).map((book, index) => (
                    <div key={index} className="review-card">
                        <div className="review-title">{book.name}</div>
                        <div className="book-review">"{book.review.slice(0, 50)}..."</div>
                    </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>Favorite genres</h2>
            </section>
            <section>
                <h2>Favorite authors</h2>
            </section>
        </article>
    )
}

export default Profile