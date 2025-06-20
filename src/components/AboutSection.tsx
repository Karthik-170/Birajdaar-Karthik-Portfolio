
const AboutSection = () => {
  const educationData = [
    {
      institution: "CMR Technical Campus",
      location: "Hyderabad",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering with Artificial Intelligence And Machine Learning",
      duration: "Dec 2021 - May 2025",
      grade: "Grade: 8.43 CGPA",
      logo: "🎓",
      description: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering with Artificial Intelligence And Machine Learning at CMR Technical Campus, Hyderabad. I have completed 5 semesters and have a CGPA of 8.43. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others."
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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                ABOUT ME
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Education</h3>
                
                <div className="relative max-h-[500px] overflow-y-auto border-2 border-gray-600 rounded-3xl bg-gray-900/60 backdrop-blur-xl shadow-2xl advanced-scrollbar">
                  <div className="p-8 space-y-8">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative group">
                        {index < educationData.length - 1 && (
                          <div className="absolute left-12 top-24 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full"></div>
                        )}
                        
                        <div className="flex gap-8 p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 group backdrop-blur-sm">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/30">
                              {edu.logo}
                            </div>
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                  {edu.institution}{edu.location && `, ${edu.location}`}
                                </h4>
                                <p className="text-gray-300 font-semibold text-lg mt-1">{edu.degree}</p>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-800 flex-shrink-0 mt-2 shadow-lg animate-pulse"></div>
                            </div>
                            
                            <p className="text-purple-400 font-bold text-lg mb-3">{edu.duration}</p>
                            <p className="text-green-400 font-bold text-lg mb-4">{edu.grade}</p>
                            
                            {edu.description && (
                              <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .advanced-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .advanced-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
          margin: 10px;
        }
        .advanced-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #ef4444);
          border-radius: 10px;
          border: 2px solid rgba(31, 41, 55, 0.5);
        }
        .advanced-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed, #db2777, #dc2626);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
