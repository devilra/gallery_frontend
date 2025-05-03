import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL;

const UploadPage = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (file === null) {
      return 0;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(`${API_BASE}/upload`, formData);
    console.log(res.data);
    if (res.message === "Image uploaded successfully") {
      setLoading(false);
    }
    navigate("/gallery");
    // const url = res.data.url;

    // const gallery = JSON.parse(localStorage.getItem("gallery")) || [];
    // gallery.push(url);

    // localStorage.setItem("gallery", JSON.stringify(gallery));
    // navigate("/gallery");
  };

  return (
    <div>
      <h2 className="text-center text-3xl p-5 text-neutral-400 shadow-md">
        Upload <span className="text-rose-600 font-bold text-4xl">Image</span>
      </h2>
      <div className="m-5 p-5 md:max-w-2xl flex flex-col items-center md:justify-between md:flex md:flex-row md:items-center  mx-auto">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          onClick={handleUpload}
          className="border border-neutral-500 rounded-md px-7 my-5 md:my-0 py-1">
          {loading ? "loading.." : "upload"}
        </button>
        <Link
          to="/gallery"
          className="border border-green-600 px-3 py-1 rounded-md text-[15px] text-slate-700">
          All Image
        </Link>
      </div>
    </div>
  );
};

export default UploadPage;
