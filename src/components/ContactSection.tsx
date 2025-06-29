
import { Mail, Phone, Linkedin, Github, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        email: '',
        name: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 rounded-2xl p-8 backdrop-blur-lg">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-6 h-6 text-purple-500" />
              <h3 className="text-2xl font-bold text-white">Send me a message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-red-500 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-red-500 transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-gray-300 hover:text-red-500 transition-colors">Experience</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Full Stack Development</li>
                <li className="text-gray-300">Java Development</li>
                <li className="text-gray-300">Cybersecurity</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Me</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <a href="mailto:bkarthik1708@gmail.com" className="text-gray-300 hover:text-red-500 transition-colors">
                    bkarthik1708@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:+916281023460" className="text-gray-300 hover:text-red-500 transition-colors">
                    +91 6281023460
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
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

          <div className="text-center">
            <p className="text-gray-400">© 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
