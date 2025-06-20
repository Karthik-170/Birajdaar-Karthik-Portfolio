
const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time AI Generator",
      image: "/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png",
      tools: ["HTML", "CSS", "JavaScript", "AI API"],
      description: "I developed an innovative, web-based application that leverages advanced AI models to convert textual prompts into high-fidelity images. The project integrates modern web technologies (HTML, CSS) with a reliable image generation API to offer an intuitive and responsive user interface.",
      category: "WEB Apps"
    },
    {
      title: "ML Approach using Statistical Models for Early Detection of Cardiac Arrest",
      image: "/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png",
      tools: ["Machine Learning", "Statistical Models", "Healthcare AI", "Python"],
      description: "By analyzing key vital signs—heart rate, oxygen levels, breathing rate, and temperature etc. This AI-powered approach enhances early detection, enabling doctors to respond swiftly and take preventive measures.",
      category: "ML Apps"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            PORTFOLIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            PROJECTS
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-full p-1 border border-gray-700">
            <button className="px-6 py-2 rounded-full text-purple-400 bg-gray-700 font-medium">All</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">WEB Apps</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">JAVA Apps</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">ML Apps</button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        🚀
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-300">Feature Extraction</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
                    </div>
                    
                    <div className="pt-4">
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View Details
                      </button>
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

export default ProjectsSection;
