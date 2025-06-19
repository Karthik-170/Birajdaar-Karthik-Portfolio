
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    'Computer Science Student',
    'Frontend Developer'
  ];

  useEffect(() => {
    if (currentPhase >= phases.length) return;
    
    const currentText = phases[currentPhase];
    const timer = setTimeout(() => {
      if (displayedText.length < currentText.length) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentPhase(currentPhase + 1);
          setDisplayedText('');
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayedText, currentPhase]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                HI! I'M
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-red-500">
                BIRAJDAAR KARTHIK
              </h2>
              <div className="space-y-2 min-h-[60px]">
                <p className="text-lg text-gray-600 font-medium">
                  <span className="text-red-500 font-bold">{displayedText}</span>
                  {currentPhase < phases.length && <span className="animate-pulse">|</span>}
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <button className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                <FileText size={20} />
                <span>Check Resume</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">bkarthik1708@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">📞 +91 6281023460</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png" 
                  alt="Birajdaar Karthik" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-red-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-500 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
