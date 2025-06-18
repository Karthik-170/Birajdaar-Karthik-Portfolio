
const PhotoSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm text-red-500 font-medium uppercase tracking-wide">
            GALLERY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            PHOTO COLLECTION
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Photo */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/1dba9dc7-f380-42a7-900c-465099a39415.png" 
                  alt="Birajdaar Karthik at restaurant" 
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Casual Dining</p>
                  <p className="text-xs opacity-80">Enjoying good food and atmosphere</p>
                </div>
              </div>
            </div>

            {/* Placeholder for more photos */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-44 flex items-center justify-center">
                <p className="text-gray-500 text-sm">More photos coming soon...</p>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-44 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Upload more memories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
