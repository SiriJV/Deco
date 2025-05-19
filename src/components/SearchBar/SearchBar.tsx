import { useState } from "react";
import './SearchBar.scss'
import SearchCategory from "../SearchCategory/SearchCategory";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("title");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/home?query=${encodeURIComponent(query)}&filter=${filter}`);
    }
  };

  return (
    <div className="search-bar">
      <form className="search-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        </button>
      </form>

      {query && (
        <SearchCategory
          selectedFilter={filter}
          onSelectFilter={setFilter}
        />
      )}
    </div>
  );
}

export default SearchBar;