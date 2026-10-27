import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, X, Eye, Layers } from 'lucide-react';
import { WhatsappIcon } from './icons';

interface ColorDetail {
    name: string;
    hex: string;
    role: string;
}

interface BrandingProject {
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

interface BrandingVitrineProps {
    onBack: () => void;
}

const brunaleProject: BrandingProject = {
    id: "brunale",
    title: "Brunalê",
    subtitle: "Semijóias e Acessórios",
    category: "Moda",
    description: "Identidade visual completa e refinada desenvolvida para a Brunalê Semijóias e Acessórios. Unindo uma tipografia serifada de alto contraste a traços finos e elegantes, o projeto alcança o equilíbrio perfeito entre o clássico e o contemporâneo. O logotipo conta com um detalhe fluido no \"e\" que remete ao caimento gracioso de uma corrente com pingente de coroa, complementado por uma paleta de tons nobres e acolhedores.",
    imageUrl: "/branding/brunale/1.svg",
    aspectRatioClass: "aspect-[16/9]",
    tags: ["Moda", "Semijóias", "Identidade Visual", "Brandkit"],
    colors: ["#273F24", "#F3E8CA", "#887862"],
    colorDetails: [
        { name: "Verde Floresta", hex: "#273F24", role: "Principal" },
        { name: "Areia", hex: "#F3E8CA", role: "Secundária" },
        { name: "Taupe", hex: "#887862", role: "Apoio" }
    ],
    slides: [
        "/branding/brunale/1.svg",
        "/branding/brunale/2.png",
        "/branding/brunale/3.svg",
        "/branding/brunale/4.png",
        "/branding/brunale/5.svg",
        "/branding/brunale/6.svg",
        "/branding/brunale/7.svg",
        "/branding/brunale/8.svg"
    ],
    isPlaceholder: false,
    canvasBg: "#FCFBF7"
};

export const brandingProjects: BrandingProject[] = [
    brunaleProject,
    ...Array.from({ length: 9 }, (_, i) => ({
        id: `branding-item-${i + 2}`,
        title: "Em breve",
        subtitle: "",
        category: "",
        description: "",
        imageUrl: "",
        aspectRatioClass: "aspect-[16/9]",
        tags: [],
        colors: ["#334155", "#475569", "#64748b"],
        isPlaceholder: true
    }))
];

// Helper to define organic asymmetric spans across horizontal rows (masonry horizontal)
const getHorizontalSpanClass = (index: number) => {
    switch (index) {
        case 0:
            // Hero card (Brunalê) - Wide panoramic prominence (16:9 on mobile, expanded bento on desktop)
            return "col-span-12 lg:col-span-8 aspect-[16/9] sm:aspect-auto min-h-[200px] sm:min-h-[440px]";
        case 1:
            // Companion card
            return "col-span-12 lg:col-span-4 min-h-[160px] sm:min-h-[440px]";
        case 2:
        case 3:
        case 4:
            // Trio row with balanced rhythm
            return "col-span-12 sm:col-span-6 lg:col-span-4 min-h-[160px] sm:min-h-[320px]";
        case 5:
            // Asymmetric pair - left medium
            return "col-span-12 lg:col-span-5 min-h-[160px] sm:min-h-[340px]";
        case 6:
            // Asymmetric pair - right wide
            return "col-span-12 lg:col-span-7 min-h-[160px] sm:min-h-[340px]";
        case 7:
        case 8:
        case 9:
        default:
            // Trio row
            return "col-span-12 sm:col-span-6 lg:col-span-4 min-h-[160px] sm:min-h-[320px]";
    }
};

const categories = ["Todas", "Moda"];

const BrandingVitrine: React.FC<BrandingVitrineProps> = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedProject, setSelectedProject] = useState<BrandingProject | null>(null);
    const [mobileTab, setMobileTab] = useState<'slides' | 'info'>('slides');

    const filteredProjects = selectedCategory === "Todas"
        ? brandingProjects
        : brandingProjects.filter(p => p.category === selectedCategory);

    const handleOpenProject = (project: BrandingProject) => {
        if (project.isPlaceholder) return;
        setMobileTab('slides');
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

    const handleWhatsappInquiry = (project?: BrandingProject) => {
        const text = project 
            ? encodeURIComponent(`Olá Henrique! Vi o Brandkit da "${project.title}" no seu portfólio de Branding e gostaria de solicitar um orçamento para a identidade da minha marca.`)
            : encodeURIComponent("Olá Henrique! Vi sua vitrine de Branding & Identidade Visual e gostaria de solicitar uma proposta para meu projeto.");
        window.open(`https://wa.me/5511997991151?text=${text}`, "_blank");
    };

    return (
        <section className="bg-brand-dark text-white min-h-screen pt-28 pb-20 relative selection:bg-brand-orange selection:text-white">
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
                        <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
                            VITRINE DE PROJETOS
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Design de Marcas & <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">
                                Identidade Visual
                            </span>
                        </h1>
                        
                        <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl">
                            Transformamos ideias e valores em identidades inesquecíveis.
                            <br />
                            Navegue pelo nosso mural de projetos para explorar logotipos, sistemas visuais, manuais e embalagens.
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

                {/* Organic Horizontal Masonry / Asymmetric Bento Gallery */}
                <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
                    {filteredProjects.map((project, idx) => {
                        const isInteractive = !project.isPlaceholder;
                        const spanClass = getHorizontalSpanClass(idx);

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: idx * 0.05 }}
                                className={`flex flex-col ${spanClass}`}
                            >
                                <div
                                    onClick={() => isInteractive && handleOpenProject(project)}
                                    className={`group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-7 ${
                                        isInteractive
                                            ? "bg-gradient-to-b from-gray-900 to-gray-950 border border-white/10 hover:border-brand-orange/60 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-brand-orange/20"
                                            : "bg-gradient-to-br from-gray-900/60 via-gray-950/80 to-black/90 border border-white/10 cursor-default shadow-md"
                                    }`}
                                    style={isInteractive && project.colors?.[0] ? { backgroundColor: project.colors[0] } : undefined}
                                >
                                    {isInteractive ? (
                                        <>
                                            {/* Unified Artwork Canvas as Background with softer gradient */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img 
                                                    src={project.imageUrl} 
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                                    loading="lazy"
                                                />
                                                {/* Gentle top vignette for badges */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-75 pointer-events-none" />
                                                
                                                {/* Soft, low bottom vignette so the center artwork remains crisp and visible */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-30% to-transparent pointer-events-none" />
                                                
                                                {/* Subtle hover effect */}
                                                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                                    <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                        <Eye className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Top Row: Category & Slide Badges */}
                                            <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-none">
                                                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-brand-orange border border-white/15 shadow-sm">
                                                    {project.category}
                                                </span>
                                                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide uppercase bg-black/60 text-white/90 border border-white/15 backdrop-blur-md shadow-sm">
                                                    <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange" />
                                                    8 Pranchas
                                                </span>
                                            </div>

                                            {/* Bottom: Title & Subtitle at bottom-left, Palette at bottom-right */}
                                            <div className="relative z-10 mt-auto pt-2 sm:pt-16 flex flex-row items-end justify-between gap-2 sm:gap-4 pointer-events-none">
                                                {/* Left: Project Title & Subtitle positioned low */}
                                                <div className="min-w-0">
                                                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors tracking-tight drop-shadow-md truncate">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-[11px] sm:text-sm lg:text-base text-gray-200 font-medium mt-0.5 drop-shadow-sm truncate">
                                                        {project.subtitle}
                                                    </p>
                                                </div>

                                                {/* Right: Palette with label to the left and color circles */}
                                                {project.colors && project.colors.length > 0 && (
                                                    <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pb-0.5">
                                                        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-300 font-medium drop-shadow-sm">
                                                            Paleta
                                                        </span>
                                                        <div className="flex items-center gap-1 sm:gap-2">
                                                            {project.colors.map((color, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full border border-black/50 shadow-md transform hover:scale-110 transition-transform"
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
                                        /* Neutral Placeholder Card without any partitioned box */
                                        <>
                                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

                                            <div className="relative z-10 flex items-center justify-between opacity-40">
                                                <span className="w-14 h-4 rounded-full bg-white/10" />
                                                <span className="w-10 h-4 rounded-full bg-white/10" />
                                            </div>

                                            <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
                                                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 mb-3">
                                                    <Layers className="w-5 h-5 opacity-40" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-400">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs text-gray-600 mt-1">
                                                    Projeto em desenvolvimento
                                                </span>
                                            </div>

                                            <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                                    <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                                    <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                                </div>
                                                <span className="text-xs text-gray-600 font-medium">
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
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <span className="text-brand-orange font-bold uppercase tracking-[0.25em] text-xs mb-2 block">
                                Posicionamento de Marca
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                                Quer uma identidade visual marcante para o seu negócio?
                            </h2>
                            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                                Conte conosco para construir o design que vai diferenciar sua empresa no mercado e conquistar a preferência dos seus clientes.
                            </p>
                        </div>
                        <button 
                            onClick={() => handleWhatsappInquiry()}
                            className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-brand-orange/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 text-base flex-shrink-0"
                        >
                            <WhatsappIcon className="w-5 h-5" />
                            <span>Solicitar Identidade Visual</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Brandkit Modal / Lightbox: Fluid Vertical Scroll Feed + Lateralized Info & Palette */}
            <AnimatePresence>
                {selectedProject && selectedProject.slides && selectedProject.slides.length > 0 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md"
                        />

                        {/* Modal Window: Two Columns on Desktop (Feed on Left, Info Sidebar on Right) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.96, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 15 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-7xl h-[94vh] sm:h-[92vh] max-h-[96vh] bg-gray-950 border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
                        >
                            {/* Scoped style for discreet scrollbar visible at all times in content feed */}
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

                            {/* Top Bar: Brand Dark Blue #1e2a38 spanning the full modal header */}
                            <div className="bg-[#1e2a38] px-3.5 sm:px-7 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between shrink-0 z-20 w-full gap-2">
                                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                                        Brandkit Completo
                                    </span>
                                    {selectedProject.category && (
                                        <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                                            {selectedProject.category}
                                        </span>
                                    )}
                                </div>

                                {/* Mobile Tab Switcher (Only visible on mobile screens < lg) */}
                                <div className="flex lg:hidden items-center bg-black/40 p-0.5 rounded-lg border border-white/10 shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => setMobileTab('slides')}
                                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                                            mobileTab === 'slides'
                                                ? 'bg-brand-orange text-white shadow-sm'
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        Lâminas (8)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMobileTab('info')}
                                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                                            mobileTab === 'info'
                                                ? 'bg-brand-orange text-white shadow-sm'
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        Paleta & Info
                                    </button>
                                </div>

                                {/* Close button */}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all border border-white/10 shrink-0"
                                    aria-label="Fechar visualização"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {/* Modal Body: Split view on Desktop, Tab view on Mobile */}
                            <div className="flex-1 w-full min-h-0 flex flex-col lg:flex-row overflow-hidden">
                                {/* Slide Feed: Discreet scroll, NO padding, 70px separation strictly between slides */}
                                <div 
                                    className={`flex-1 h-full flex-col min-w-0 overflow-y-auto p-0 m-0 discreet-scroll ${
                                        mobileTab === 'slides' ? 'flex' : 'hidden lg:flex'
                                    }`}
                                    style={{ backgroundColor: selectedProject.canvasBg || '#FCFBF7' }}
                                >
                                    {selectedProject.slides.map((slide, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className={`w-full block p-0 m-0 ${sIdx < selectedProject.slides.length - 1 ? 'mb-[50px] sm:mb-[70px]' : 'mb-0'} leading-none bg-transparent`}
                                        >
                                            <img 
                                                src={slide} 
                                                alt={`${selectedProject.title} - ${sIdx + 1}`}
                                                className="w-full h-auto block select-none m-0 p-0"
                                                loading={sIdx < 2 ? "eager" : "lazy"}
                                            />
                                        </div>
                                    ))}

                                    {/* Mobile End-of-deck Action Card */}
                                    <div className="lg:hidden p-5 sm:p-6 bg-[#16202c] border-t border-white/10 flex flex-col gap-3.5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-white font-bold text-sm sm:text-base">{selectedProject.title}</h4>
                                                <p className="text-brand-orange text-xs">{selectedProject.subtitle}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setMobileTab('info')}
                                                className="text-xs font-semibold text-gray-300 hover:text-brand-orange transition-colors underline underline-offset-2"
                                            >
                                                Ver Paleta Completa →
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleWhatsappInquiry(selectedProject)}
                                            className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                                        >
                                            <WhatsappIcon className="w-4 h-4" />
                                            <span>Pedir um Orçamento</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Area: Sidebar for Info & Palette - Visible side-by-side on desktop, or toggled on mobile */}
                                <div className={`w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 flex-col justify-between bg-gray-900 lg:border-l border-white/10 p-5 sm:p-7 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                                    mobileTab === 'info' ? 'flex flex-1 h-full' : 'hidden lg:flex lg:h-full'
                                }`}>
                                    <div>
                                        {/* Project Title & Subtitle */}
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-brand-orange font-medium mt-1">
                                            {selectedProject.subtitle}
                                        </p>

                                    {/* Project Description */}
                                    <p className="text-brand-gray text-xs sm:text-sm leading-relaxed mt-4">
                                        {selectedProject.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-white/10 my-5" />

                                    {/* Lateralized Palette Section */}
                                    <div>
                                        <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-gray mb-3">
                                            Paleta Cromática
                                        </h4>
                                        <div className="space-y-2.5">
                                            {selectedProject.colorDetails ? (
                                                selectedProject.colorDetails.map((color, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="flex items-center gap-3 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/10"
                                                    >
                                                        <span 
                                                            className="w-6 h-6 rounded-full border border-black/40 shadow-sm flex-shrink-0"
                                                            style={{ backgroundColor: color.hex }}
                                                        />
                                                        <div className="flex-1">
                                                            <span className="text-xs font-semibold text-white block leading-tight">
                                                                {color.name}
                                                            </span>
                                                            <span className="text-[10px] text-gray-400 font-mono">
                                                                {color.hex} • {color.role}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    {selectedProject.colors?.map((c, i) => (
                                                        <span 
                                                            key={i} 
                                                            className="w-6 h-6 rounded-full border border-black/40 shadow-sm"
                                                            style={{ backgroundColor: c }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Base of Sidebar: "Pedir um Orçamento" CTA Button */}
                                <div className="pt-5 mt-6 border-t border-white/10">
                                    <button
                                        onClick={() => handleWhatsappInquiry(selectedProject)}
                                        className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all transform active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        <WhatsappIcon className="w-5 h-5" />
                                        <span>Pedir um Orçamento</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BrandingVitrine;
