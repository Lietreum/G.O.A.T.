import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();

    // Check if an image has been selected
    if (image) {
      const formData = new FormData();
      formData.append("judul", judul);
      formData.append("penerbit", penerbit);
      formData.append("deskripsi", deskripsi);
      formData.append("image", image);

      try {
        const response = await axios.post("http://localhost:3333/book", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Handle successful response
        console.log("Response:", response.data);
        navigate("/list");
      } catch (error) {
        // Handle error response
        console.log("Error:", error);
      }
    } else {
      // Handle case where no image is selected
      console.log("Please select an image");
    }
  };

  const loadImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="title is-3">Add Menu Form</h1>
        <hr />
        <form onSubmit={saveBook}>
          <div className="columns">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Image</label>
                <div className="image-box">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Selected Book"
                      className="selected-image"
                    />
                  ) : (
                    <div className="placeholder-image"></div>
                  )}
                </div>
                <input type="file" onChange={loadImage} />
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Nama Makanan</label>
                <input
                  type="text"
                  className="input"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Input"
                />
              </div>
              <div className="field">
                <label className="label">Kuantitas Barang</label>
                <input
                  type="text"
                  className="input"
                  value={penerbit}
                  onChange={(e) => setPenerbit(e.target.value)}
                  placeholder="Input"
                />
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
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
