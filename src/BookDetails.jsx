/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BookDetails = ({ book, onClose }) => {
  return (
    <div className="book-details">
      <button onClick={onClose}>Close</button>
      <h2>{book.volumeInfo.title}</h2>
      <h3>{book.volumeInfo.authors?.join(", ")}</h3>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <p>{book.volumeInfo.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
