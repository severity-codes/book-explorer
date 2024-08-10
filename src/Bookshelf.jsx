/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Bookshelf = ({ books, onViewDetails }) => {
  return (
    <div className="bookshelf">
      <h2>Your Bookshelf</h2>
      {books.length === 0 ? (
        <p>Your bookshelf is empty. Start adding some books!</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              <button onClick={() => onViewDetails(book)}>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookshelf;
