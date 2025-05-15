import { createContext, useContext, useState, ReactNode } from 'react';

type BookRating = {
    title: string;
    rating: number;
  };
  
type AllRatings = {
    [bookId: string]: BookRating;
};
  
type RatingContextType = {
    ratings: AllRatings;
    setRating: (bookId: string, title: string, rating: number) => void;
};

const RatingContext = createContext<RatingContextType | undefined>(undefined);

export const RatingProvider = ({ children }: { children: ReactNode }) => {
    const [ratings, setRatings] = useState<AllRatings>({});

    const setRating = (bookId: string, title: string, rating: number) => {
      setRatings((prev) => ({
        ...prev,
        [bookId]: { title, rating },
      }));
    };

    return (
      <RatingContext.Provider value={{ ratings, setRating }}>
        {children}
      </RatingContext.Provider>
    );
};

export const useRatingContext = () => {
    const context = useContext(RatingContext);
    if (!context) {
      throw new Error('useRatingContext must be used within a RatingProvider stoopid');
    }
    return context;
};
