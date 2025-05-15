import { useEffect, useState } from 'react';
import axios from 'axios';

type Expert = {
  id: string;
  title: string;
  description?: string;
  calendlyUrl?: string;
  avatarUrl?: string;
  category?: string;
  bio?: string;
};

const categories = ['tutti', 'nutrizione', 'mental coach', 'tattica'];

export default function Experts() {
    const [experts, setExperts] = useState<Expert[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('tutti');
  
    useEffect(() => {
      axios.get('http://localhost:3000/content?type=EXPERT').then((res) => {
        setExperts(res.data);
      });
    }, []);

    const filtered = selectedCategory === 'tutti'
    ? experts
    : experts.filter((e) => e.category?.toLowerCase() === selectedCategory);

    return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Esperti PlayHer</h1>
          
          <div className="mb-4 flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded border ${selectedCategory === cat ? 'bg-indigo-600 text-white' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
      
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((e) => (
              <div key={e.id} className="border rounded p-4 flex flex-col gap-2">
                {e.avatarUrl && <img src={e.avatarUrl} alt={e.title} className="w-24 h-24 rounded-full object-cover" />}
                <h3 className="font-bold text-lg">{e.title}</h3>
                <p className="text-sm italic">{e.category}</p>
                <p>{e.bio}</p>
                {e.calendlyUrl && (
                  <a href={e.calendlyUrl} target="_blank" className="text-blue-600 underline">
                    Prenota con Calendly
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      );
      
}