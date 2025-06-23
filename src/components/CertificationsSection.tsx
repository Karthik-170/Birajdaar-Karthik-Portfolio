
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      year: "2024",
      icon: "🔒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Coder",
      issuer: "Smart Interviews",
      year: "2025",
      icon: "💻",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Certification of completion of Java Full Stack",
      issuer: "Edu Skills",
      year: "2025",
      icon: "☕",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            CERTIFICATIONS
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-lg">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-current/30`}>
                      {cert.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-red-400 font-bold text-base sm:text-lg">{cert.issuer}</p>
                    <p className="text-purple-400 font-bold text-base sm:text-lg">{cert.year}</p>
                    
                    <div className="flex items-center justify-center sm:justify-start space-x-3 mt-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                      <span className="text-green-400 font-bold tracking-wide text-sm">Verified & Completed</span>
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

export default CertificationsSection;
