import './SearchCategory.scss'

type SearchCategoryProps = {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
};

const SearchCategory = ({ selectedFilter, onSelectFilter }: SearchCategoryProps) => {
  return (
    <div className="filter-options">
      <button
        className={selectedFilter === "title" ? "active" : ""}
        onClick={() => onSelectFilter("title")}
      >
        Title
      </button>
      <button
        className={selectedFilter === "author" ? "active" : ""}
        onClick={() => onSelectFilter("author")}
      >
        Author
      </button>
      <button
        className={selectedFilter === "subject" ? "active" : ""}
        onClick={() => onSelectFilter("subject")}
      >
        Subject
      </button>
    </div>
  );
};

export default SearchCategory;
