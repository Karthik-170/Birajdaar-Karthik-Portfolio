
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
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded text-sm font-medium uppercase tracking-wide">
                ABOUT ME
              </div>
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
                <p className="text-gray-400 mb-8">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                
                <div className="relative max-h-96 overflow-y-auto border border-gray-700 rounded-2xl bg-gray-800/30 backdrop-blur-sm custom-scrollbar">
                  <div className="p-6 space-y-6">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative">
                        {index < educationData.length - 1 && (
                          <div className="absolute left-12 top-20 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                        )}
                        
                        <div className="flex gap-6 p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300 group">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                              {edu.logo}
                            </div>
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                  {edu.institution}{edu.location && `, ${edu.location}`}
                                </h4>
                                <p className="text-gray-300 font-medium">{edu.degree}</p>
                              </div>
                              <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-800 flex-shrink-0 mt-2"></div>
                            </div>
                            
                            <p className="text-purple-400 font-medium mb-2">{edu.duration}</p>
                            <p className="text-green-400 font-semibold mb-3">{edu.grade}</p>
                            
                            {edu.description && (
                              <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
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
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
