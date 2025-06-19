
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Java", "Python"]
    },
    {
      category: "Languages",
      skills: ["C++", "Java", "JavaScript"]
    },
    {
      category: "Others",
      skills: ["UI/UX Design", "Figma", "Cybersecurity"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-red-300 hover:shadow-sm transition-all duration-200">
                      <span className="font-medium text-gray-900 text-sm">{skill}</span>
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
