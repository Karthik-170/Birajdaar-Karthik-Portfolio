
import { Code, Database, Palette, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: "HTML/CSS", icon: "🌐" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8 text-green-400" />,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      category: "Languages",
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "C++", icon: "🔧" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "⚡" }
      ]
    },
    {
      category: "Others",
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      skills: [
        { name: "UI/UX Design", icon: "🎨" },
        { name: "Figma", icon: "🎭" },
        { name: "Cybersecurity", icon: "🔒" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            SKILLS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            MY EXPERTISE
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 text-center hover:bg-gray-600/50 hover:border-red-400/50 hover:scale-105 transition-all duration-200 group">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</div>
                      <span className="font-medium text-gray-200 text-sm">{skill.name}</span>
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
