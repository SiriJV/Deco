import BookCard from "../BookCard/BookCard";
import './SearchResult.scss'

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  numberOfPages?: number;
};

type SearchResultProps = {
  books: Book[];
  loading: boolean;
};

function SearchResult({ books, loading }: SearchResultProps) {
  if (loading) {
    return <p className="loading-text">Loading books...</p>;
  }

  if (books.length === 0) {
    return <p className="search-info">No results found.</p>;
  }

  return (
    <div className="search-results">
      {books.map((book) => (
        <BookCard
          id={book.key}
          img={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/150x200?text=No+Cover"
          }
          name={book.title}
          author={book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          numberOfPages={book.numberOfPages}
        />
      ))}
    </div>
  );
}

export default SearchResult;
