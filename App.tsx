
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebDesignVitrine from './components/WebDesignVitrine';
import { HIcon } from './components/icons';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'webdesign'>('home');

  const handleSetView = (view: 'home' | 'webdesign') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-brand-dark text-brand-light font-sans antialiased min-h-screen flex flex-col">
      <Header currentView={currentView} onViewChange={handleSetView} />
      
      {currentView === 'home' ? (
        <main className="relative overflow-x-hidden flex-grow">
          <Hero />
          <div className="relative">
            <HIcon className="absolute top-64 left-1/2 -translate-x-1/2 text-brand-orange opacity-5 w-[900px] h-[900px] -rotate-[36deg] transform-gpu pointer-events-none" />
            <Services />
            <Portfolio onViewWebDesign={() => handleSetView('webdesign')} />
          </div>
          <Testimonials />
          <Contact />
        </main>
      ) : (
        <main className="flex-grow">
          <WebDesignVitrine onBack={() => handleSetView('home')} />
        </main>
      )}
      
      <Footer onViewChange={handleSetView} />
    </div>
  );
};

export default App;