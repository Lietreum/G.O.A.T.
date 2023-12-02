import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:3333/books");
    setBooks(response.data.data);
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3333/book/${bookId}`);
      getBooks(); // Refresh the book list after deletion
    } catch (error) {
      console.log("error :" + error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <div className="mb-4">
            <Link to="/add" className="button is-success">
              Add List
            </Link>
          </div>
          <table className="table is-fullwidth is-bordered is-hoverable">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Nama Barang</th>
                <th>Kuantitas Barang</th>
                <th>Tanggal Kadaluarsa</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:3333/uploads/${book.image}`}
                      alt={`Image for ${book.judul}`}
                      style={{ width: "300px", height: "250px", borderRadius: "5%" }}
                    />
                  </td>
                  <td>{book.judul}</td>
                  <td>{book.penerbit}</td>
                  <td>{book.deskripsi}</td>
                  <td>
                    <Link
                      to={`/edit/${book.id}`}
                      className="button is-info is-small"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="button is-danger is-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
