
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-red-500 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-red-500 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Web Development</li>
                <li className="text-gray-300">Java Development</li>
                <li className="text-gray-300">React</li>
                <li className="text-gray-300">Node.js</li>
                <li className="text-gray-300">Cybersecurity</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Contact Me</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">bkarthik1708@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">+91 6281023460</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/birajdaar-karthik-704181259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Karthik-170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-200 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 mb-8" />
          
          <div className="text-center">
            <p className="text-gray-400">© 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
