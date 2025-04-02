import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../firebase/auth";
import { saveUserData, updateUserStatus } from "../firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("general");
  const [extraData, setExtraData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      await saveUserData(user.uid, {
        email,
        role: "general",
        status: role === "general" ? "verified" : "pending",
        requestedRole: role,
        ...extraData,
      });

      navigate("/home");

      if (role !== "general") {
        setTimeout(async () => {
          try {
            await updateUserStatus(user.uid, "verified");
            await setDoc(
              doc(db, "users", user.uid),
              { role: role },
              { merge: true }
            );
            console.log(`User ${user.uid} verified as ${role}`);
          } catch (error) {
            console.error("Verification failed:", error);
          }
        }, 5000);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#3B373B] text-[#DDDBDE] p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
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
        <select
          className="p-3 rounded-md bg-[#656E77] text-[#DDDBDE] border-none mb-4 focus:ring-2 focus:ring-[#CAD4DF]"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="general">General User</option>
          <option value="artist">Artist</option>
          <option value="expert">Expert</option>
        </select>

        {role === "artist" && (
          <div className="mb-4">
            <p className="text-sm text-gray-300 mb-2">
              Upload a portfolio link:
            </p>
            <input
              type="url"
              placeholder="Portfolio Link"
              className="p-3 rounded-md bg-[#656E77] text-[#DDDBDE] border-none focus:ring-2 focus:ring-[#CAD4DF]"
              onChange={(e) => setExtraData({ portfolio: e.target.value })}
            />
          </div>
        )}

        {role === "expert" && (
          <div className="mb-4">
            <p className="text-sm text-gray-300 mb-2">
              Upload credentials (resume/certificates):
            </p>
            <input
              type="file"
              className="p-3 rounded-md bg-[#656E77] text-[#DDDBDE] border-none focus:ring-2 focus:ring-[#CAD4DF]"
              onChange={(e) =>
                setExtraData({ credentials: e.target.files[0].name })
              }
            />
          </div>
        )}

        <button className="p-3 rounded-md bg-[#B46543] text-white font-bold uppercase hover:bg-[#DF5587] transition">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
