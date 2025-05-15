import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserApplications() {
  const [token, setToken] = useState('');
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (!token) return;

    axios
      .get('http://localhost:3000/applications/my', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setApplications(res.data))
      .catch((err) => console.error('Errore:', err));
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Le tue candidature</h1>

      <input
        type="text"
        placeholder="Access token utente"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Opportunità</th>
            <th className="p-2 text-left">Stato</th>
            <th className="p-2 text-left">Data invio</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app: any) => (
            <tr key={app.id} className="border-t">
              <td className="p-2">{app.content?.title}</td>
              <td className="p-2">
                {app.status === 'APPROVED' ? '✅ Approvata' : '⏳ In attesa'}
              </td>
              <td className="p-2">{new Date(app.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}