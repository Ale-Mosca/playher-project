import { useEffect, useState } from 'react';
import axios from 'axios';

type Content = {
  id: string;
  title: string;
  type: 'VIDEO' | 'EXPERT' | 'OPPORTUNITY';
  isPremium: boolean;
  createdAt: string;
  description?: string;
  tags?: string[];
  videoUrl?: string;
  calendlyUrl?: string;
  brandName?: string;
  ambassador?: boolean;
};

const defaultForm = {
  title: '',
  description: '',
  type: 'VIDEO',
  tags: '',
  isPremium: false,
  videoUrl: '',
  calendlyUrl: '',
  videoEmbed: '',
  coverImage: '',
  brandName: '',
  ambassador: false,
};

export function Content() {
  const [token, setToken] = useState('');
  const [contents, setContents] = useState<Content[]>([]);
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [editingContent, setEditingContent] = useState<Content | null>(null);

  const fetchContents = () => {
    axios
      .get('http://localhost:3000/content', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log('Contenuti ricevuti:', res.data);
        setContents(res.data);
      })
      .catch((err) => console.error('Errore:', err));
  };

  useEffect(() => {
    if (token) fetchContents();
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    if (editingContent) {
      setEditingContent({ ...editingContent, [name]: type === 'checkbox' ? checked : value });
    } else {
      setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        'http://localhost:3000/content',
        {
          ...form,
          tags: form.tags.split(',').map((t) => t.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setForm(defaultForm);
      fetchContents();
    } catch (err) {
      alert('Errore nella creazione del contenuto');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!editingContent) return;
    try {
      await axios.patch(`http://localhost:3000/content/${editingContent.id}`, editingContent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchContents();
      setEditingContent(null);
    } catch (error) {
      console.error('Errore durante l\'aggiornamento:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Sei sicuro di voler eliminare questo contenuto?')) return;
    try {
      await axios.delete(`http://localhost:3000/content/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchContents();
    } catch (error) {
      console.error('Errore durante l\'eliminazione:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contenuti</h2>
      <input
        type="text"
        placeholder="Access token admin"
        className="border px-2 py-1 mb-4 w-full"
        onChange={(e) => setToken(e.target.value)}
      />

      <table className="w-full table-auto border-collapse mb-8">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Titolo</th>
            <th className="p-2">Tipo</th>
            <th className="p-2">Premium</th>
            <th className="p-2">Creato</th>
            <th className="p-2">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-2">{c.title}</td>
              <td className="p-2">{c.type}</td>
              <td className="p-2">{c.isPremium ? '✅' : '—'}</td>
              <td className="p-2">{new Date(c.createdAt).toLocaleDateString()}</td>
              <td className="p-2 flex gap-2">
                <button
                  onClick={() => setEditingContent(c)}
                  className="text-blue-500 hover:underline"
                >
                  Modifica
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 hover:underline"
                >
                  Elimina
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingContent && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-xl font-semibold mb-2">Modifica Contenuto</h3>
          <input
            type="text"
            name="title"
            value={editingContent.title}
            onChange={handleChange}
            placeholder="Titolo"
            className="w-full p-2 border mb-2"
          />
          <textarea
            name="description"
            value={editingContent.description || ''}
            onChange={handleChange}
            placeholder="Descrizione"
            className="w-full p-2 border mb-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salva Modifiche
          </button>
          <button
            onClick={() => setEditingContent(null)}
            className="ml-2 text-gray-500"
          >
            Annulla
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded space-y-3">
        <h3 className="font-bold text-lg">Crea nuovo contenuto</h3>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Titolo" className="w-full p-2 border" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descrizione" className="w-full p-2 border" />
        <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border">
          <option value="VIDEO">Video</option>
          <option value="EXPERT">Esperto</option>
          <option value="OPPORTUNITY">Opportunità</option>
        </select>

        {form.type === 'VIDEO' && (
          <input
            type="text"
            name="videoUrl"
            value={form.videoUrl}
            onChange={handleChange}
            placeholder="URL del video"
            className="w-full p-2 border"
          />
        )}

        {contents.map((content) => (
          <div key={content.id}>
            {content.type === 'EXPERT' && content.calendlyUrl && (
              <a
                href={content.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                Prenota
              </a>
            )}
          </div>
        ))}

        {form.type === 'OPPORTUNITY' && (
          <>
            <input
              type="text"
              name="brandName"
              value={form.brandName}
              onChange={handleChange}
              placeholder="Nome del brand"
              className="w-full p-2 border"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="ambassador"
                checked={form.ambassador}
                onChange={handleChange}
              />
              Opportunità da ambassador
            </label>
          </>
        )}

        <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="Tag (separati da virgola)" className="w-full p-2 border" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isPremium" checked={form.isPremium} onChange={handleChange} />
          Contenuto Premium
        </label>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Salvataggio...' : 'Crea'}
        </button>
      </form>
    </div>
  );
}