import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../firebase/auth";
import { getUserData } from "../firebase/firestore";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      const userData = await getUserData(user.uid);
      navigate(userData.role === "general" ? "/home" : `/${userData.role}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#3B373B] text-[#DDDBDE] p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Log In</h2>
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md bg-[#656E77] text-[#DDDBDE] border-none mb-4 focus:ring-2 focus:ring-[#CAD4DF]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-[#656E77] text-[#DDDBDE] border-none mb-4 focus:ring-2 focus:ring-[#CAD4DF]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-3 rounded-md bg-[#DF5587] text-white font-bold uppercase hover:bg-[#C83F5F] transition">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
