
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certification of completion of Java Full Stack",
      issuer: "Smart Coder",
      icon: "☕",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cisco Introduction to Cyber Security",
      issuer: "Cisco",
      icon: "🔒",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            ACHIEVEMENTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            CERTIFICATIONS
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative max-h-96 overflow-y-auto border border-gray-600 rounded-2xl bg-gray-900/50 backdrop-blur-sm custom-scrollbar">
            <div className="p-8 space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="relative group">
                  {index < certifications.length - 1 && (
                    <div className="absolute left-12 top-20 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                  )}
                  
                  <div className="flex gap-6 p-6 bg-gray-800/70 border border-gray-700 rounded-xl hover:bg-gray-800/90 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {cert.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-red-400 font-semibold mt-2">{cert.issuer}</p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-gray-800 flex-shrink-0 mt-2 shadow-lg"></div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default CertificationsSection;
