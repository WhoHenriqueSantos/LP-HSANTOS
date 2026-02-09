
import React from 'react';

const PortfolioBlock: React.FC<{ 
    category: string; 
    title: string; 
    imageUrl: string; 
    onClick: () => void;
}> = ({ category, title, imageUrl, onClick }) => (
    <button 
        onClick={onClick}
        className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] w-full text-left transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-orange"
    >
        {/* Background Image */}
        <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-3 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {category}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {title}
            </h3>
            
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span>Explorar Soluções</span>
                <span className="text-brand-orange">→</span>
            </div>
        </div>
    </button>
);

const Portfolio: React.FC = () => {
    const handleNavigation = (category: string) => {
        if (category === "WhatsApp") {
            window.open("https://wa.me/5511997991151", "_blank");
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="portfolio" className="py-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Nossos Resultados</h2>
                        <p className="text-xl text-brand-gray leading-relaxed">
                            Transformamos visões em realidade através de design estratégico. Descubra como elevamos o posicionamento de nossos clientes.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
                    <PortfolioBlock 
                        category="Web Design"
                        title="Interfaces que Convertem"
                        imageUrl="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80"
                        onClick={() => handleNavigation("Web Design")}
                    />
                    <PortfolioBlock 
                        category="Branding"
                        title="Identidades que Marcam"
                        imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
                        onClick={() => handleNavigation("Branding")}
                    />
                    <PortfolioBlock 
                        category="Social Media"
                        title="Conteúdo que Engaja"
                        imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
                        onClick={() => handleNavigation("Social Media")}
                    />
                </div>

                <div className="mt-20 text-center p-12 bg-gray-800/20 rounded-[2.5rem] border border-dashed border-gray-700/50 hover:bg-gray-800/30 transition-all duration-500">
                    <p className="text-brand-orange mb-4 text-xs font-bold tracking-[0.3em] uppercase">Pronto para o próximo nível?</p>
                    <button 
                        onClick={() => handleNavigation("WhatsApp")}
                        className="text-white font-extrabold text-xl md:text-3xl hover:text-brand-orange transition-all group flex flex-col md:flex-row items-center justify-center gap-6 mx-auto"
                    >
                        <span className="border-b-4 border-brand-orange pb-2 group-hover:border-white transition-colors leading-tight">
                            Chamar atendimento exclusivo via WhatsApp
                        </span>
                        <span className="hidden md:inline-block text-brand-orange group-hover:translate-x-3 transition-transform duration-300">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
