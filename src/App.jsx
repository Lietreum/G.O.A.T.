import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import TeamProfile from "./components/TeamProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/about" element={<TeamProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
