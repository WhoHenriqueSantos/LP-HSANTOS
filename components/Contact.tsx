import React, { useState, FormEvent } from 'react';
import { MailIcon, WhatsappIcon } from './icons';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        // ATENÇÃO: Substitua 'SEU_CODIGO_AQUI' pelo seu código de formulário do Formspree.
        // Ex: https://formspree.io/f/abcdefgh -> o código é 'abcdefgh'
        const formspreeId = 'xnnylzbl';

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setIsSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            }
        } catch (error) {
            alert('Ocorreu um erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Vamos começar seu projeto?</h2>
                    <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">Envie sua mensagem ou entre em contato por um dos nossos canais. Estamos prontos para ajudar.</p>
                </div>
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-800/50 p-4 sm:p-8 md:p-12 rounded-xl border border-gray-700/50">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                        <p className="text-brand-gray mb-8 text-sm sm:text-base">Prefere um contato mais direto? Nos chame no WhatsApp ou envie um e-mail.</p>
                        <a href="https://wa.me/5511997991151" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                            <WhatsappIcon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-brand-orange" />
                            <div className="min-w-0 flex-1">
                                <p className="font-semibold text-white text-sm sm:text-base">WhatsApp</p>
                                <p className="text-brand-gray text-xs sm:text-sm">(11) 99799-1151</p>
                            </div>
                        </a>
                        <a href="mailto:contato@hsantosdesign.com.br" className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 mt-2 sm:mt-4">
                            <MailIcon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-brand-orange" />
                            <div className="min-w-0 flex-1">
                                <p className="font-semibold text-white text-sm sm:text-base">E-mail</p>
                                <p className="text-brand-gray break-all text-[10px] sm:text-sm">contato@hsantosdesign.com.br</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        {isSubmitted ? (
                            <div className="bg-green-900/50 border border-green-700 text-white p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center h-full text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">Obrigado!</h3>
                                <p className="text-sm sm:text-base">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-brand-gray mb-1 sm:mb-2">Nome</label>
                                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-brand-gray mb-1 sm:mb-2">E-mail</label>
                                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-brand-gray mb-1 sm:mb-2">Mensagem</label>
                                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
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