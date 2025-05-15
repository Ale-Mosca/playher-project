import { useEffect, useState } from 'react';
import axios from 'axios';

type Video = {
  id: string;
  title: string;
  coverImage?: string;
  videoUrl?: string;
  isPremium: boolean;
  tags?: string[];
};

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [token, setToken] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/content?type=VIDEO').then((res) => {
      setVideos(res.data);
    });
  }, []);

const filtered = videos.filter((v) =>
    !v.isPremium || (v.isPremium && token)
  ).filter((v) =>
    tagFilter ? v.tags?.includes(tagFilter) : true
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video e Highlights</h1>
  
      <input
        type="text"
        placeholder="Access token (se Premium)"
        className="border px-2 py-1 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />
  
      <input
        type="text"
        placeholder="Filtro per tag (es. tecnica)"
        className="border px-2 py-1 mb-4 w-full"
        onChange={(e) => setTagFilter(e.target.value)}
      />
  
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((v) => (
          <div key={v.id} className="border p-4 rounded">
            {v.coverImage && <img src={v.coverImage} alt="" className="w-full mb-2 rounded" />}
            <h3 className="font-semibold">{v.title}</h3>
            {v.videoUrl && (
              <video src={v.videoUrl} controls className="w-full mt-2" />
            )}
            {v.isPremium && !token && (
              <p className="text-red-500 text-sm mt-2">🔒 Solo per utenti Premium</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}  
