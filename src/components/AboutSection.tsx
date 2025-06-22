
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                ABOUT ME
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
              {/* About Me Description */}
              <div className="text-left max-w-4xl mx-auto">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hi! I'm Karthik — a passionate developer and cybersecurity enthusiast with a solid foundation in programming and full-stack web development. I'm currently pursuing a Bachelor's degree in Computer Science and Engineering with a specialization in Cybersecurity at CMR Technical Campus.
                </p>
                <br />
                <p className="text-gray-300 leading-relaxed text-lg">
                  Proficient in Java and Data Structures & Algorithms (DSA), I enjoy building efficient, user-friendly web applications using modern technologies.
                </p>
                <br />
                <p className="text-gray-300 leading-relaxed text-lg">
                  Driven by curiosity and a commitment to continuous learning, I aim to bridge the gap between secure systems and innovative development. Let's connect and collaborate to build impactful, secure solutions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
