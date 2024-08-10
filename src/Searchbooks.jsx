/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SearchBooks = ({ onAddToBookshelf, onViewDetails }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      );
      const data = await response.json();
      setResults(data.items || []);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <div className="search-books">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={searchBooks}>Search</button>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <button onClick={() => onAddToBookshelf(book)}>
              Add to Bookshelf
            </button>
            <button onClick={() => onViewDetails(book)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBooks;
