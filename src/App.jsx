// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
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
                  <Bookshelf books={bookshelf} onViewDetails={viewDetails} />
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
