
import React from 'react';
import { QuoteIcon } from './icons';

const TestimonialCard: React.FC<{ quote: string; name: string; company: string; imageUrl: string }> = ({ quote, name, company, imageUrl }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-start h-full">
        <QuoteIcon className="w-8 h-8 text-brand-orange mb-4" />
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
            imageUrl: "https://picsum.photos/seed/person1/100/100"
        },
        {
            quote: "A landing page que desenvolveram para nós aumentou nossa conversão em 40%. Profissionalismo e foco em resultado do início ao fim.",
            name: "Carlos Pereira",
            company: "Diretor de Marketing, VendeMais",
            imageUrl: "https://picsum.photos/seed/person2/100/100"
        },
        {
            quote: "A gestão das nossas redes sociais está incrível. As artes são criativas e o engajamento do nosso público nunca foi tão alto.",
            name: "Juliana Costa",
            company: "Fundadora, Moda & Estilo",
            imageUrl: "https://picsum.photos/seed/person3/100/100"
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
