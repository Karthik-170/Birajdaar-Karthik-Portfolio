
import { Check } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      year: "2024",
      status: "Verified & Completed"
    },
    {
      title: "Smart Coder",
      issuer: "Smart Interviews",
      year: "2025",
      status: "Verified & Completed"
    },
    {
      title: "Certification of completion of Java Full Stack",
      issuer: "Edu Skills",
      year: "2025",
      status: "Verified & Completed"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700/80 hover:to-gray-800/80 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-lg">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white font-bold text-base sm:text-lg group-hover:text-white">{cert.issuer}</p>
                    <p className="text-white font-bold text-base sm:text-lg group-hover:text-white">{cert.year}</p>
                  </div>
                  
                  <div className="flex-shrink-0 ml-6">
                    <div className="bg-green-500 rounded-full p-2 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
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
