
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-2xl">
                <User size={120} className="text-white opacity-80" />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-gray-200 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded text-sm font-medium uppercase tracking-wide">
                ABOUT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                DO SOME AWESOME STUFF WITH ME.
              </h2>
              <div className="w-16 h-1 bg-red-500"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
                UI / UX Designer & Web Developer
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
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
