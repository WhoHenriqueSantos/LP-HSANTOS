import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebDesignVitrine from './components/WebDesignVitrine';
import BrandingVitrine from './components/BrandingVitrine';
import SocialMediaVitrine from './components/SocialMediaVitrine';
import { HIcon } from './components/icons';

// Component to handle scroll restoration and hash navigation
const ScrollHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerHeight = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 120);
        return;
      }
    }
    // If not a hash jump on the home page, scroll to top on route change
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return null;
};

// Home Landing Page
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative overflow-x-hidden flex-grow">
      <Hero />
      <div className="relative">
        <HIcon className="absolute top-64 left-1/2 -translate-x-1/2 text-brand-orange opacity-5 w-[900px] h-[900px] -rotate-[36deg] transform-gpu pointer-events-none" />
        <Services />
        <Portfolio 
          onViewWebDesign={() => navigate('/web')} 
          onViewBranding={() => navigate('/branding')}
          onViewSocialMedia={() => navigate('/graphic')}
        />
      </div>
      <Testimonials />
      <Contact />
    </main>
  );
};

const AppLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-brand-dark text-brand-light font-sans antialiased min-h-screen flex flex-col">
      <ScrollHandler />
      <Header />
      
      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomePage />} />

        {/* 1. Web root & dynamic client routes */}
        <Route path="/web" element={<WebDesignVitrine onBack={() => navigate('/')} />} />
        <Route path="/web/:cliente" element={<WebDesignVitrine onBack={() => navigate('/')} />} />

        {/* 2. Branding root & dynamic client routes */}
        <Route path="/branding" element={<BrandingVitrine onBack={() => navigate('/')} />} />
        <Route path="/branding/:cliente" element={<BrandingVitrine onBack={() => navigate('/')} />} />
        {/* Alias for typos like /brading/nome-do-cliente */}
        <Route path="/brading/:cliente" element={<BrandingVitrine onBack={() => navigate('/')} />} />
        <Route path="/brading" element={<Navigate to="/branding" replace />} />

        {/* 3. Graphic root & dynamic client routes */}
        <Route path="/graphic" element={<SocialMediaVitrine onBack={() => navigate('/')} />} />
        <Route path="/graphic/:cliente" element={<SocialMediaVitrine onBack={() => navigate('/')} />} />
        {/* Alias for backward compatibility /socialmedia */}
        <Route path="/socialmedia" element={<Navigate to="/graphic" replace />} />
        <Route path="/socialmedia/:cliente" element={<SocialMediaVitrine onBack={() => navigate('/')} />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;