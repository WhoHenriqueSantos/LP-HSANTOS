import React from 'react';
import { HIcon } from './icons';

const TestimonialCard: React.FC<{ quote: string; name: string; company: string; imageUrl: string }> = ({ quote, name, company, imageUrl }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-start h-full">
        <HIcon className="w-8 h-8 text-brand-orange mb-4" />
        <p className="text-brand-light flex-grow mb-6">"{quote}"</p>
        <div className="flex items-center mt-auto">
            <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-brand-gray">{company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "O trabalho de branding superou todas as nossas expectativas. A nova identidade visual realmente capturou a essência da nossa empresa.",
            name: "Ana Silva",
            company: "CEO, InovaTech",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
            quote: "A landing page que desenvolveram para nós aumentou nossa conversão em 40%. Profissionalismo e foco em resultado do início ao fim.",
            name: "Carlos Pereira",
            company: "Diretor de Marketing, VendeMais",
            imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            quote: "A gestão das nossas redes sociais está incrível. As artes são criativas e o engajamento do nosso público nunca foi tão alto.",
            name: "Juliana Costa",
            company: "Fundadora, Moda & Estilo",
            imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">O que nossos clientes dizem</h2>
                    <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">A confiança e o sucesso dos nossos parceiros são nosso maior orgulho.</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;