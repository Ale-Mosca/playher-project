import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <section className="min-h-screen bg-[#0F011E] text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Ciao, {user?.email}</h1>
      <p>Benvenuta nella tua area riservata PlayHer!</p>
      <button onClick={logout} className="mt-6 bg-white text-black px-4 py-2 rounded-md">
        Logout
      </button>
    </section>
  );
};

export default Dashboard;
