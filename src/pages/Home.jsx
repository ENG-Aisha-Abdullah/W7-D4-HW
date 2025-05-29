import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const API_URL = "https://6837a1352c55e01d184a61ed.mockapi.io/characters";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const filtered = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setCharacters((items) => items.filter((character) => character.id !== id));
      Swal.fire({
        icon: "success",
        title: "Character Deleted ",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <form onSubmit={handleSearch} className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search your Character Name"
          className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-400 text-white font-bold px-6 py-2 rounded hover:bg-amber-500 transition duration-300"
        >
          Search
        </button>

        <Link
          to="/addCharacter"
          className="bg-amber-400 text-white font-bold px-6 py-2 rounded hover:bg-amber-500 transition duration-300 flex items-center justify-center"
        >
          Add Character
        </Link>
      </form>

      {search && filtered.length === 0 ? (
        <p className="text-center text-gray-600 text-lg font-bold">
          Oops! There is no Character on this Name
        </p>
      ) : (

        
  
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((character) => (
            <div
              key={character.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden  "
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {character.name}
                </h2>
                <p className="text-gray-600">{character.gender}</p>

               
                {character.createdBy === localStorage.getItem("email") && (
                  <button
                    onClick={() => handleDelete(character.id)}
                    className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
