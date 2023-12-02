import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBookById();
  }, []);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("judul", judul);
      formData.append("penerbit", penerbit);
      formData.append("deskripsi", deskripsi);
      formData.append("image", image);

      console.log(formData);

      await axios.put("http://localhost:3333/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await getBookById();

      navigate("/list");
    } catch (error) {
      console.log("Ada error" + error);
    }
  };

  const getBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/book/${id}`);
      setJudul(response.data.judul);
      setPenerbit(response.data.penerbit);
      setDeskripsi(response.data.deskripsi);
    } catch (error) {
      console.log("error :" + error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="edit-book-container" style={{ background: "black", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="columns is-centered is-flex" style={{ minHeight: "100vh" }}>
        <div className="column is-half is-flex-direction-column">
          <div className="box">
            <h1 className="title is-3 has-text-centered mb-4">Edit Menu</h1>
            <form onSubmit={updateBook}>
              <div className="field">
                <label className="label">Food Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder="Input"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah Stok</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={penerbit}
                    onChange={(e) => setPenerbit(e.target.value)}
                    placeholder="Input"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Kadaluarsa</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    placeholder="Input"
                    onChange={(e) => setDeskripsi(e.target.value)}
                    value={deskripsi}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Upload Image</label>
                <div className="control">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>
              </div>
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer" style={{ background: "black", color: "white", marginTop: "auto" }}>
        <div className="content has-text-centered">
          <p>
            <strong>© G.O.A.T</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EditBook;
