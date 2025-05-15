import { useEffect, useRef, useState } from "react";
import BookCard from "../BookCard/BookCard";
import './BookCarousel.scss'
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  numberOfPages?: number;
};

type BookCarouselProps = {
  title: string;
  books?: Book[];
  genre: string;
};

const BookCarousel = ({ title, books, genre }: BookCarouselProps) => {
    const [carouselBooks, setCarouselBooks] = useState<Book[]>([]);
    // const scrollRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const handleSeeMore = () => {
      navigate(`/home?filter=subject&query=${encodeURIComponent(genre)}`);
    };

    useEffect(() => {
      if (books) {
        setCarouselBooks(books);
      } else {
        fetch("https://openlibrary.org/subjects/love.json?limit=20")
          .then((res) => res.json())
          .then((data) => setCarouselBooks(data.works))
          .catch((err) => console.error("Fetch failed:", err));
      }
    }, [books]);

    return (
      <div className="book-carousel">
        <div className="carousel-header">
          <h2>{title}</h2>
          <Button variant="link" onClick={handleSeeMore}>See more</Button>
        </div>

        <div className="scroll-area">
          {/* <button onClick={() => scroll("left")}>left</button> */}

          <div className="carousel-content">
              {carouselBooks.map((book) => (
              <BookCard
                  id={book.key}
                  name={book.title}
                  author={book.author_name?.[0] || "Unknown"}
                  img={
                      book.cover_i
                          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                          : "/placeholder.jpg"
                      }
                  numberOfPages={book.numberOfPages}
                  />
              ))}
          </div>

          {/* <button onClick={() => scroll("right")}>right</button> */}
        </div>
      </div>
    );
};

export default BookCarousel;
