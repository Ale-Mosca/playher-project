import { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';
import { AppointmentsInProfile } from './AppointmentsInProfile';

type User = {
    id: string;
    email: string;
    name?: string;
    avatarUrl?: string;
    bio?: string;
    birthDate?: string;
    isPremium: boolean;
    role: string;
};

export default function Profile() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [form, setForm] = useState<Partial<User>>({});

    useEffect(() => {
        if (!token) return;
        axios
            .get('http://localhost:3000/users/me', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUser(res.data);
                setForm(res.data);
            });
    }, [token]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.patch(
                'http://localhost:3000/users/me',
                { ...form },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Profilo aggiornato!');
        } catch (err) {
            alert('Errore nel salvataggio');
            console.error(err);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'playher_upload'); // es. preset Cloudinary

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/dsrejrm3a/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            setForm((prev) => ({ ...prev, avatarUrl: data.secure_url }));
        } catch (err) {
            alert('Errore durante l’upload immagine');
            console.error(err);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Il tuo Profilo</h1>

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Il tuo Profilo</h1>
                <LogoutButton />
            </div>


            <input
                type="text"
                placeholder="Access token"
                className="border px-2 py-1 mb-4 w-full"
                onChange={(e) => setToken(e.target.value)}
            />

            {user && (
                <div className="space-y-3">
                    <p>Email: <strong>{user.email}</strong></p>
                    <p>Ruolo: {user.role}</p>
                    <p className={user.isPremium ? 'text-green-600' : 'text-gray-500'}>
                        {user.isPremium ? '✅ Utente Premium' : '🔒 Utente base'}
                    </p>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={form.name || ''}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />

                    <textarea
                        name="bio"
                        placeholder="Bio"
                        value={form.bio || ''}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />

                    {form.avatarUrl && (
                        <img
                            src={form.avatarUrl}
                            alt="Anteprima avatar"
                            className="w-24 h-24 rounded-full object-cover mb-2"
                        />
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2 border"
                    />

                    <input
                        type="date"
                        name="birthDate"
                        placeholder="Data di nascita"
                        value={form.birthDate?.split('T')[0] || ''}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />

                    <button
                        onClick={handleSave}
                        className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                        Salva modifiche
                    </button>
                    <AppointmentsInProfile />
                </div>
            )}
        </div>
    );
}