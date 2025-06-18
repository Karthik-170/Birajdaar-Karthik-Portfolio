
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Others",
      skills: [
        { name: "UI/UX Design", level: 88 },
        { name: "Figma", level: 92 },
        { name: "Cybersecurity", level: 80 }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            SKILLS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            MY EXPERTISE
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                        <span className="text-xs text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
