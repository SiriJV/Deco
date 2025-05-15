import Button from '../Button/Button';
import './SearchCategory.scss'

type SearchCategoryProps = {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
};

const SearchCategory = ({ selectedFilter, onSelectFilter }: SearchCategoryProps) => {
  return (
    <div className="filter-options">
        <p>Search books by:</p>
        <div className="filter-button-wrapper">
            <Button variant="secondary" className={selectedFilter === "title" ? "filter-button active" : "filter-button"} onClick={() => onSelectFilter("title")}>Title</Button>
            <Button variant="secondary" className={selectedFilter === "author" ? "filter-button active" : "filter-button"} onClick={() => onSelectFilter("author")}>Author</Button>
            <Button variant="secondary" className={selectedFilter === "subject" ? "filter-button active" : "filter-button"} onClick={() => onSelectFilter("subject")}>Subject</Button>
        </div>
    </div>
  );
};

export default SearchCategory;
