import { useEffect, useState } from "react";

// Mock temporaneo — da sostituire con chiamata API in futuro
const sampleVideos = [
  {
    title: "ECCO COME L'INTER PUÒ SORPRENDERE IL BARCELLONA DI YAMAL!!",
    url: "https://www.youtube.com/embed/9IuSwpUxmkk?si=4cXup4V6JwhVfFQm", // da sostituire con link reali
  },
  {
    title: "IL CALCIO STA CAMBIANDO! MA SIAMO SICURI SIA UN BENE??",
    url: "https://www.youtube.com/embed/ETSj_O8ZOk0?si=0KArCECoVAlR5Ec9",
  },
  {
    title: "La partita del TRIPLETE dell'INTER come non l'avete MAI MAI VISTA",
    url: "https://www.youtube.com/embed/acr8a-U0Zps?si=kbh4xk_WkJQNs27t",
  },
];

const FeaturedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // In futuro: fetch da backend
    const random = sampleVideos.sort(() => 0.5 - Math.random()).slice(0, 3);
    setVideos(random);
  }, []);

  return (
    <section className="bg-transparent text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Video in primo piano</h2>
        <p className="text-white-400 mt-2">I contenuti più recenti dalla nostra community</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-[#1c013a] p-4 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-60 rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="text-base text-gray-200 font-semibold">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideos;
