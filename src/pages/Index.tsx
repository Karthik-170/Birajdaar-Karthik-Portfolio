
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
