import { Rocket } from "lucide-react";

const bulletItems = [
  "Vantaggi concreti",
  "Formazione reale",
  "Rete di calciatrici",
  "Sconti e convenzioni esclusivi",
];

const WhatIsPlayHer = () => {
  return (
    <section className="bg-transparent text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cos’è PlayHer?</h2>
          <p className="text-lg text-gray-300 mb-6">
            PlayHer è la prima membership pensata per chi vive il calcio da protagonista, ma si dà valore anche fuori dal campo.
            <br /><br />
            Una community esclusiva dedicata a calciatrici che vogliono formarsi, connettersi e crescere.
            Chi è iscritta sa che è l’inizio di un nuovo percorso. Tutto il tuo talento prende forma.
          </p>

          <ul className="space-y-3">
            {bulletItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-white-200">
                <Rocket className="w-5 h-5 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* VISUAL SIDE */}
        <div className="flex justify-center">
          <img
            src="src/assets/app-sample.png" // sostituire con screenshot vero se disponibile
            alt="Anteprima App PlayHer"
            className="rounded-xl w-full max-w-sm shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsPlayHer;
