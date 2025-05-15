import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F011E] text-white">
      <form onSubmit={handleSubmit} className="bg-[#1c013a] p-6 rounded-lg shadow-lg space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md">
          Entra
        </button>
      </form>
    </section>
  );
};

export default Login;
