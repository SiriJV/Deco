import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import SearchResult from "../../components/SearchResult/SearchResult";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import './Home.scss'
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import { favouriteBooks } from "../../data/genreBooks";
import { scienceFictionBooks } from "../../data/genreBooks";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        const query = searchParams.get("query");
        const filter = searchParams.get("filter");
        if (query && filter) {
          handleSearch(query, filter);
        }
      }, [searchParams]);

    const query = searchParams.get("query");

    const handleSearch = async (query: string, filter: string) => {
        setLoading(true);
        try {
          const response = await fetch(`https://openlibrary.org/search.json?${filter}=${encodeURIComponent(query)}`);
          const data = await response.json();
          setBooks(data.docs.slice(0, 20));
        } catch (error) {
          console.error("Error fetching books:", error);
        } finally {
          setLoading(false);
        }
    };
      
    return (
        <section className="home-page">
          <SearchBar />
          {books.length > 0 && query && (
              <p className="search-info">Showing search results for "{query}"</p>
          )}
          <SearchResult books={books} loading={loading} />
          {!loading && books.length === 0 && (
          <div className="no-results">
              <div className="book-carousel-wrapper">
                  <BookCarousel title="Developers’ favourites" books={favouriteBooks} genre="science fiction"/>
                  <BookCarousel title="Science fiction" books={scienceFictionBooks} genre="science fiction"/>
                  <BookCarousel title="Developers’ favourites" books={favouriteBooks} genre="science fiction"/>
                  <BookCarousel title="Science fiction" books={scienceFictionBooks} genre="science fiction"/>
              </div>
          </div>
          )}
          <Outlet />
          <div className="search-filler"></div>
        </section>
    )
}

export default Home