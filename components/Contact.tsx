
import React, { useState, FormEvent } from 'react';
import { MailIcon, WhatsappIcon } from './icons';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API.
        // For this demo, we'll just simulate a successful submission.
        console.log({ name, email, message });
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Vamos começar seu projeto?</h2>
                    <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">Envie sua mensagem ou entre em contato por um dos nossos canais. Estamos prontos para ajudar.</p>
                </div>
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 bg-gray-800/50 p-8 md:p-12 rounded-xl border border-gray-700/50">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                        <p className="text-brand-gray mb-8">Prefere um contato mais direto? Nos chame no WhatsApp ou envie um e-mail.</p>
                        <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                            <WhatsappIcon className="w-8 h-8 text-brand-orange" />
                            <div>
                                <p className="font-semibold text-white">WhatsApp</p>
                                <p className="text-brand-gray">(11) 99799-1151</p>
                            </div>
                        </a>
                        <a href="mailto:hsantostedes@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 mt-4">
                            <MailIcon className="w-8 h-8 text-brand-orange" />
                            <div>
                                <p className="font-semibold text-white">E-mail</p>
                                <p className="text-brand-gray">hsantostedes@gmail.com</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        {isSubmitted ? (
                            <div className="bg-green-900/50 border border-green-700 text-white p-8 rounded-lg flex flex-col items-center justify-center h-full text-center">
                                <h3 className="text-2xl font-bold mb-2">Obrigado!</h3>
                                <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2">Nome</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">E-mail</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">Mensagem</label>
                                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02]">
                                    Enviar Mensagem
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
