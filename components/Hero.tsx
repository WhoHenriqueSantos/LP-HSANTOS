
import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2648&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
            <div className="absolute inset-0 bg-grid-gray-700/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 text-center relative z-20 -mt-4 md:-mt-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                    Design não é <span className="text-brand-orange">aparência</span>
                    <br />
                    É posicionamento
                </h1>
                <p className="text-base md:text-lg text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed">
                    Design, estratégia e performance para marcas que querem ir além
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={scrollToContact}
                        className="w-full sm:w-auto bg-brand-orange text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] text-base"
                    >
                        Solicite um Orçamento
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
