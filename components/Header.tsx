import React from 'react';
import logo from '../logo.png';

const Header: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 bg-brand-dark/80 backdrop-blur-sm z-50 py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#hero" aria-label="HSANTOS DESIGN Logo" className="flex items-center gap-3">
                   <img src={logo} alt="HSANTOS DESIGN Logo" className="h-12 w-auto" />
                   <div className="hidden sm:block border-l-2 border-brand-gray pl-3">
                       <p className="text-white font-semibold leading-tight tracking-wide">DESIGN</p>
                       <p className="text-brand-gray text-sm leading-tight">Web & Graphic</p>
                   </div>
                </a>
                <nav>
                    <button 
                        onClick={scrollToContact}
                        className="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                        Fale Conosco
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;