import { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || {};
    setReviews(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (productId, review) => {
    setReviews(prev => ({
      ...prev,
      [productId]: [...(prev[productId] || []), review]
    }));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};