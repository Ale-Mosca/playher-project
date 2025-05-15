import { useEffect, useState } from 'react';
import axios from 'axios';

type Opportunity = {
  id: string;
  title: string;
  description?: string;
  brandName?: string;
  isPremium: boolean;
  ambassador?: boolean;
};

export default function Opportunities() {
  const [opps, setOpps] = useState<Opportunity[]>([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/content?type=OPPORTUNITY').then(res => {
      setOpps(res.data);
    });
  }, []);

  const handleApply = async (id: string) => {
    try {
      await axios.post(`http://localhost:3000/content/${id}/apply`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Candidatura inviata!');
    } catch (err) {
      console.error(err);
      alert('Errore nella candidatura');
    }
  };  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Opportunità e Ambassador</h1>
  
      <input
        type="text"
        placeholder="Token accesso"
        className="border px-2 py-1 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />
  
      <div className="grid gap-4">
        {opps.map((o) => (
          <div key={o.id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold">{o.title}</h3>
            <p className="italic text-sm text-gray-600">{o.brandName}</p>
            <p>{o.description}</p>
            <p className="text-sm mt-1">
              {o.ambassador && '🌟 Opportunità Ambassador'} {o.isPremium && '🔒 Solo premium'}
            </p>
            <button
              onClick={() => handleApply(o.id)}
              className="mt-2 bg-indigo-600 text-white px-4 py-1 rounded"
            >
              Candidati
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}