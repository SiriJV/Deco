import './Explore.scss'
import BookCarousel, { Book } from "../components/BookCarousel/BookCarousel";
import { Outlet } from 'react-router-dom';

const mockBooks: Book[] = [
  {
    key: "OL1M",
    title: "Strange The Dreamer",
    author_name: ["Laini Taylor"],
    cover_i: 8597976,
  },
  {
    key: "OL2M",
    title: "Fifteen Dogs",
    author_name: ["André Alexis"],
    cover_i: 8462871,
  },
  {
    key: "OL3M",
    title: "Bunny",
    author_name: ["Mona Awad"],
    cover_i: 8807371,
  },
  {
    key: "OL2M",
    title: "Mockingjay",
    author_name: ["Suzanne Collins"],
    cover_i: 234567,
  },
  {
    key: "OL1M",
    title: "All's Well",
    author_name: ["Mona Awad"],
    cover_i: 123456,
  },
  {
    key: "OL3M",
    title: "Klara and the Sun",
    author_name: ["Kazuo Ishiguro"],
    cover_i: 345678,
  },
  {
    key: "OL1M",
    title: "Fear and Trembling",
    author_name: ["Søren Kierkegaard"],
    cover_i: 123456,
  },
  {
    key: "OL3M",
    title: "Normal People",
    author_name: ["Sally Rooney"],
    cover_i: 345678,
  },
  {
    key: "OL1M",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author_name: ["Gabrielle Zevin"],
    cover_i: 123456,
  },
  {
    key: "OL2M",
    title: "Holes",
    author_name: [""],
    cover_i: 234567,
  },
  {
    key: "OL2M",
    title: "The Hobbit",
    author_name: ["J.R.R. Tolkien"],
    cover_i: 234567,
  },
  {
    key: "OL3M",
    title: "Pride and Prejudice",
    author_name: ["Jane Austen"],
    cover_i: 345678,
  }
];

const Explore = () => {
    return (
        <article className="explore-page">
            <div>
                <BookCarousel title="Developers’ favourites" books={mockBooks} />
            </div>
            <Outlet />
        </article>
    )
}

export default Explore