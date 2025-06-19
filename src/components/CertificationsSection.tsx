
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certification of completion of Java Full Stack",
      issuer: "Smart Coder"
    },
    {
      title: "Cisco Introduction to Cyber Security",
      issuer: "Cisco"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            ACHIEVEMENTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            CERTIFICATIONS
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-6 space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-red-600 font-medium">{cert.issuer}</p>
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
