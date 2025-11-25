
import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative py-20 md:py-32 bg-brand-dark">
            <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                    Design não é só <span className="text-brand-orange">aparência</span>.
                    <br />
                    É estratégia e posicionamento.
                </h1>
                <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-8">
                    Criamos identidades visuais marcantes e sites modernos que transformam visitantes em clientes. Dê o próximo passo para o sucesso da sua marca.
                </p>
                <button 
                    onClick={scrollToContact}
                    className="bg-brand-orange text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                    Solicite um Orçamento
                </button>
            </div>
        </section>
    );
};

export default Hero;
