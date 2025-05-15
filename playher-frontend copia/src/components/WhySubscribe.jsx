import { Lock, Star, BarChart2 } from "lucide-react";

const benefits = [
  {
    title: "Accesso esclusivo a professionisti dedicati",
    icon: <Lock className="w-8 h-8 text-accent" />,
  },
  {
    title: "Visibilità e crescita personale",
    icon: <BarChart2 className="w-8 h-8 text-accent" />,
  },
  {
    title: "Vantaggi reali ogni mese",
    icon: <Star className="w-8 h-8 text-accent" />,
  },
];

const WhySubscribe = () => {
  return (
    <section className="bg-transparent text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Perché abbonarti?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="bg-black bg-opacity-60 border border-pink-700 rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
          >
            <div className="mb-4">{b.icon}</div>
            <p className="text-base text-gray-200">{b.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySubscribe;
