import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar"
import SearchResult from "../components/SearchResult/SearchResult";
import { Outlet } from "react-router-dom";
import './Home.scss'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
  
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
        <SearchBar onSearch={handleSearch}/>
        <SearchResult books={books} loading={loading} />
        <Outlet />
        </section>
    )
}

export default Home