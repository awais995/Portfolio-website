import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#4090db] to-[#3b85cf] text-white py-20"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ecf0f1] mb-10">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/assets/1.webp"
              alt="profile"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-[50%] mx-auto md:mx-0 w-80 h-80 object-cover shadow-lg hover:shadow-2xl transition duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <div className="text-left">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I am{" "}
                <span className="font-semibold">Muhammad Awais</span>, a
                passionate and dedicated{" "}
                <span className="font-semibold">Web Developer</span> with a
                strong background in{" "}
                <span className="font-semibold">
                  web development using the latest tech stack in cutting-edge
                  technologies
                </span>
                . I thrive on solving complex problems and delivering
                high-quality solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I hold a{" "}
                <span className="font-semibold">Diploma in Agentic AI</span> in
                Agentic AI Development Stack from Karachi University. Over the
                past <span className="font-semibold">1</span> year, I have gained
                valuable experience working with various companies and clients,
                enhancing my skills in
                <span className="font-semibold">
                  Agentic AI Hybrid UI, Agentic AI Stack, API Stack, Cloud Stack
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 bg-[#2c3e50] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#ecf0f1] mb-6">
            Goals
          </h3>
          <ul className="list-disc list-inside ml-4 text-left text-lg leading-relaxed text-[#bdc3c7]">
            <li>
              To continuously improve my skills and knowledge in
              <span className="font-semibold">
                {" "}
                HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, and
                Tailwind CSS
              </span>
              .
            </li>
            <li>To lead innovative projects that make a significant impact.</li>
            <li>To mentor and guide aspiring professionals in my field.</li>
          </ul>
        </div>

       
        <div className="bg-[#3b85cf] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#ecf0f1] mb-6">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg leading-relaxed">
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">HTML</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">CSS</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">JavaScript</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">TypeScript</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">React</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">Next.js</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">Node.js</span>
            </div>
            <div className="p-4 bg-[#515f6d] rounded-lg shadow-md hover:bg-[#2c3e50] transition duration-300 ease-in-out">
              <span className="font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
