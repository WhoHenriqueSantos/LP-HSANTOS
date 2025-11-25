import React from 'react';
import { CheckIcon } from './icons';

const ServiceCard: React.FC<{ title: string; description: string; features: string[] }> = ({ title, description, features }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 shadow-lg hover:border-brand-orange/50 hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-brand-gray mb-6">{description}</p>
        <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-brand-orange" />
                    <span className="text-brand-light">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Services: React.FC = () => {
    const services = [
        {
            title: 'Design Gráfico & Logomarca',
            description: 'Construímos a identidade visual completa que sua marca precisa para se destacar no mercado.',
            features: ['Criação de Logo Estratégica', 'Manual de Marca Completo', 'Design para Redes Sociais', 'Materiais Gráficos (Online e Offline)'],
        },
        {
            title: 'Web Design & Desenvolvimento',
            description: 'Desenvolvemos sites institucionais e landing pages com foco em performance e experiência do usuário.',
            features: ['Layouts Modernos e Responsivos', 'Otimização para Conversão (CRO)', 'Carregamento Rápido (SEO)', 'Suporte Pós-Lançamento'],
        },
        {
            title: 'Presença Digital',
            description: 'Gerenciamos suas redes sociais com artes e estratégias que engajam seu público e geram resultados.',
            features: ['Planejamento de Conteúdo', 'Criação de Posts Profissionais', 'Análise de Métricas', 'Consistência de Marca'],
        },
    ];

    return (
        <section id="services" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nossas Soluções</h2>
                    <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">Tudo que você precisa para construir uma marca forte e uma presença online de impacto.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;