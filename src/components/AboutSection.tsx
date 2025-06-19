
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
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Education</h3>
                <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <p className="font-medium text-gray-900">B.Tech in Computer Science (Cyber Security)</p>
                    <p className="text-gray-600">CMR Technical Campus</p>
                    <p className="text-sm text-gray-500">CGPA: 8.4/10.0 | 2022 - 2026</p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <p className="font-medium text-gray-900">Intermediate (MPC)</p>
                    <p className="text-gray-600">Narayana Junior College</p>
                    <p className="text-sm text-gray-500">82.5% | 2022</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Class X</p>
                    <p className="text-gray-600">Oxford Grammar School</p>
                    <p className="text-sm text-gray-500">GPA: 9.3/10.0 | May 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
