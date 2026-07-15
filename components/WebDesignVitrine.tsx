import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ExternalLink, Globe, Monitor, Shield, Sparkles, Zap, Code } from 'lucide-react';
import { WhatsappIcon } from './icons';

interface WebDesignVitrineProps {
    onBack: () => void;
}

const WebDesignVitrine: React.FC<WebDesignVitrineProps> = ({ onBack }) => {
    const projects = [
        {
            title: "Veritas Contabilidade",
            subtitle: "contabilidade consultiva",
            description: "Uma landing page institucional desenvolvida para valorizar a autoridade da Veritas. Com uma paleta em verde floresta profundo e detalhes em bronze refinado, o design transmite segurança, sobriedade e sofisticação estratégica para empresários de grande porte.",
            imageUrl: "/veritasHero.png",
            liveUrl: "https://veritas-cont.vercel.app/",
            accentColor: "from-amber-600 to-orange-500",
            buttonColor: "bg-brand-orange hover:bg-opacity-90 shadow-brand-orange/20",
            borderColor: "border-brand-orange/20",
            textColor: "text-brand-orange",
            tags: ["Contabilidade", "Corporate", "B2B"],
            highlights: [
                { icon: Shield, text: "Design focado em transmitir autoridade e conformidade fiscal." },
                { icon: Zap, text: "Otimização extrema de carregamento e pontuação 100/100 de performance." },
                { icon: Sparkles, text: "Simulador de Economia Fiscal interativo integrado para atração de leads." }
            ],
            tech: ["React", "Vite", "Tailwind CSS", "Motion", "UX Consultivo"]
        },
        {
            title: "RM Advocacia",
            subtitle: "Direito do trabalho",
            description: "Projeto de altíssimo nível criado para o Dr. Ricardo Montserrat. A interface traz uma atmosfera corporativa de prestígio, unindo azul marinho profundo, elementos de madeira nobre e linhas douradas finas. Perfeito para destacar o rigor técnico e representação firme do escritório.",
            imageUrl: "/rmHero.png",
            liveUrl: "https://rm-advocacia-rouge.vercel.app/",
            accentColor: "from-amber-600 to-orange-500",
            buttonColor: "bg-brand-orange hover:bg-opacity-90 shadow-brand-orange/20",
            borderColor: "border-brand-orange/20",
            textColor: "text-brand-orange",
            tags: ["Advocacia", "Boutique", "Legal Tech"],
            highlights: [
                { icon: Shield, text: "Layout desenhado estrategicamente para conversão." },
                { icon: Zap, text: "Seções interativas de Casos de Sucesso e Áreas de Atuação." },
                { icon: Sparkles, text: "Tipografia clássica combinada com estética contemporânea e fluida." }
            ],
            tech: ["React", "Vite", "Tailwind CSS", "AnimatePresence", "SEO Otimizado"]
        }
    ];

    const handleWhatsappInquiry = (projectName: string) => {
        const text = encodeURIComponent(`Olá! Vi o projeto do site da ${projectName} na sua vitrine de Web Design e gostaria de fazer um orçamento de um site semelhante.`);
        window.open(`https://wa.me/5511997991151?text=${text}`, "_blank");
    };

    return (
        <section className="bg-brand-dark text-white min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Back Link */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-brand-gray hover:text-brand-orange transition-colors font-medium text-sm group"
                    >
                        <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                        Voltar para a Página Inicial
                    </button>
                </motion.div>

                {/* Header */}
                <div className="mb-16 text-center md:text-left max-w-3xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
                            Vitrine de Projetos
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Nossas Criações de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Web Design</span>
                        </h1>
                        <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                            Interfaces feitas sob medida, desenhadas para converter. Um trabalho pensado detalhe por detalhe para destacar os seus pontos fortes e consolidar a sua presença no digital.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Showcase Stack */}
                <div className="space-y-24 sm:space-y-32">
                    {projects.map((proj, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Browser Mockup Visual Column */}
                            <div className="w-full lg:w-7/12 group relative">
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange/20 to-transparent blur opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Browser Frame Container */}
                                <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-950 shadow-2xl transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_50px_rgba(249,105,50,0.15)]">
                                    {/* Mac OS Window Controls */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800/80">
                                        <div className="flex gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                                        </div>
                                        {/* Browser Address Bar */}
                                        <div className="flex items-center gap-2 bg-black/40 text-gray-500 text-xs px-4 sm:px-12 py-1.5 rounded-md max-w-xs sm:max-w-md w-full mx-auto justify-center">
                                            <Globe className="w-3.5 h-3.5 text-gray-600" />
                                            <span className="truncate font-mono tracking-wide">{proj.liveUrl.replace('https://', '')}</span>
                                        </div>
                                        <div className="w-12"></div> {/* spacer */}
                                    </div>

                                    {/* Website Screenshot Image */}
                                    <div className="aspect-[16/10] w-full overflow-hidden relative bg-gray-900">
                                        <img 
                                            src={proj.imageUrl} 
                                            alt={`Preview do site ${proj.title}`} 
                                            className="w-full h-full object-cover object-top transition-all duration-[4s] ease-in-out hover:object-bottom cursor-pointer"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Information Column */}
                            <div className="w-full lg:w-5/12 space-y-6">

                                <div className="space-y-2">
                                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{proj.title}</h2>
                                    <p className={`text-sm font-semibold uppercase tracking-wider ${proj.textColor}`}>{proj.subtitle}</p>
                                </div>

                                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                                    {proj.description}
                                </p>

                                {/* Highlights Section */}
                                <div className="space-y-4 pt-2">
                                    {proj.highlights.map((high, i) => {
                                        const IconComponent = high.icon;
                                        return (
                                            <div key={i} className="flex gap-4 items-center">
                                                <div className={`p-2.5 rounded-xl bg-gray-800/80 border ${proj.borderColor} ${proj.textColor} shrink-0`}>
                                                    <IconComponent className="w-4 h-4" />
                                                </div>
                                                <p className="text-xs sm:text-sm text-brand-gray/90 leading-relaxed font-medium">{high.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Tech Tags */}
                                <div className="pt-2">
                                    <div className="flex flex-wrap gap-1.5 items-center">
                                        <Code className="w-4 h-4 text-brand-gray mr-1" />
                                        {proj.tech.map((t, i) => (
                                            <span key={i} className="text-xs bg-gray-800/40 text-brand-gray px-2 py-0.5 rounded font-mono border border-gray-800/65">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a 
                                        href={proj.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base ${proj.buttonColor}`}
                                    >
                                        Acessar Site Ativo
                                        <ExternalLink className="w-4.5 h-4.5" />
                                    </a>
                                    <button 
                                        onClick={() => handleWhatsappInquiry(proj.title)}
                                        className="flex items-center gap-2 border border-gray-700 bg-gray-800/30 hover:bg-gray-800/80 text-brand-gray hover:text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm sm:text-base"
                                    >
                                        <WhatsappIcon className="w-4 h-4" />
                                        Projeto Similar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action Box */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28 p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-brand-dark to-gray-900 border border-gray-800 relative overflow-hidden text-center"
                >
                    {/* Background glow effects */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                        <span className="text-brand-orange text-xs font-extrabold tracking-[0.3em] uppercase">
                            Impulsione o seu negócio
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Quer uma Vitrine Digital para a sua Marca?
                        </h2>
                        <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                            Experiências feitas sob medida, desenhadas para gerar resultados reais. O ponto de partida para construirmos o seu novo site juntos.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => handleWhatsappInquiry("Geral")}
                                className="w-full sm:w-auto bg-brand-orange hover:bg-opacity-90 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-orange/10 flex items-center justify-center gap-2 text-base transition-all hover:scale-105 active:scale-95"
                            >
                                <WhatsappIcon className="w-5 h-5" />
                                Falar com Especialista
                            </button>
                            <button 
                                onClick={onBack}
                                className="w-full sm:w-auto border border-gray-700 bg-gray-800/20 hover:bg-gray-800/60 text-brand-gray hover:text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
                            >
                                Voltar para a Home
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WebDesignVitrine;
