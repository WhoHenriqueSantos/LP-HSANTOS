import React from 'react';

const PortfolioItem: React.FC<{ imageUrl: string; category: string; title: string; darken?: boolean; }> = ({ imageUrl, category, title, darken }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        {darken && <div className="absolute inset-0 bg-black/40"></div>}
        <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">{category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const projects = [
        { imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'Web Design', title: 'Site Institucional Moderno', darken: true },
        { imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'Branding', title: 'Identidade Visual Corporativa', darken: true },
        { imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', category: 'Social Media', title: 'Campanha para Redes Sociais' },
        { imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', category: 'Branding', title: 'Criação de Logomarca' },
        { imageUrl: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'Web Design', title: 'Landing Page de Alta Conversão', darken: true },
        { imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', category: 'Social Media', title: 'Posts para Instagram' },
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