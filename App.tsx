
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative">
          <HIcon className="absolute top-64 left-1/2 -translate-x-1/2 text-brand-orange opacity-5 w-[900px] h-[900px] -rotate-[36deg] transform-gpu pointer-events-none" />
          <Services />
          <Portfolio />
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
