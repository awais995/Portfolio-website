

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10 ">
          About Me
        </h2>
        <div className="md:flex md:justify-between md:items-center space-y-8 md:space-y-0">
          
          <div className="md:w-1/2 px-4">
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Hi there! I&apos;m a web developer with a passion for creating
              beautiful and functional websites. With expertise in HTML, CSS,
              JavaScript, React, Next.js, Tailwind CSS and TypeScript, I craft clean and efficient
              code to bring ideas to life. I&apos;m committed to continuous learning
              and pushing the boundaries of what&apos;s possible with modern
              technologies.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              My focus is on user-centric development, ensuring that websites
              not only perform well but provide exceptional user experiences.
              When I&apos;m not coding, you&apos;ll find me experimenting with new
              web development trends or contributing to open-source projects.
            </p>
          </div>

        
          <div className="md:w-1/3 px-4">
            <img
              src="/assets/picture.webp" 
              alt="Profile"
              className="  shadow-2xl w-80 h-80 mx-auto md:w-64 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
