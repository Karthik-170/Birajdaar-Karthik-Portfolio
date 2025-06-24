
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: "💻" },
        { name: "C++", icon: "💻" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "💛" },
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "CSS/SCSS", icon: "🎨" },
        { name: "Figma", icon: "🎭" },
        { name: "HTML", icon: "🌐" }
      ]
    },
    {
      category: "Backend", 
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Git", icon: "🔴" },
        { name: "Express", icon: "⚡" }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "GitHub", icon: "🐱" },
        { name: "VS Code", icon: "🔷" },
        { name: "AutoCAD", icon: "🔴" },
        { name: "Tableau", icon: "🟠" }
      ]
    },
    {
      category: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: "🌐" },
        { name: "Risk Assessment", icon: "⚠️" },
        { name: "Incident Response", icon: "🛡️" },
        { name: "Security Protocols", icon: "🔒" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
            SKILLS & TOOLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <h3 className="text-xl font-bold text-white mb-8">{category.category}</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 w-24 h-24 flex flex-col items-center justify-center hover:bg-white/20 hover:border-red-400/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/20">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                      </div>
                      <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">{skill.name}</p>
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
