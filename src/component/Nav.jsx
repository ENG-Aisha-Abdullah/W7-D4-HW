import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const name = localStorage.getItem("name");

  return (
    <div className="bg-blue-950 h-20 flex list-none justify-between items-center sm:px-8 px-2">
      <Link to="/">
        <li className="text-gray-200 font-bold hover:text-white text-lg">
          Home
        </li>
      </Link>

      <div className="flex items-center gap-3 ">

        <span className="text-white font-semibold text-sm ">
          Welcome, {name}
        </span>

        <Link to="logIn">
          <button className="bg-gray-200 text-blue-950 font-bold p-2 px-4 rounded hover:bg-white ease-in-out duration-300 cursor-pointer whitespace-nowrap">
            Log In
          </button>
        </Link>

        {/* <button className='bg-gray-50 rounded font-bold text-blue-950 p-2'>Sign Up</button> */}
      </div>
    </div>
  );
}

export default Nav;
