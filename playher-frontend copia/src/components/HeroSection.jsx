const HeroSection = () => {
    return (
      <section className="relative bg-trasparent text-white min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
  
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-4xl md:text-5xl md:leading-normal font-bold mb-6 h-auto">
          <span className="block">Non solo gioco. È la tua carriera.</span>
          <span className="block">È il tuo spazio.</span>
          </h1>
  
          <p className="mb-6 text-lg text-gray-200">
            PlayHer è la prima membership per calciatrici che vogliono far crescere il loro futuro dentro e fuori dal campo.
          </p>
  
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/join"
              className="bg-[#FF36AB] text-white hover:bg-white hover:text-[#FF36AB] font-semibold px-6 py-3 rounded-xl text-base transition-colors duration-300"
            >
              DIVENTA PLAYHER<br /><span className="text-sm font-normal">Gratis</span>
            </a>
            <a
              href="/login"
              className="flex items-center justify-center border border-white text-white px-6 py-3 rounded-xl text-base hover:bg-white hover:text-black transition-colors duration-300"              >
              Login
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  