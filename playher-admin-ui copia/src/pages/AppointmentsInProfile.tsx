import { useEffect, useState } from 'react';
import axios from 'axios';

export function AppointmentsInProfile() {
  const [token, setToken] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!token) return;

    axios
      .get('http://localhost:3000/appointments/my', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error('Errore:', err));
  }, [token]);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Appuntamenti futuri</h2>

      <input
        type="text"
        placeholder="Access token"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />

      {appointments.length === 0 ? (
        <p className="text-sm text-gray-600">Nessun appuntamento futuro</p>
      ) : (
        <ul className="space-y-3">
          {appointments.map((a: any) => (
            <li key={a.id} className="border rounded p-3 bg-white">
              <div className="font-semibold">{a.content.title}</div>
              <div className="text-sm text-gray-700">
                {new Date(a.date).toLocaleString()}
              </div>
              {a.content.calendlyUrl && (
                <a
                  href={a.content.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-indigo-600 underline text-sm"
                >
                  Apri Calendly
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
