
import React, { useState, useEffect } from 'react';
import { HsantosFullLogo, InstagramIcon, MailIcon, WhatsappIcon } from './icons';
import { motion, AnimatePresence } from 'motion/react';

const HamburgerIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <div className="w-8 h-8 relative flex flex-col justify-center items-center">
        <motion.span
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            className="w-full h-1 bg-white rounded-full absolute transition-colors"
            transition={{ duration: 0.3 }}
        />
        <motion.span
            animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            className="w-full h-1 bg-white rounded-full absolute transition-colors"
            transition={{ duration: 0.3 }}
        />
        <motion.span
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            className="w-full h-1 bg-white rounded-full absolute transition-colors"
            transition={{ duration: 0.3 }}
        />
    </div>
);

interface HeaderProps {
    currentView?: 'home' | 'webdesign';
    onViewChange?: (view: 'home' | 'webdesign') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView = 'home', onViewChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        if (currentView === 'webdesign') {
            setActiveSection('portfolio');
            return;
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection logic
            const sections = ['hero', 'services', 'portfolio', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 120; // Slightly larger offset for better switching

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentView]);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);

        if (currentView === 'webdesign') {
            if (onViewChange) {
                onViewChange('home');
                setTimeout(() => {
                    if (id === 'hero') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                    }
                    const element = document.getElementById(id);
                    if (element) {
                        const headerHeight = 90;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerHeight;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
            return;
        }

        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 90; // Approximate height of fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Soluções', id: 'services' },
        { name: 'Portifólio', id: 'portfolio' },
        { name: 'Feedback', id: 'testimonials' },
        { name: 'Contato', id: 'contact' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || isMenuOpen 
                ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl border-b border-gray-800/50' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a 
                    href="#hero" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} 
                    aria-label="HSANTOS DESIGN Logo" 
                    className="flex items-center gap-3 transition-transform hover:scale-105"
                >
                   <HsantosFullLogo className="h-10 sm:h-12 w-auto" />
                   <div className="hidden sm:block border-l-2 border-brand-gray pl-3">
                       <p className="text-white font-semibold leading-tight tracking-wide">DESIGN</p>
                       <p className="text-brand-gray text-sm leading-tight">Web & Graphic</p>
                   </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`font-medium transition-colors duration-300 relative group ${
                                activeSection === link.id ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-5">
                        <a href="https://www.instagram.com/hsantosdes" target="_blank" rel="noopener noreferrer" aria-label="Instagram de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-all duration-300 hover:scale-110">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-all duration-300 hover:scale-110">
                            <WhatsappIcon className="w-6 h-6" />
                        </a>
                        <a href="mailto:contato@hsantosdesign.com.br" aria-label="Email de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-all duration-300 hover:scale-110">
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="hidden sm:block bg-brand-orange text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        Fale Conosco
                    </button>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors relative w-12 h-12 flex items-center justify-center z-[70]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        <HamburgerIcon isOpen={isMenuOpen} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="lg:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 shadow-2xl py-10 px-8 flex flex-col gap-6 z-[60]"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`font-semibold text-left text-2xl py-4 border-b border-gray-800/50 transition-colors ${
                                    activeSection === link.id ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="flex items-center gap-10 mt-8 justify-center">
                            <a href="https://www.instagram.com/hsantosdes" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-orange transform scale-150 transition-transform">
                                <InstagramIcon className="w-8 h-8" />
                            </a>
                            <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-orange transform scale-150 transition-transform">
                                <WhatsappIcon className="w-8 h-8" />
                            </a>
                            <a href="mailto:contato@hsantosdesign.com.br" className="text-brand-gray hover:text-brand-orange transform scale-150 transition-transform">
                                <MailIcon className="w-8 h-8" />
                            </a>
                        </div>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="bg-brand-orange text-white font-bold py-5 px-6 rounded-2xl shadow-xl mt-6 text-xl active:scale-95 transition-transform"
                        >
                            Fale Conosco
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;