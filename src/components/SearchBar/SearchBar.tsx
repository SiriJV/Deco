import { useState } from "react";
import './SearchBar.scss'
import SearchCategory from "../SearchCategory/SearchCategory";

type SearchBarProps = {
  onSearch: (query: string, filter: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("title");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), filter);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
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

