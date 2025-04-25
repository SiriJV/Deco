import './BookModal.scss'

type BookModalProps = {
    img: string;
    name: string;
    author: string;
    description: string;
    rating: number;
    pages: number;
    genres: string;
    published: string;
    edition: string;
  };

const BookModal = ({ img, name, author, description, rating, pages, genres, published, edition }: BookModalProps) => {
    return (
        <>
        <div className="book-modal">
            <img src={img} alt={name} className="book-modal-image" />
            <div className="book-modal-info">
                <h3 className="book-modal-name">{name}</h3>
                <p className="book-modal-author">{author}</p>
                <p className="book-modal-description">{description}</p>
                <p className="book-modal-rating">{rating}</p>
                <p className="book-modal-pages">Amount of pages: {pages}</p>
                <p className="book-modal-genres">Genres: {genres}</p>
                <p className="book-modal-published">Date published: {published}</p>
                <p className="book-modal-edition">Edition: {edition}</p>
            </div>
        </div>
        </>
    )
}

export default BookModal