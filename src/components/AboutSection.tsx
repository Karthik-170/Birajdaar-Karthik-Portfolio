
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded text-sm font-medium uppercase tracking-wide">
                ABOUT ME
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                PASSIONATE ABOUT TECHNOLOGY & SECURITY
              </h2>
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
                Computer Science Student & Cybersecurity Enthusiast
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">B.Tech in Computer Science (Cyber Security)</p>
                      <p className="text-gray-600">CMR Technical Campus</p>
                      <p className="text-sm text-gray-500">CGPA: 8.4/10.0 | 2022 - 2026</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Intermediate (MPC)</p>
                      <p className="text-gray-600">Narayana Junior College</p>
                      <p className="text-sm text-gray-500">82.5% | 2022</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Programming:</span> C, C++, Java, Python</p>
                    <p><span className="font-medium">Course Work:</span> DSA, Operating Systems, OOPS, DBMS, Machine Learning</p>
                    <p><span className="font-medium">Tools:</span> MySQL, AutoCAD, Tableau, Figma</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors duration-200 uppercase tracking-wide">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
