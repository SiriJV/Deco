import { createContext, ReactNode, useContext, useState } from "react";

export type Book = {
    id: string;
    name: string;
    author: string;
    img: string;
};

type Shelf = {
    name: string;
    books: Book[];
};

type ShelvesContextType = {
    shelves: Shelf[];
    addShelf: (name: string) => void;
    addBookToShelf: (shelfName: string, book: Book) => void;
    removeShelf: (name: string) => void;
    editShelf: (oldName: string, newName: string) => void;
    removeBookFromShelf: (shelfName: string, book: Book) => void;
};

const ShelvesContext = createContext<ShelvesContextType | undefined>(undefined);

type ShelvesProviderProps = {
    children: ReactNode;
  };

export const ShelvesProvider = ({ children }: ShelvesProviderProps) => {
  const [shelves, setShelves] = useState<Shelf[]>([
    {
      name: "Favorites",
      books: [],
    },
    {
      name: "Read",
      books: [],
    },
    {
      name: "Want to read",
      books: [],
    },
  ]);

  const addShelf = (name: string) => {
    setShelves((prevShelves) => [
      ...prevShelves,
      { name, books: [] },
    ]);
  };

  const addBookToShelf = (shelfName: string, book: Book) => {
    setShelves((prevShelves) => {
      const updatedShelves = prevShelves.map((shelf) =>
        shelf.name === shelfName
          ? { ...shelf, books: [...shelf.books, book] }
          : shelf
      );
      return updatedShelves;
    });
  };

  const removeShelf = (name: string) => {
    setShelves((prevShelves) => prevShelves.filter((shelf) => shelf.name !== name));
  };

  const editShelf = (oldName: string, newName: string) => {
    setShelves((prevShelves) =>
      prevShelves.map((shelf) =>
        shelf.name === oldName ? { ...shelf, name: newName } : shelf
      )
    );
  };

  const removeBookFromShelf = (shelfName: string, bookToRemove: Book) => {
    setShelves((prevShelves) =>
      prevShelves.map((shelf) =>
        shelf.name === shelfName
          ? {
              ...shelf,
              books: shelf.books.filter(
                (b) => b.name !== bookToRemove.name || b.author !== bookToRemove.author
              ),
            }
          : shelf
      )
    );
  };

  return (
    <ShelvesContext.Provider value={{ shelves, addShelf, addBookToShelf, removeShelf, editShelf, removeBookFromShelf }}>
      {children}
    </ShelvesContext.Provider>
  );
};

export const useShelves = () => {
  const context = useContext(ShelvesContext);
  if (!context) {
    throw new Error("hej dumbo, shelves context är undefined fixa det omedelbums");
  }
  return context;
};