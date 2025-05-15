import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './BookModal.scss';
import Rating from './Rating/Rating';

type Author = {
    author: {
        key: string;
      };
};

type BookDetails = {
    title: string;
    description?: string | { value: string };
//   authors?: Author[];
    authors?: Author[];
    covers?: number[];
    subjects?: string[];
};

const BookModal = () => {
    const { bookId } = useParams();
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
    const navigate = useNavigate();
    const [authorNames, setAuthorNames] = useState<string>("");
    const [pageCount, setPageCount] = useState<number | null>(null);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
    const fetchAuthors = async () => {
        if (!bookDetails?.authors) return;

        try {
        const names = await Promise.all(
            bookDetails.authors.map(async ({ author }) => {
            const res = await fetch(`https://openlibrary.org${author.key}.json`);
            const data = await res.json();
            return data.name;
            })
        );
        setAuthorNames(names.join(", "));
        } catch (error) {
        console.error("Failed to fetch author names:", error);
        setAuthorNames("Unknown Author");
        }
    };

    fetchAuthors();
    }, [bookDetails]);

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

    useEffect(() => {
        const fetchPageCount = async () => {
            try {
                setPageLoading(true);
                const res = await fetch(`https://openlibrary.org/works/${bookId}/editions.json`);
                const data = await res.json();
                console.log("Fetched editions data:", data);
    
                const editionWithPages = data.entries.find((ed: any) => ed.number_of_pages);
    
                setPageCount(editionWithPages?.number_of_pages ?? null);
            } catch (err) {
                console.error("Error fetching page count:", err);
                setPageCount(null); 
            } finally {
                setPageLoading(false);
            }
        };
    
        if (bookId) fetchPageCount(); 
    }, [bookId]);

    if (!bookDetails) {
        return <p className="loading-details">Loading book details...</p>;
    }

    const description = typeof bookDetails.description === "string" ? bookDetails.description : bookDetails.description?.value || "No description available.";

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
                {/* <p>{authors}</p> */}
                <p>{authorNames || "Unknown Author"}</p>
                <p>Description: {description}</p>
                {bookDetails.subjects && (
                    <p>Genres/Topics: {bookDetails.subjects.slice(0, 5).join(', ')}</p>
                )}
                {pageLoading ? ( <p>Loading page count...</p> ) : pageCount ? ( <p>{pageCount} pages</p> ) : ( <p>Page count not available</p> )}
                <Rating title={bookDetails.title} />
            </section>
        </div>
    );
};

export default BookModal;
