import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/image2.webp"
              alt="Project 1"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg mb-4"
              placeholder="empty"
            />
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Resume Builder
            </h3>
            <p className="text-gray-400 mb-6">
              A brief description of the first featured project. This project
              involved creating a dynamic web app with modern technologies.
            </p>
            <a
              href="https://static-resume-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                Visit Project
              </button>
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/image3.avif"
              alt="Project 2"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg mb-4"
              placeholder="empty"
            />
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Github Projects
            </h3>
            <p className="text-gray-400 mb-6">
              A brief description of the second featured project. This project
              showcases my all Github projects on Node.js.
            </p>
            <a
              href="https://github.com/awais995?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                Visit Project
              </button>
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/image4.avif"
              alt="Project 3"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg mb-4"
              placeholder="empty"
            />
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Todo App
            </h3>
            <p className="text-gray-400 mb-6">
              A brief description of the third featured project. This project
              showcases a Todo-App application built on Node.js.
            </p>
            <a
              href="https://github.com/awais995/todoApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                Visit Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
