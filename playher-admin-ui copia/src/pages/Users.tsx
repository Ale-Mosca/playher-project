import { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [token, setToken] = useState(''); // metti qui il tuo token temporaneo

  useEffect(() => {
    axios
      .get('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, [token]);

  const promoteUser = (userId: string) => {
    axios
      .patch(`http://localhost:3000/users/${userId}/promote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => alert('Utente promosso!'))
      .catch(err => alert('Errore: ' + err.message));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestione Utenti</h2>
      <input
        type="text"
        placeholder="Access token admin"
        className="border px-2 py-1 mb-4 w-full"
        onChange={e => setToken(e.target.value)}
      />
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Nome</th>
            <th className="p-2">Email</th>
            <th className="p-2">Ruolo</th>
            <th className="p-2">Azione</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                {user.role !== 'ADMIN' && (
                  <button
                    onClick={() => promoteUser(user.id)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded"
                  >
                    Promuovi a Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}