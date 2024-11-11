import Image from "next/image";

const projects = [
  {
    title: "Currency Converter",
    description:
      "Creating beautiful and responsive websites that look great on all devices.",
    imageUrl: "/assets/responsive.webp",
    link: "https://github.com/awais995/Currency-Converter", 
  },
  {
    title: "ATM",
    description:
      "Building robust e-commerce platforms to help you sell online effectively.",
    imageUrl: "/assets/Ecommerce.webp",
    link: "https://github.com/awais995/ATM", 
  },
  {
    title: "Resume Builder",
    description:
      "Enhancing your website visibility on search engines to attract more visitors.",
    imageUrl: "/assets/seo.webp",
    link: "https://static-resume-orcin.vercel.app/", 
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Projects 
      </h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Visit project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
