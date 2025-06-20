
const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time AI Generator",
      image: "/lovable-uploads/bebc7899-dfc8-44d5-bcb4-d95a00058979.png",
      tools: ["HTML", "CSS", "JavaScript", "AI API"],
      description: "I developed an innovative, web-based application that leverages advanced AI models to convert textual prompts into high-fidelity images. The project integrates modern web technologies (HTML, CSS) with a reliable image generation API to offer an intuitive and responsive user interface.",
      category: "WEB Apps"
    },
    {
      title: "ML Approach using Statistical Models for Early Detection of Cardiac Arrest",
      image: "/lovable-uploads/76aee953-03b0-4dea-b6f0-d75416477d70.png",
      tools: ["Machine Learning", "Statistical Models", "Healthcare AI", "Python"],
      description: "By analyzing key vital signs—heart rate, oxygen levels, breathing rate, and temperature etc. This AI-powered approach enhances early detection, enabling doctors to respond swiftly and take preventive measures.",
      category: "ML Apps"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            PORTFOLIO
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex bg-gray-800/60 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 shadow-xl">
            <button className="px-6 py-2 rounded-full text-purple-400 bg-gray-700/80 font-medium backdrop-blur-sm border border-purple-500/30 shadow-lg">All</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300">WEB Apps</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300">JAVA Apps</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300">ML Apps</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border-2 border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-gray-700/70 hover:to-gray-800/70 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group transform hover:-translate-y-2">
                <div className="p-8 space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
                        🚀 Live
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/40 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-300">Project Overview</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
                    </div>
                    
                    <div className="pt-4 flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm border border-white/10">
                        View Details
                      </button>
                      <button className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/60 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/60">
                        Live Demo
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
