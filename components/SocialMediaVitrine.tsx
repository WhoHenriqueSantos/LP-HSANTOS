import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, X, Layers, Sparkles } from 'lucide-react';
import { WhatsappIcon } from './icons';

interface ColorDetail {
    name: string;
    hex: string;
    role: string;
}

interface SocialMediaProject {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    imageUrl: string;
    aspectRatioClass: string;
    tags: string[];
    colors?: string[];
    colorDetails?: ColorDetail[];
    slides?: string[];
    isPlaceholder: boolean;
    canvasBg?: string;
}

interface SocialMediaVitrineProps {
    onBack: () => void;
}

// 12 cards (4x3 grid) - all in "Em breve" placeholder state as requested
export const socialMediaProjects: SocialMediaProject[] = Array.from({ length: 12 }, (_, i) => ({
    id: `social-item-${i + 1}`,
    title: "Em breve",
    subtitle: "",
    category: "",
    description: "",
    imageUrl: "",
    aspectRatioClass: "aspect-square",
    tags: [],
    colors: ["#334155", "#475569", "#64748b"],
    isPlaceholder: true
}));

const categories = ["Todos"];

const SocialMediaVitrine: React.FC<SocialMediaVitrineProps> = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedProject, setSelectedProject] = useState<SocialMediaProject | null>(null);

    const filteredProjects = selectedCategory === "Todos"
        ? socialMediaProjects
        : socialMediaProjects.filter(p => p.category === selectedCategory);

    const handleOpenProject = (project: SocialMediaProject) => {
        if (project.isPlaceholder) return;
        setSelectedProject(project);
    };

    // Close on Escape key
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject]);

    const handleWhatsappInquiry = (project?: SocialMediaProject) => {
        const text = project 
            ? encodeURIComponent(`Olá Henrique! Vi o projeto "${project.title}" no seu portfólio e gostaria de solicitar um orçamento para materiais gráficos e editoriais da minha empresa.`)
            : encodeURIComponent("Olá Henrique! Gostaria de solicitar um orçamento para materiais gráficos, embalagens e design editorial para minha empresa.");
        window.open(`https://wa.me/5511997991151?text=${text}`, "_blank");
    };

    return (
        <section className="bg-brand-dark text-white min-h-screen pt-28 pb-20 relative selection:bg-brand-orange selection:text-white">
            {/* Scoped style for discreet scrollbar */}
            <style>{`
                .discreet-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(100, 116, 139, 0.45) transparent;
                }
                .discreet-scroll::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                    background: transparent;
                }
                .discreet-scroll::-webkit-scrollbar-thumb {
                    background-color: rgba(100, 116, 139, 0.45);
                    border-radius: 9999px;
                    transition: background-color 0.2s ease;
                }
                .discreet-scroll::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(100, 116, 139, 0.75);
                }
            `}</style>

            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-orange/10 via-transparent to-transparent pointer-events-none blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Back Link */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-orange transition-colors font-medium text-sm group py-2"
                    >
                        <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar para a Página Inicial</span>
                    </button>
                </motion.div>

                {/* Header Section */}
                <div className="mb-12 max-w-3xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-brand-gray font-bold uppercase tracking-[0.3em] text-[14px] mb-3 block">
                            VITRINE DE PROJETOS
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Design Gráfico & <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">
                                Conteúdo Estratégico
                            </span>
                        </h1>
                        
                        <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl">
                            Criamos narrativas visuais e layouts estratégicos de alto impacto para posicionar a sua marca e atrair os clientes certos no ambiente digital.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Categories Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mb-10 overflow-x-auto pb-3 pt-1 scrollbar-none"
                >
                    <div className="flex items-center gap-2.5 min-w-max">
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                        isSelected
                                            ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                                            : "bg-gray-800/60 text-brand-gray hover:text-white hover:bg-gray-800 border border-white/5"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Uniform 4-Column (4x3) Square Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch">
                    {filteredProjects.map((project, idx) => {
                        const isInteractive = !project.isPlaceholder;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: idx * 0.04 }}
                                className="w-full flex flex-col"
                            >
                                <div
                                    onClick={() => isInteractive && handleOpenProject(project)}
                                    className={`group relative w-full aspect-square rounded-xl overflow-hidden transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 ${
                                        isInteractive
                                            ? "border border-white/10 hover:border-brand-orange/60 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-brand-orange/20"
                                            : "bg-gradient-to-br from-gray-900/60 via-gray-950/80 to-black/90 border border-white/10 cursor-default shadow-md"
                                    }`}
                                    style={isInteractive && project.colors?.[0] ? { backgroundColor: project.colors[0] } : undefined}
                                >
                                    {isInteractive ? (
                                        <>
                                            {/* Artwork Canvas */}
                                            <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                                                <img 
                                                    src={project.imageUrl} 
                                                    alt={project.title}
                                                    className="w-full h-full object-contain object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                            </div>

                                            {/* Category Badge on hover */}
                                            <div className="relative z-10 flex items-center justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                                                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-brand-orange border border-white/15 shadow-sm">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Title & Palette on hover */}
                                            <div className="relative z-10 mt-auto pt-2 flex flex-row items-end justify-between gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                                                <div className="min-w-0 pr-1">
                                                    <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-brand-orange transition-colors tracking-tight drop-shadow-md truncate">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-[11px] sm:text-xs text-gray-200 font-medium mt-0.5 drop-shadow-sm truncate">
                                                        {project.subtitle}
                                                    </p>
                                                </div>

                                                {project.colors && project.colors.length > 0 && (
                                                    <div className="flex items-center gap-1.5 shrink-0 pb-0.5">
                                                        <span className="text-[10px] sm:text-xs text-gray-300 font-medium drop-shadow-sm">
                                                            Paleta
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            {project.colors.map((color, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-black/40 shadow-sm transform hover:scale-110 transition-transform"
                                                                    style={{ backgroundColor: color }}
                                                                    title={project.colorDetails?.[i]?.name ? `${project.colorDetails[i].name} (${color})` : color}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        /* Neutral Placeholder Card with "Em breve" */
                                        <>
                                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

                                            <div className="relative z-10 flex items-center justify-between opacity-40">
                                                <span className="w-12 h-3.5 rounded-full bg-white/10" />
                                                <span className="w-8 h-3.5 rounded-full bg-white/10" />
                                            </div>

                                            <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 mb-2.5">
                                                    <Layers className="w-5 h-5 opacity-40" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-400">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20" />
                                                </div>
                                                <span className="text-[11px] text-gray-600 font-medium">
                                                    Aguardando lançamento
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <span className="text-brand-orange font-bold uppercase tracking-[0.25em] text-xs mb-2 block">
                                DESIGN EDITORIAL & MATERIAIS
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                                Eleve o nível visual de cada ponto de contato da sua empresa.
                            </h2>
                            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                                De embalagens a materiais institucionais: garanta o rigor estético e a consistência visual que a sua marca precisa em cada detalhe.
                            </p>
                        </div>
                        <div className="flex flex-col items-center flex-shrink-0">
                            <button 
                                onClick={() => handleWhatsappInquiry()}
                                className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-brand-orange/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 text-base"
                            >
                                <WhatsappIcon className="w-5 h-5" />
                                <span>Orçar Materiais Gráficos</span>
                            </button>
                            <span className="text-xs text-gray-400/80 font-medium mt-2.5 tracking-wide text-center">
                                Resposta em até 24h • Sem compromisso
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox / Modal for future projects */}
            <AnimatePresence>
                {selectedProject && selectedProject.slides && selectedProject.slides.length > 0 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md"
                        />

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 w-full max-w-6xl max-h-[92vh] sm:max-h-[90vh] bg-brand-dark/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-b border-white/10 bg-brand-dark/95">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-white font-extrabold text-base sm:text-lg">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="p-1.5 sm:p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SocialMediaVitrine;
