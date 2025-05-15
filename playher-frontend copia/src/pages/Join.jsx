import { useState } from "react";

const Join = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mwpoaaqr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="max-w-md mx-auto text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Unisciti a PlayHer</h1>
      <p className="text-white mb-6">
        Stiamo costruendo una community esclusiva per calciatrici. Lasciaci la tua email per essere tra le prime a ricevere l’accesso!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="email"
          type="email"
          placeholder="La tua email"
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
          required
        />
        <button
          type="submit"
          className="bg-[#ff36ab] text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
        >
          Inviami novità
        </button>
      </form>
      {submitted && (
        <p className="text-[#ff36ab] mt-4">Grazie! Riceverai presto delle news 📨</p>
      )}
    </section>
  );
};

export default Join;
