import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  //   const images = JSON.parse(localStorage.getItem("gallery")) || [];
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = import.meta.env.VITE_API_URL;

  console.log(images);
  useEffect(() => {
    axios
      .get(`${API_BASE}/images`)
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => alert('Could n"t load Images'));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-purple-700 font-bold">
          Loading Images...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center pb-10 text-3xl text-purple-900 font-semibold p-5">
        Gallery Page
      </h2>
      <Link className="px-5 py-3 m-10 rounded-md bg-blue-500 text-white" to="/">
        Upload more
      </Link>
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-4"
        style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((img, i) => (
          <div className="mt-7 mx-4 md:mt-10 md:mx-5  ">
            <img
              key={i + 1}
              src={img}
              alt="Uploaded"
              className="h-30 rounded-md md:h-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
