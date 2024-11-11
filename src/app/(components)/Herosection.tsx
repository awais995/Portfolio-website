const Hero = () => {
  return (
    <section className="bg-custom-gradient text-white py-20 h-screen items-center justify-center flex">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Showcasing my projects and skills
        </p>

        <a
              href="/projects" 
              target="_blank"
              rel="noopener noreferrer"
              >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Projects
        </button>
        </a>
        </div>
    </section>
  );
};

export default Hero;
