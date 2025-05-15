const partners = [
    { name: "Nike", src: "src/assets/partners/Nike-Logo.webp" },
    { name: "DAZN", src: "src/assets/partners/dazn-logo.png" },
    { name: "Women Sport", src: "src/assets/partners/womensport-logo.png" },
    // Aggiungi altri loghi qui
  ];
  
  const PartnerLogos = () => {
    return (
      <section className="bg-black bg-opacity-20 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">I nostri partner</h2>
          <p className="text-white-600">Collaboriamo con realtà che credono nella crescita delle atlete</p>
        </div>
  
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((p, idx) => (
            <img
              key={idx}
              src={p.src}
              alt={`Logo ${p.name}`}
              className="h-12 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default PartnerLogos;
  