import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, BarChart } from 'lucide-react';

export function Sidebar() {
  const { pathname } = useLocation();
  const links = [
    { to: '/admin', label: 'Dashboard', icon: Home },
    { to: '/admin/users', label: 'Utenti', icon: Users },
    { to: '/admin/content', label: 'Contenuti', icon: FileText },
    { to: '/admin/stats', label: 'Statistiche', icon: BarChart },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">PlayHer Admin</h2>
      <nav className="space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition ${
              pathname === to ? 'bg-gray-700' : ''
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
