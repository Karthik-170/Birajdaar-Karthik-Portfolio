const ExperienceSection = () => {
  const experiences = [
    {
      period: "Oct-Dec 2024",
      company: "GOOGLE",
      position: "ANDROID DEVELOPER VIRTUAL INTERNSHIP",
      description: "Completed Google's Android Developer Virtual Internship program, gaining hands-on experience in Android app development, learning modern development practices and Google's development tools."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-lg">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-current/30">
                      💼
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-2">
                      <p className="text-white font-bold text-base sm:text-lg group-hover:text-white">{exp.company}</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-white font-bold text-base sm:text-lg group-hover:text-white">{exp.period}</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    
                    <div className="flex items-center justify-center sm:justify-start space-x-3 mt-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                      <span className="text-white font-bold tracking-wide text-sm group-hover:text-white">Completed</span>
                    </div>
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

export default ExperienceSection;
