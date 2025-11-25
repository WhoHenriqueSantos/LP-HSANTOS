
import React from 'react';
import { HsantosFullLogo, InstagramIcon, MailIcon, WhatsappIcon } from './icons';

const Header: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 bg-brand-dark/80 backdrop-blur-sm z-50 py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#hero" aria-label="HSANTOS DESIGN Logo" className="flex items-center gap-3">
                   <HsantosFullLogo className="h-10 sm:h-12 w-auto" />
                   <div className="hidden sm:block border-l-2 border-brand-gray pl-3">
                       <p className="text-white font-semibold leading-tight tracking-wide">DESIGN</p>
                       <p className="text-brand-gray text-sm leading-tight">Web & Graphic</p>
                   </div>
                </a>
                <nav className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-5">
                        <a href="https://www.instagram.com/hsantosdes" target="_blank" rel="noopener noreferrer" aria-label="Instagram de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <WhatsappIcon className="w-6 h-6" />
                        </a>
                        <a href="mailto:contato@hsantosdesign.com.br" aria-label="Email de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>
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