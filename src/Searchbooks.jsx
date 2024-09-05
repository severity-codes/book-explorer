/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
//import "./SearchBooks.css";

const SearchBooks = ({ onAddToBookshelf, onViewDetails }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("javascript");
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&country=US&key=${apiKey}`
        );
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    if (query) {
      fetchBooks();
    }
  }, [query, apiKey]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-books">
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleSearchChange}
      />
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <button onClick={() => onAddToBookshelf(book)}>
                Add to Bookshelf
              </button>
              <button onClick={() => onViewDetails(book)}>View Details</button>{" "}
              {/* View Details Button */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBooks;
