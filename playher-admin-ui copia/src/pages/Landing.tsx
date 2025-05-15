import { Link } from 'react-router-dom';
import { FaLock, FaStar, FaChartLine, FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-[#0f001d] to-[#15002d] text-white font-sans">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Non solo gioco. È la tua carriera.<br />È il tuo spazio.
        </h1>
        <Link
          to="/signup"
          className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg inline-block mt-6"
        >
          DIVENTA PLAYHER <span className="text-sm font-light ml-2">Gratis</span>
        </Link>
      </section>

      {/* Cos'è PlayHer */}
      <section className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Cos’è PlayHer?</h2>
        <p className="text-lg mb-8">
          PlayHer è la prima membership pensata per chi vive il calcio da protagonista, ma sa di valere anche fuori dal campo.<br /><br />
          Con PlayHer entri in una community esclusiva di calciatrici come te: forti, ambiziose, determinate a crescere.<br /><br />
          Che tu giochi in Serie A, B o stia costruendo il tuo percorso, PlayHer ti dà ciò di cui hai bisogno: supporto, strumenti e visibilità.<br /><br />
          È uno spazio dove il tuo talento prende forma.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-pink-400">🚀</span> Vantaggi concreti
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-400">📚</span> Formazione reale
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-400">🤝</span> Rete di calciatrici
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-400">🎁</span> Sconti e convenzioni esclusivi
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Community riservata</h2>
        <p className="text-lg mb-4 italic text-gray-300">Per tutti gli iscritti a PlayHer</p>
        <p className="text-md leading-relaxed mb-8">
          Uno spazio sicuro, stimolante e utile dove le calciatrici possono condividere esperienze, ricevere supporto, accedere a contenuti esclusivi e fare rete con altre atlete e professionisti.
        </p>
        <ul className="grid md:grid-cols-2 gap-3 text-left text-sm max-w-xl mx-auto list-disc pl-5">
          <li>📆 Post settimanali</li>
          <li>❓ Domande tematiche</li>
          <li>🎙️ Rubriche fisse: "Mental Monday", "Fuel Friday", "Spotlight"</li>
          <li>🏆 Challenge mensili</li>
        </ul>
      </section>

      {/* Perché abbonarti */}
      <section className="px-6 py-16 bg-[#1c0036]">
        <h2 className="text-2xl font-bold text-center mb-8">Perché abbonarti?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#2b004f] p-6 rounded-lg text-center">
            <FaLock className="mx-auto text-pink-400 text-2xl mb-2" />
            <p>Accesso esclusivo a professionisti dedicati</p>
          </div>
          <div className="bg-[#2b004f] p-6 rounded-lg text-center">
            <FaChartLine className="mx-auto text-pink-400 text-2xl mb-2" />
            <p>Visibilità e crescita personale</p>
          </div>
          <div className="bg-[#2b004f] p-6 rounded-lg text-center">
            <FaStar className="mx-auto text-pink-400 text-2xl mb-2" />
            <p>Vantaggi reali ogni mese</p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Video in primo piano</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#1c0036] p-4 rounded-xl">
            <img src="/video1.png" alt="video 1" className="rounded mb-2" />
            <p>Integrazione post gara</p>
          </div>
          <div className="bg-[#1c0036] p-4 rounded-xl">
            <img src="/video2.png" alt="video 2" className="rounded mb-2" />
            <p>Allenamento off-season</p>
          </div>
          <div className="bg-[#1c0036] p-4 rounded-xl">
            <img src="/video3.png" alt="video 3" className="rounded mb-2" />
            <p>Gestione della trasferta</p>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Sconti riservati dei nostri partner</h3>
        <div className="flex justify-center gap-8 flex-wrap opacity-80">
          <img src="/just.png" alt="just" className="h-8" />
          <img src="/downtown.png" alt="downtown" className="h-8" />
          <img src="/nike.png" alt="nike" className="h-8" />
          <img src="/only.png" alt="only" className="h-8" />
          <img src="/decathlon.png" alt="decathlon" className="h-8" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
