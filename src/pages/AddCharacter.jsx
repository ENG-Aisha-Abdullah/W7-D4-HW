import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API_URL = "https://6837a1352c55e01d184a61ed.mockapi.io/characters";

function AddCharacter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "First Log In Please",
      });
      navigate("/logIn");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");

    const newCharacter = {
      name,
      image,
      gender,
      createdBy: email,
    };

    axios.post(API_URL, newCharacter).then(() => {
      Swal.fire({
        icon: "success",
        title: "successffuly Added",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    });
  };

  return (
    <div className="bg-gray-100 h-screen px-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col gap-5"
      >
        <h1 className="text-blue-900 text-3xl font-bold text-center ">
            Add New Character
            </h1>

        <input
          type="text"
          placeholder="Character Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Character Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          type="submit"
          className="bg-amber-400 text-white font-bold py-2 rounded hover:bg-amber-500 transition"
        >
          Add Character 
        </button>
      </form>
    </div>
  );
}

export default AddCharacter;
