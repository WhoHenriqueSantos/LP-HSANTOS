
import React from 'react';

const PortfolioItem: React.FC<{ imageUrl: string; category: string; title: string; }> = ({ imageUrl, category, title }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">{category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const projects = [
        { imageUrl: 'https://picsum.photos/seed/project1/600/400', category: 'Web Design', title: 'Site Institucional Moderno' },
        { imageUrl: 'https://picsum.photos/seed/project2/600/400', category: 'Branding', title: 'Identidade Visual Corporativa' },
        { imageUrl: 'https://picsum.photos/seed/project3/600/400', category: 'Social Media', title: 'Campanha para Redes Sociais' },
        { imageUrl: 'https://picsum.photos/seed/project4/600/400', category: 'Branding', title: 'Criação de Logomarca' },
        { imageUrl: 'https://picsum.photos/seed/project5/600/400', category: 'Web Design', title: 'Landing Page de Alta Conversão' },
        { imageUrl: 'https://picsum.photos/seed/project6/600/400', category: 'Social Media', title: 'Posts para Instagram' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Nosso Portfólio</h2>
                    <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">Confira alguns dos projetos que tivemos o prazer de criar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <PortfolioItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
