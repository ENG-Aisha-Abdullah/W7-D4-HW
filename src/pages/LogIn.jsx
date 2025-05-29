import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API_URL = "https://6837a1352c55e01d184a61ed.mockapi.io/users";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.get(API_URL).then((res) => {
      const users = res.data;

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        Swal.fire({
          icon: "success",
          title: "successfuly Log In",
          showConfirmButton: false,
          timer: 2000,
        });

        localStorage.setItem("email", matchedUser.email);
        localStorage.setItem("name", matchedUser.name);

        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Your Email or Password Uncorrect",
        });
      }
    });
  };

  return (
    <div className="bg-gray-100 h-screen px-8 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col gap-5"
      >
        <h1 className="text-blue-900 text-3xl font-bold text-center">
          Log In
        </h1>


        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-bold text-xl">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@example.com"
            className="border-gray-500 border p-2 rounded focus:outline-amber-400"
          />
        </div>




        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-bold text-xl">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-gray-500 border p-2 rounded focus:outline-amber-400"
          />
        </div>



        <button
          type="submit"
          className="bg-amber-400 text-white font-bold text-xl p-2 rounded hover:bg-amber-500 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-700">
         Don't have an account?
          <Link
            className="text-gray-700 font-bold px-2 hover:underline hover:bg-amber-400 transition duration-300 p-1 rounded"
            to="/signUp"
          >
            Sign Up
          </Link>
        </p>








      </form>
    </div>
  );
}

export default LogIn;
