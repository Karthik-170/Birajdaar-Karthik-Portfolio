
import { Rocket } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            LET'S WORK TOGETHER
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                Email Me <Rocket className="w-6 h-6 text-red-500" />
              </h3>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/birajdaar-karthik-704181259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Karthik-170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-200 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-400">© 2025 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
