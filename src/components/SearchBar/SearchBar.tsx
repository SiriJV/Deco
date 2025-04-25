import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Sök här yay..."
      />
    </div>
  );
};

export default SearchBar;
