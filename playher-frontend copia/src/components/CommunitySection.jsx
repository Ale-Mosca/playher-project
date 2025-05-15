const rubriche = [
    "Mental Monday",
    "Fuel Friday",
    "Spotlight",
    "Challenge mensili",
  ];
  
  const CommunitySection = () => {
    return (
      <section className="bg-transparent text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE SIDE */}
          <div className="flex justify-center">
            <img
              src="src/assets/community-preview.png" // sostituisci con immagine reale
              alt="Community Preview"
              className="rounded-xl w-full max-w-sm shadow-lg"
            />
          </div>
  
          {/* TEXT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community riservata</h2>
            <p className="text-sm italic text-white-300 mb-2">Per tutti gli iscritti a PlayHer</p>
  
            <p className="text-gray-300 mb-6">
              Uno spazio sicuro, stimolante e utile dove le calciatrici possono condividere esperienze, ricevere supporto e accedere a contenuti esclusivi e fare rete con altre atlete e professionisti.
              <br /><br />
              Ogni settimana: rubriche, domande tematiche, challenge, confronto e formazione.
            </p>
  
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white-200">
              {rubriche.map((r, idx) => (
                <li key={idx} className="border border-white-500 px-3 py-1 rounded-lg text-sm">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default CommunitySection;
  