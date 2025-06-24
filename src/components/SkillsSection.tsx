
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: "/lovable-uploads/913420bc-8ee1-4fda-80fd-4f895bd35ba9.png", isImage: true },
        { name: "C++", icon: "/lovable-uploads/4eb138d8-c787-4f01-b4a7-fa7f3542d18b.png", isImage: true },
        { name: "Java", icon: "/lovable-uploads/60f1bcf8-225d-4bdd-b020-05c90b9ad577.png", isImage: true },
        { name: "JavaScript", icon: "/lovable-uploads/14f1ac99-2aa6-4e39-ac9b-0c318a1e51b9.png", isImage: true },
        { name: "Python", icon: "/lovable-uploads/91c9b514-e4fb-4718-aa3f-0ce947822455.png", isImage: true }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", icon: "/lovable-uploads/a3843c77-fce8-451f-89ab-20ca34f4ae24.png", isImage: true },
        { name: "TypeScript", icon: "/lovable-uploads/c302e917-b62d-4515-9392-740198174359.png", isImage: true },
        { name: "CSS/SCSS", icon: "/lovable-uploads/20b16e32-375b-49fa-82b4-64a0b064c541.png", isImage: true },
        { name: "Figma", icon: "/lovable-uploads/67c5be6f-eaa5-46f4-bc5e-0f80e0c118d3.png", isImage: true },
        { name: "HTML", icon: "/lovable-uploads/a8811193-5efb-41c5-ac86-c70a42fa8d25.png", isImage: true }
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        { name: "Node.js", icon: "/lovable-uploads/fdc37edf-6700-49c3-826e-e8cf948c2381.png", isImage: true },
        { name: "MongoDB", icon: "/lovable-uploads/1fadce29-b15d-4b7f-90d1-dc5c6e7d4059.png", isImage: true },
        { name: "Express", icon: "/lovable-uploads/bbc81df5-86d3-433a-bfcf-ece9a05ef9fb.png", isImage: true },
        { name: "Git", icon: "/lovable-uploads/fe2d5cbd-5dd8-4b36-9387-0a6674676eb6.png", isImage: true }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "GitHub", icon: "/lovable-uploads/bbcdf7fe-db91-4d47-82a9-0bc9dd14a499.png", isImage: true },
        { name: "VS Code", icon: "/lovable-uploads/b7ba0267-5454-45dc-9f25-92856645bf1a.png", isImage: true },
        { name: "AutoCAD", icon: "/lovable-uploads/27f36f40-581a-4db2-ba24-62b60ca07e7c.png", isImage: true },
        { name: "Tableau", icon: "/lovable-uploads/d5a758d5-14fe-4359-9783-899546b88984.png", isImage: true }
      ]
    },
    {
      category: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: "/lovable-uploads/a2f5b8fa-a5fb-429b-b294-c9a61eb9b1a1.png", isImage: true },
        { name: "Risk Assessment", icon: "⚠️", isImage: false },
        { name: "Incident Response", icon: "🛡️", isImage: false },
        { name: "Security Protocols", icon: "🔒", isImage: false }
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
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 w-20 h-20 flex flex-col items-center justify-center hover:bg-white/20 hover:border-red-400/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/20">
                        {skill.isImage ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                        ) : (
                          <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                        )}
                      </div>
                      <p className="mt-2 text-xs font-medium text-white group-hover:text-white transition-colors duration-200">{skill.name}</p>
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
