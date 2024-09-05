/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Bookshelf.css";

// eslint-disable-next-line react/prop-types
const Bookshelf = ({ books, onViewDetails, onRemoveFromBookshelf }) => {
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
                  onClick={() => onViewDetails(book)}
                />
              )}
              <button onClick={() => onViewDetails(book)}>View Details</button>
              <button onClick={() => onRemoveFromBookshelf(book.id)}>
                Remove
              </button>{" "}
              {/* Remove Button */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookshelf;
