import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './BookModal.scss';

type Author = {
  name: string;
};

type BookDetails = {
  title: string;
  description?: string | { value: string };
  authors?: Author[];
  covers?: number[];
  subjects?: string[];
};

const BookModal = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  if (!bookDetails) {
    return <div>Loading book details...</div>;
  }

  const description =
    typeof bookDetails.description === "string"
      ? bookDetails.description
      : bookDetails.description?.value || "No description available.";

  const authors = bookDetails.authors?.map((author) => author.name).join(", ") || "Unknown Author";

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="book-modal">
        <Button variant="link" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </Button>
        <img src={bookDetails.covers?.[0] ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg` : "https://via.placeholder.com/200x300?text=No+Cover"} alt="Book Cover"/>
        <section className="book-details">
            <h2>{bookDetails.title}</h2>
            {bookDetails.subjects && (
                <p>Genres/Topics: {bookDetails.subjects.slice(0, 5).join(', ')}</p>
            )}
            <p>Author(s): {authors}</p>
            <p>Description: {description}</p>
        </section>
    </div>
  );
};

export default BookModal;
