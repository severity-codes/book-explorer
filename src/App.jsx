/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Navbar";
import Home from "./home";
import Bookshelf from "./Bookshelf";
import SearchBooks from "./Searchbooks";
import BookDetails from "./BookDetails";
import "./App.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToBookshelf = (book) => {
    if (!bookshelf.some((b) => b.id === book.id)) {
      setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
    }
  };

  const removeFromBookshelf = (bookId) => {
    setBookshelf(bookshelf.filter((book) => book.id !== bookId));
  };

  const viewDetails = (book) => {
    setSelectedBook(book);
  };

  const closeDetails = () => {
    setSelectedBook(null);
  };

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bookshelf"
            element={
              selectedBook ? (
                <BookDetails book={selectedBook} onClose={closeDetails} />
              ) : (
                <>
                  <SearchBooks
                    onAddToBookshelf={addToBookshelf}
                    onViewDetails={viewDetails}
                  />
                  <Bookshelf
                    books={bookshelf}
                    onViewDetails={viewDetails}
                    onRemoveFromBookshelf={removeFromBookshelf} // Pass the remove function
                  />
                </>
              )
            }

          />
          <Route
            path="/messages"
            element={<div>Messages Page (Coming Soon)</div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
