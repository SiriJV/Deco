# Decoshelf

A React-based application where users can explore books, organize them into shelves, and leave ratings and reviews.

---

## Features

- Search books by title, author, or subject
- Create custom shelves and organize books
- Bookmark books to your shelves
- Rate books on a scale from 1 to 5 stars
- Track total pages read (via the "Read"-shelf)
- Edit or delete shelves and their content

---

## Techstack

- React with TypeScript
- SCSS for styling
- React Router for navigation
- OpenLibrary API for fetching book data

---

## API

This app uses the [OpenLibrary API](https://openlibrary.org/developers/api) for book data. No API key is required for basic access.

---

## Folder structure

src/
├── components/
├── context/
├── utils/
├── pages/
├── styles/
├── layouts/
├── data/
└── App.tsx

---

## Download and run project

1. Clone the repo  
   `git clone https://github.com/SiriJV/Deco.git`

2. Install dependencies  
   `npm install`

3. Run the app  
   `npm run dev`
   
---

## Contributing

Contributions are welcome and appreciated! Here are a few ideas for what you could help with:

Search
- Show recent searches
- Add search result pagination or infinite scroll

Design
- Improve mobile layout and navigation
- Ensure keyboard navigation and screen reader support
- Add light mode toggle
- Add transitions to modals, shelf edits, or book cards
- Animate star ratings, hover states and loading
- Add toast messages for actions like adding and removing books from shelves

Book details
- Add more detailed book info

User profile
- Make user profile editable (username, avatar, bio)

Author profiles
- Enable searching for authors
- Show an author's bio, portrait, and list of works
- Link from a book's card to its author

If you're interested in contributing:

1. Fork this repo
2. Create a feature branch
3. Commit your changes and push
4. Open a pull request

---

## License

MIT License
