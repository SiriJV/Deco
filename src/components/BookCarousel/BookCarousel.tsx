import { useEffect, useRef, useState } from "react";
import BookCard from "../BookCard/BookCard";
import './BookCarousel.scss'
import Button from "../Button/Button";

export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
};

type BookCarouselProps = {
  title: string;
  books?: Book[];
};

const BookCarousel = ({ title, books }: BookCarouselProps) => {
  const [carouselBooks, setCarouselBooks] = useState<Book[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <Button variant="link" onClick={() => alert(`se alla böcker i "${title}"`)}>See more</Button>
      </div>

      <div className="scroll-area">
        {/* <button onClick={() => scroll("left")}>left</button> */}

        <div className="carousel-content">
          {carouselBooks.map((book) => (
            <BookCard
              key={book.key}
              name={book.title}
              author={book.author_name?.[0] || "Unknown"}
              img={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "/placeholder.jpg"
              }
            />
          ))}
        </div>

        {/* <button onClick={() => scroll("right")}>right</button> */}
      </div>
    </div>
  );
};

export default BookCarousel;
