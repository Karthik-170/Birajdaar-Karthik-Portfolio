
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
        { name: "Node.js", icon: "🟢", isImage: false },
        { name: "MongoDB", icon: "🍃", isImage: false },
        { name: "Express", icon: "⚡", isImage: false },
        { name: "MySQL", icon: "🐬", isImage: false }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", icon: "🔴", isImage: false },
        { name: "GitHub", icon: "🐱", isImage: false },
        { name: "VS Code", icon: "💙", isImage: false },
        { name: "Docker", icon: "🐳", isImage: false }
      ]
    },
    {
      category: "Design & Visualization",
      skills: [
        { name: "AutoCAD", icon: "📐", isImage: false },
        { name: "Tableau", icon: "📊", isImage: false },
        { name: "Photoshop", icon: "🎨", isImage: false },
        { name: "Canva", icon: "🎯", isImage: false }
      ]
    },
    {
      category: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: "🔐", isImage: false },
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
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 w-24 h-24 flex flex-col items-center justify-center hover:bg-white/20 hover:border-red-400/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/20">
                        {skill.isImage ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                        ) : (
                          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                        )}
                      </div>
                      <p className="mt-3 text-sm font-medium text-white group-hover:text-white transition-colors duration-200">{skill.name}</p>
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
