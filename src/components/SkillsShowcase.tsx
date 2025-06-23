
const SkillsShowcase = () => {
  const skillsData = {
    Frontend: [
      { name: "React Js", color: "from-cyan-400 to-blue-500" },
      { name: "Redux", color: "from-purple-400 to-purple-600" },
      { name: "Next Js", color: "from-gray-700 to-black" },
      { name: "HTML", color: "from-orange-500 to-red-500" },
      { name: "CSS", color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
      { name: "Bootstrap", color: "from-purple-500 to-purple-700" },
      { name: "Material UI", color: "from-blue-500 to-indigo-600" },
      { name: "Flutter", color: "from-blue-400 to-cyan-500" }
    ],
    Backend: [
      { name: "Node Js", color: "from-green-400 to-green-600" },
      { name: "Express Js", color: "from-gray-600 to-gray-800" },
      { name: "Graph Ql", color: "from-pink-500 to-pink-700" },
      { name: "Python", color: "from-blue-400 to-yellow-400" },
      { name: "MySQL", color: "from-orange-400 to-blue-500" },
      { name: "Postgresql", color: "from-blue-500 to-blue-700" },
      { name: "MongoDB", color: "from-green-500 to-green-700" },
      { name: "Firebase", color: "from-yellow-400 to-orange-500" },
      { name: "NoSQL", color: "from-blue-400 to-blue-600" }
    ],
    Languages: [
      { name: "Java", color: "from-orange-500 to-red-600" },
      { name: "C++", color: "from-blue-500 to-blue-700" },
      { name: "Python", color: "from-blue-400 to-yellow-400" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
      { name: "C", color: "from-blue-600 to-blue-800" }
    ],
    Others: [
      { name: "Git", color: "from-red-500 to-red-700" },
      { name: "GitHub", color: "from-gray-700 to-black" },
      { name: "Docker", color: "from-blue-400 to-blue-600" },
      { name: "Netlify", color: "from-teal-400 to-teal-600" },
      { name: "VS Code", color: "from-blue-500 to-blue-700" },
      { name: "Adobe XD", color: "from-purple-500 to-pink-500" },
      { name: "Figma", color: "from-purple-400 to-pink-400" }
    ]
  };

  return (
    <section id="skills-showcase" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
            TECH STACK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-purple-500/30 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-r ${skill.color} p-[1px] rounded-xl hover:scale-105 transition-all duration-300`}>
                      <div className="bg-gray-800/80 rounded-xl p-4 text-center hover:bg-gray-700/80 transition-all duration-300">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
