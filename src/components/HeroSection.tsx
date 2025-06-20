
import { FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    'Cyber Security Student',
    'Frontend Developer',
    'UI/UX Designer'
  ];

  useEffect(() => {
    if (currentPhase >= phases.length) {
      // Reset to loop through phases continuously
      setCurrentPhase(0);
      setDisplayedText('');
      return;
    }
    
    const currentText = phases[currentPhase];
    const timer = setTimeout(() => {
      if (displayedText.length < currentText.length) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentPhase(currentPhase + 1);
          setDisplayedText('');
        }, 2000); // Wait 2 seconds before next phase
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayedText, currentPhase]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-xl lg:text-2xl font-medium text-gray-300">
                  HI! I'M
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  BIRAJDAAR
                </h2>
                <h2 className="text-4xl lg:text-6xl font-bold text-red-500 leading-tight">
                  KARTHIK
                </h2>
              </div>
              <div className="space-y-2 min-h-[80px] flex flex-col items-center lg:items-start">
                <p className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">I'm a </span>
                  <span className="text-red-500">{displayedText}</span>
                  <span className="animate-pulse text-red-500">|</span>
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-purple-500 to-pink-500">
                <img 
                  src="/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png" 
                  alt="Birajdaar Karthik" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-red-500 rounded-full opacity-60 animate-spin"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
