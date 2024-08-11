// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Bookshelf.css";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=javascript&country=US&key=${apiKey}`
        );
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [apiKey]);

  return (
    <div className="bookshelf">
      <h2>Your Bookshelf</h2>
      {books.length === 0 ? (
        <p>Your bookshelf is empty. Start adding some books!</p>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookshelf;
