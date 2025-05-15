import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Applications() {
  const [token, setToken] = useState('');
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const res = await axios.get('http://localhost:3000/applications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setApplications(res.data);
    } catch (err) {
      console.error('Errore nel recupero:', err);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await axios.patch(`http://localhost:3000/applications/${id}/approve`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchApplications();
    } catch (err) {
      alert('Errore durante approvazione');
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) fetchApplications();
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Candidature</h1>
      <input
        type="text"
        placeholder="Access token admin"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Atleta</th>
            <th className="p-2 text-left">Contenuto</th>
            <th className="p-2 text-left">Stato</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app: any) => (
            <tr key={app.id} className="border-t">
              <td className="p-2">{app.user?.name}</td>
              <td className="p-2">{app.content?.title}</td>
              <td className="p-2">{app.status}</td>
              <td className="p-2">
                {app.status === 'PENDING' && (
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => handleApprove(app.id)}
                  >
                    Approva
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
