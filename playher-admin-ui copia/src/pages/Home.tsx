import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Benvenuta su PlayHer 👋</h1>
      <p className="mb-6 text-lg">
        La piattaforma dedicata a tutte le calciatrici che vogliono crescere in campo e fuori.
      </p>

      <div className="space-y-2">
        <Link to="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded inline-block">
          Registrati ora
        </Link>
        <div className="text-sm text-gray-600 mt-2">
          oppure <Link to="/login" className="underline">accedi</Link> se hai già un account
        </div>
      </div>
    </div>
  );
}
