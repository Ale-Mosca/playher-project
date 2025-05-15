import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Video, Star, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function SidebarUser() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/profile', label: '👤 Profilo', icon: User },
    { to: '/videos', label: '🎥 Video', icon: Video },
    { to: '/experts', label: '🧠 Esperti', icon: Star },
    { to: '/opportunities', label: '💼 Opportunità', icon: Briefcase },
    { to: '/my-applications', label: '📨 Le tue candidature' },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-56 bg-white border-r text-gray-800 p-4 z-40 transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <h2 className="text-xl font-bold mb-6">PlayHer</h2>
        <nav className="space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
                pathname === to ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
