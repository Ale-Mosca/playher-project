import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center mb-6">
      <div className="flex gap-4 font-semibold">
        <Link to="/">🏠 Home</Link>
        <Link to="/videos">🎥 Video</Link>
        <Link to="/experts">🧠 Esperti</Link>
        <Link to="/opportunities">💼 Opportunità</Link>
        <Link to="/about">ℹ️ Chi siamo</Link>
        {token && <Link to="/profile">👤 Profilo</Link>}
      </div>
      <div>
        {token ? (
          <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
        ) : (
          <>
            <Link to="/login" className="mr-4 text-sm">Login</Link>
            <Link to="/signup" className="text-sm">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
}