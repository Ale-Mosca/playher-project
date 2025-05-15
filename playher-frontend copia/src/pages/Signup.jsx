import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, name }); // Simulazione salvataggio utente
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F011E] text-white">
      <form onSubmit={handleSubmit} className="bg-[#1c013a] p-6 rounded-lg shadow-lg space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Crea il tuo profilo</h1>
        <input
          type="text"
          placeholder="Nome"
          className="w-full px-3 py-2 rounded-md text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded-md text-black"
          required
        />
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md">
          Registrati
        </button>
      </form>
    </section>
  );
};

export default Signup;
