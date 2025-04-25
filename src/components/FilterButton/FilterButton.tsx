import { useState } from 'react';
import './FilterButton.scss';

const genres = ['fantasy', 'scifi', 'ngt mer', 'blablabla', 'sista'];

const BookFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    author: '',
    genre: '',
    minPages: 0,
    maxPages: 1000
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [authorSearch, setAuthorSearch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = () => {
    onFilter(filters);
    setModalOpen(false);
  };

  return (
    <div className="filter-wrapper">
      <button className="open-filter-button" onClick={() => setModalOpen(true)}>
        Filter
      </button>

      {modalOpen && (
        <div className="filter-modal">
          <div className="modal-header">
            <h2>Filter by:</h2>
            <button onClick={() => setModalOpen(false)}>&times;</button>
          </div>
          <div className="filter-group">
            {authorSearch ? (
              <input type="text" name="author" placeholder="Filter by author" value={filters.author} onChange={(e) => setFilters({ ...filters, author: e.target.value })}/>
            ) : (
              <button className="search-author-button" onClick={() => setAuthorSearch(true)}>
                Author
              </button>
            )}

            <select name="subject" value={filters.genre} onChange={(e) => setFilters({ ...filters, genre: e.target.value })}>
              <option value="">Genre</option>
              {genres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <div className="slider-wrapper">
              <label>Pages: {filters.minPages} - {filters.maxPages}</label>
              <input type="range" name="minPages" min="0" max="2000" value={filters.minPages} onChange={handleChange}/>
              <input type="range" name="maxPages" min="0" max="2000" value={filters.maxPages} onChange={handleChange}/>
            </div>

            <button className="apply-button" onClick={handleSubmit}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookFilter;