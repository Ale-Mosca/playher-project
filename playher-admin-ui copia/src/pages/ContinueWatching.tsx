import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ContinueWatching() {
  const [token, setToken] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!token) return;

    axios
      .get('http://localhost:3000/watch', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setVideos(res.data))
      .catch((err) => console.error('Errore:', err));
  }, [token]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Continua a guardare</h2>

      <input
        type="text"
        placeholder="Access token"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v: any) => (
          <div key={v.id} className="border rounded p-4 bg-white">
            {v.content.coverImage && (
              <img
                src={v.content.coverImage}
                alt={v.content.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <h3 className="font-semibold">{v.content.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Riprendi da {Math.floor(v.progress / 60)}:{String(v.progress % 60).padStart(2, '0')}
            </p>
            <a
              href={`/${v.content.id}?resume=${v.progress}`}
              className="inline-block bg-indigo-600 text-white px-4 py-1 rounded"
            >
              Riprendi
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}