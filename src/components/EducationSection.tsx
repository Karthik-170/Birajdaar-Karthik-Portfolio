
const EducationSection = () => {
  const educationData = [
    {
      institution: "CMR Technical Campus",
      location: "Hyderabad",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering with Cyber Security",
      duration: "2022 - 2026",
      grade: "Grade: 8.49 CGPA",
      logo: "🎓",
      description: "Currently pursuing Bachelor's degree in Computer Science and Engineering with Cyber Security."
    },
    {
      institution: "Narayana Junior College",
      location: "",
      degree: "Intermediate (MPC)",
      duration: "2022",
      grade: "82.5%",
      logo: "📚",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry."
    },
    {
      institution: "Oxford Grammar School",
      location: "",
      degree: "Class X",
      duration: "May 2020",
      grade: "GPA: 9.3/10.0",
      logo: "🏫",
      description: "Completed high school education with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            EDUCATION
          </div>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/30">
                      {edu.logo}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                      {edu.institution}{edu.location && `, ${edu.location}`}
                    </h4>
                    <p className="text-gray-300 font-semibold text-base sm:text-lg mb-2">{edu.degree}</p>
                    <p className="text-purple-400 font-bold text-base sm:text-lg mb-1">{edu.duration}</p>
                    <p className="text-green-400 font-bold text-base sm:text-lg mb-3">{edu.grade}</p>
                    
                    {edu.description && (
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
