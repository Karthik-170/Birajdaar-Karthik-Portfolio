
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            QUALIFICATION
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            MY EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-4 gap-8 items-start">
                  {/* Period */}
                  <div className="text-right">
                    <div className="inline-block bg-white px-4 py-2 rounded-full border-2 border-red-500 text-red-500 font-bold text-sm">
                      {exp.period}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex justify-center relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full relative z-10"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-300"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
                        {exp.company}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
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
