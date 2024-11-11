const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-500 text-white py-20"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Skill 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">HTML</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-blue-500 w-90%"></div>
            </div>
            <p className="text-gray-400">Advanced knowledge of HTML5, semantic tags, and accessibility standards.</p>
          </div>
          
          {/* Skill 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">CSS</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-green-500 w-85%"></div>
            </div>
            <p className="text-gray-400">Proficient in CSS3, Flexbox, Grid, and responsive web design techniques.</p>
          </div>

          {/* Skill 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">JavaScript</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-yellow-500 w-80%"></div>
            </div>
            <p className="text-gray-400">Strong experience in JavaScript, including ES6 features, DOM manipulation, and asynchronous programming.</p>
          </div>

          {/* Skill 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">React</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-blue-400 w-75%"></div>
            </div>
            <p className="text-gray-400">Proficient in building dynamic UIs with React, including hooks and state management.</p>
          </div>

          {/* Skill 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Next.JS</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-purple-500 w-70%"></div>
            </div>
            <p className="text-gray-400">Experience with TypeScript for strong typing, better maintainability, and enhanced IDE support.</p>
          </div>

          {/* Skill 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-slate-700">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Node.JS</h3>
            <div className="h-2 bg-gray-600 mb-4">
              <div className="h-full bg-orange-500 w-65%"></div>
            </div>
            <p className="text-gray-400">Proficient in version control with Git and GitHub for efficient collaboration and version management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
