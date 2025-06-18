
const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time AI Generator",
      description: "I developed an innovative, web-based application that leverages advanced AI models to convert textual prompts into high-fidelity images. The project integrates modern web technologies (HTML, CSS) with a reliable image generation API to offer an intuitive and responsive user interface.",
      tech: "HTML, CSS, JavaScript, AI API"
    },
    {
      title: "ML Approach using Statistical Models for Early Detection of Cardiac Arrest In New Born Babies",
      description: "By analyzing key vital signs—heart rate, oxygen levels, breathing rate, and temperature etc. This AI-powered approach enhances early detection, enabling doctors to respond swiftly and take preventive measures.",
      tech: "Machine Learning, Statistical Models, Healthcare AI"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            PORTFOLIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            PROJECTS
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="pt-4">
                    <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
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

export default ProjectsSection;
