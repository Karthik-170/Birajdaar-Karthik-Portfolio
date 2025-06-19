
const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time AI Generator",
      image: "/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png", // placeholder image
      tools: "HTML, CSS, JavaScript, AI API",
      description: "I developed an innovative, web-based application that leverages advanced AI models to convert textual prompts into high-fidelity images. The project integrates modern web technologies (HTML, CSS) with a reliable image generation API to offer an intuitive and responsive user interface."
    },
    {
      title: "ML Approach using Statistical Models for Early Detection of Cardiac Arrest In New Born Babies",
      image: "/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png", // placeholder image
      tools: "Machine Learning, Statistical Models, Healthcare AI",
      description: "By analyzing key vital signs—heart rate, oxygen levels, breathing rate, and temperature etc. This AI-powered approach enhances early detection, enabling doctors to respond swiftly and take preventive measures."
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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="mb-3">
                    <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {project.tools}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
                  <div className="pt-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      View Details
                    </button>
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
