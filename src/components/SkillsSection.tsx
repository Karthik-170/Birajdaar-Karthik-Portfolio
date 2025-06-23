const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Figma", icon: "🎭" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Git", icon: "📋" },
        { name: "Express", icon: "🚀" }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "C", icon: "💻" },
        { name: "C++", icon: "🔧" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: "🐱" },
        { name: "VS Code", icon: "💻" },
        { name: "AutoCAD", icon: "📐" },
        { name: "Tableau", icon: "📊" }
      ]
    },
    {
      category: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: "🔒" },
        { name: "Security Protocols", icon: "🛡️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            SKILLS
          </p>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white text-center">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-700/50 border border-gray-600 rounded-xl p-3 text-center hover:bg-gray-600/50 hover:border-red-400/50 hover:scale-105 transition-all duration-200 group">
                      <div className="text-lg mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                      <span className="font-medium text-gray-200 text-xs lg:text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
