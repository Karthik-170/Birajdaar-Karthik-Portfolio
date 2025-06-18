
import { Mail, User, Link } from 'lucide-react';

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

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're a startup looking to build your first product or an 
            established company wanting to innovate, let's create something amazing together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="text-red-500" size={20} />
              <a href="mailto:hello@roboto.dev" className="text-white hover:text-red-500 transition-colors duration-200">
                hello@roboto.dev
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <User className="text-red-500" size={20} />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
              <span className="text-sm font-bold">f</span>
            </a>
            <a href="#" className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
              <span className="text-sm font-bold">t</span>
            </a>
            <a href="#" className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
              <Link size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
              <span className="text-sm font-bold">G</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
