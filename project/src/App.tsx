import { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RegisterSection from './components/RegisterSection';
import CertificatesSection from './components/CertificatesSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    if (hasSeenAnimation) {
      setLoading(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasSeenAnimation', 'true');
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <LoadingAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <HeroSection onNavigate={handleNavigate} />
      <AboutSection />
      <RegisterSection />
      <CertificatesSection />
    </div>
  );
}

export default App;
