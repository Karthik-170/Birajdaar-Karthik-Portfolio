
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
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            ACHIEVEMENTS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative max-h-[600px] overflow-y-auto border-2 border-gray-600/50 rounded-3xl bg-gray-900/60 backdrop-blur-xl shadow-2xl advanced-cert-scrollbar">
            <div className="p-10 space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative group">
                  {index < certifications.length - 1 && (
                    <div className="absolute left-14 top-28 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full shadow-lg"></div>
                  )}
                  
                  <div className="flex gap-8 p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 group backdrop-blur-lg">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-current/30`}>
                        {cert.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                            {cert.title}
                          </h3>
                          <p className="text-red-400 font-bold text-lg mt-3">{cert.issuer}</p>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-gray-800 flex-shrink-0 mt-2 shadow-lg animate-pulse"></div>
                      </div>
                      
                      <div className="flex items-center space-x-3 mt-6">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                        <span className="text-green-400 font-bold tracking-wide">Verified & Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .advanced-cert-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .advanced-cert-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.6);
          border-radius: 12px;
          margin: 15px;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
        }
        .advanced-cert-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          border-radius: 12px;
          border: 3px solid rgba(17, 24, 39, 0.6);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }
        .advanced-cert-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed, #db2777, #f59e0b);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;
