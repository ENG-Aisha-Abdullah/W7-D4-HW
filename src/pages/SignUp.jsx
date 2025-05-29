import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API_URL = "https://6837a1352c55e01d184a61ed.mockapi.io/users";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Password must be more than 6 characters",
      });
      return;
    }
    axios
      .post(API_URL, {
        name,
        email,
        password,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "successffuly Sign Up",
          showConfirmButton: false,
          timer: 2000,
        });

        navigate("/logIn");
      });
  };

  return (
    <div className="bg-gray-100 h-screen px-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col gap-5"
      >
        <h1 className="text-blue-900 text-3xl font-bold text-center">
          Sign Up
        </h1>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-bold text-xl">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="border-gray-500 border p-2 rounded focus:outline-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-bold text-xl"> Email</label>


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
          Sign Up
        </button>


        
      </form>
    </div>
  );
}

export default SignUp;
