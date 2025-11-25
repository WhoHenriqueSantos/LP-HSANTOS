import React from 'react';
import { InstagramIcon, WhatsappIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/50">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <a href="#hero" aria-label="HSANTOS DESIGN Logo" className="flex items-center gap-3">
                        <img src="./files/Logo.png" alt="HSANTOS DESIGN Logo" className="h-10 w-auto" />
                        <div className="hidden sm:block border-l-2 border-gray-700 pl-3">
                           <p className="text-white font-semibold leading-tight tracking-wide text-sm">DESIGN</p>
                           <p className="text-brand-gray text-xs leading-tight">Web & Graphic</p>
                       </div>
                    </a>

                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/hsantosdes" target="_blank" rel="noopener noreferrer" aria-label="Instagram de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <WhatsappIcon className="w-6 h-6" />
                        </a>
                        <a href="mailto:hsantostedes@gmail.com" aria-label="Email de HSANTOS DESIGN" className="text-brand-gray hover:text-brand-orange transition-colors duration-300">
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="text-center text-brand-gray text-sm mt-8 border-t border-gray-800 pt-6">
                    &copy; {new Date().getFullYear()} HSANTOS DESIGN. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;