import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, X, Layers } from 'lucide-react';
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
    imageUrl: "/branding/brunale/1.webp",
    aspectRatioClass: "aspect-[16/9]",
    tags: ["Moda", "Semijóias", "Identidade Visual", "Brandkit"],
    colors: ["#273F24", "#F3E8CA", "#887862"],
    colorDetails: [
        { name: "Verde Floresta", hex: "#273F24", role: "Principal" },
        { name: "Areia", hex: "#F3E8CA", role: "Secundária" },
        { name: "Taupe", hex: "#887862", role: "Apoio" }
    ],
    slides: [
        "/branding/brunale/1.webp",
        "/branding/brunale/2.webp",
        "/branding/brunale/3.webp",
        "/branding/brunale/4.webp",
        "/branding/brunale/5.webp",
        "/branding/brunale/6.webp",
        "/branding/brunale/7.webp",
        "/branding/brunale/8.webp"
    ],
    isPlaceholder: false,
    canvasBg: "#FCFBF7"
};

const optinuumProject: BrandingProject = {
    id: "optinuum",
    title: "Optinuum",
    subtitle: "Softwares",
    category: "Tecnologia",
    description: "Identidade visual moderna e estruturada, desenvolvida para traduzir a essência da Optinuum. O projeto aposta em uma geometria limpa e em hexágonos concêntricos que simbolizam crescimento e escalabilidade, complementados por uma paleta de tons sóbrios e tecnológicos",
    imageUrl: "/branding/optinuum/1.webp",
    aspectRatioClass: "aspect-[16/9]",
    tags: ["Tecnologia", "Softwares", "Identidade Visual", "Brandkit"],
    colors: ["#3D516B", "#E6E6E6", "#2A9D8F"],
    colorDetails: [
        { name: "Azul Ardósia", hex: "#3D516B", role: "Principal" },
        { name: "Cinza Claro", hex: "#E6E6E6", role: "Secundária" },
        { name: "Verde Petróleo", hex: "#2A9D8F", role: "Apoio" }
    ],
    slides: [
        "/branding/optinuum/1.webp",
        "/branding/optinuum/2.webp",
        "/branding/optinuum/3.webp",
        "/branding/optinuum/4.webp",
        "/branding/optinuum/5.webp",
        "/branding/optinuum/6.webp",
        "/branding/optinuum/7.webp",
        "/branding/optinuum/8.webp",
        "/branding/optinuum/9.webp",
        "/branding/optinuum/10.webp",
        "/branding/optinuum/11.webp",
        "/branding/optinuum/12.webp",
        "/branding/optinuum/13.webp",
        "/branding/optinuum/14.webp",
        "/branding/optinuum/15.webp"
    ],
    isPlaceholder: false,
    canvasBg: "#FFFFFF"
};

export const brandingProjects: BrandingProject[] = [
    brunaleProject,
    optinuumProject,
    ...Array.from({ length: 10 }, (_, i) => ({
        id: `branding-item-${i + 3}`,
        title: "Em breve",
        subtitle: "",
        category: "",
        description: "",
        imageUrl: "",
        aspectRatioClass: "aspect-square",
        tags: [],
        colors: ["#334155", "#475569", "#64748b"],
        isPlaceholder: true
    }))
];

const categories = ["Todas", "Moda", "Tecnologia"];

const LazySlideImage: React.FC<{
    src: string;
    alt: string;
    isPriority?: boolean;
    canvasBg?: string;
}> = ({ src, alt, isPriority = false, canvasBg = '#FCFBF7' }) => {
    const [shouldLoad, setShouldLoad] = useState(isPriority);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isPriority) {
            setShouldLoad(true);
            return;
        }

        const el = containerRef.current;
        if (!el) return;

        // IntersectionObserver loads slide only when approaching viewport (within 400px margin)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '400px 0px 400px 0px',
                threshold: 0.01
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isPriority]);

    return (
        <div 
            ref={containerRef}
            className="relative w-full overflow-hidden"
            style={{ 
                minHeight: isLoaded ? 'auto' : '260px'
            }}
        >
            {/* Elegant Skeleton Placeholder */}
            {!isLoaded && (
                <div 
                    className="w-full aspect-[16/10] sm:aspect-[16/9] flex flex-col items-center justify-center rounded-lg select-none"
                    style={{ 
                        backgroundColor: canvasBg === '#FFFFFF' ? '#f8fafc' : 'rgba(0, 0, 0, 0.04)' 
                    }}
                >
                    <div className="flex flex-col items-center gap-2.5">
                        <div className="w-6 h-6 border-2 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin" />
                        <span className="text-[11px] font-medium tracking-wide text-gray-400">
                            Carregando slide...
                        </span>
                    </div>
                </div>
            )}

            {shouldLoad && (
                <img 
                    src={src} 
                    alt={alt}
                    loading={isPriority ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-auto block select-none m-0 p-0 transition-opacity duration-500 ease-out ${
                        isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                />
            )}
        </div>
    );
};

const BrandingVitrine: React.FC<BrandingVitrineProps> = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedProject, setSelectedProject] = useState<BrandingProject | null>(null);

    const filteredProjects = selectedCategory === "Todas"
        ? brandingProjects
        : brandingProjects.filter(p => p.category === selectedCategory);

    const handleOpenProject = (project: BrandingProject) => {
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

    const handleWhatsappInquiry = (project?: BrandingProject) => {
        const text = project 
            ? encodeURIComponent(`Olá Henrique! Vi o Brandkit da "${project.title}" no seu portfólio de Branding e gostaria de solicitar um orçamento para a identidade da minha marca.`)
            : encodeURIComponent("Olá Henrique! Vi sua vitrine de Branding & Identidade Visual e gostaria de iniciar um projeto de marca.");
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
                            Design de Marca & <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">
                                Identidade Visual
                            </span>
                        </h1>
                        
                        <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl">
                            Construímos sistemas visuais estratégicos para posicionar marcas e valorizar negócios no mercado.
                            <br className="hidden sm:inline" />{" "}
                            Explore nossa seleção de cases para conhecer a arquitetura visual, embalagens e identidades que desenvolvemos.
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
                                            {/* Unified Artwork Canvas as Background with centered height fit */}
                                            <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                                                <img 
                                                    src={project.imageUrl} 
                                                    alt={project.title}
                                                    className="w-full h-full object-contain object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                                {/* Darkening gradient over cover - only appears on mouse hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                            </div>

                                            {/* Top Row: Category Badge - only appears on hover */}
                                            <div className="relative z-10 flex items-center justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                                                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-brand-orange border border-white/15 shadow-sm">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Bottom: Title & Subtitle at bottom-left, Palette at bottom-right - only appears on hover */}
                                            <div className="relative z-10 mt-auto pt-2 flex flex-row items-end justify-between gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                                                {/* Left: Project Title & Subtitle positioned low */}
                                                <div className="min-w-0 pr-1">
                                                    <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-brand-orange transition-colors tracking-tight drop-shadow-md truncate">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-[11px] sm:text-xs text-gray-200 font-medium mt-0.5 drop-shadow-sm truncate">
                                                        {project.subtitle}
                                                    </p>
                                                </div>

                                                {/* Right: Palette with label to the left and color circles */}
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
                                        /* Neutral Placeholder Card without any partitioned box */
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
                                DESIGN DE MARCA & POSICIONAMENTO
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                                Sua marca transmite o valor real do seu trabalho?
                            </h2>
                            <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                                Evite perder clientes para concorrentes com marcas piores, mas melhor apresentadas. Vamos construir uma identidade visual memorável e posicionada para o seu mercado.
                            </p>
                        </div>
                        <div className="flex flex-col items-center flex-shrink-0">
                            <button 
                                onClick={() => handleWhatsappInquiry()}
                                className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-brand-orange/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 text-base"
                            >
                                <WhatsappIcon className="w-5 h-5" />
                                <span>Iniciar Projeto de Marca</span>
                            </button>
                            <span className="text-xs text-gray-400/80 font-medium mt-2.5 tracking-wide text-center">
                                Resposta em até 24h • Sem compromisso
                            </span>
                        </div>
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

                            {/* Top Bar: Brand Dark Blue #1e2a38 spanning the full modal header */}
                            <div className="bg-[#1e2a38] px-4 sm:px-7 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between shrink-0 z-20 w-full gap-2">
                                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 whitespace-nowrap">
                                    Brandkit Completo
                                </span>

                                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                                    {selectedProject.category && (
                                        <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                                            {selectedProject.category}
                                        </span>
                                    )}

                                    {/* Close button */}
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all border border-white/10 shrink-0"
                                        aria-label="Fechar visualização"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body: Split view on Desktop, Fluid Continuous Scroll on Mobile */}
                            <div className="flex-1 w-full min-h-0 flex flex-col lg:flex-row overflow-hidden">
                                {/* Slide Feed: Discreet scroll, NO padding, 70px separation strictly between slides */}
                                <div 
                                    className="flex-1 h-full flex flex-col min-w-0 overflow-y-auto p-0 m-0 discreet-scroll"
                                    style={{ backgroundColor: selectedProject.canvasBg || '#FCFBF7' }}
                                >
                                    {selectedProject.slides.map((slide, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className={`w-full block p-0 m-0 ${sIdx < selectedProject.slides.length - 1 ? 'mb-[50px] sm:mb-[70px]' : 'mb-0'} leading-none bg-transparent`}
                                        >
                                            <LazySlideImage
                                                src={slide}
                                                alt={`${selectedProject.title} - ${sIdx + 1}`}
                                                isPriority={sIdx === 0}
                                                canvasBg={selectedProject.canvasBg}
                                            />
                                        </div>
                                    ))}

                                    {/* Mobile End-of-deck Action Card: Pedir um Orçamento */}
                                    <div className="lg:hidden p-4 sm:p-5 bg-[#16202c] border-t border-white/10">
                                        <button
                                            onClick={() => handleWhatsappInquiry(selectedProject)}
                                            className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                                        >
                                            <WhatsappIcon className="w-4 h-4" />
                                            <span>Pedir um Orçamento</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Area: Sidebar for Info & Palette - Visible side-by-side on desktop */}
                                <div className="hidden lg:flex lg:h-full w-[380px] xl:w-[420px] flex-shrink-0 flex-col justify-between bg-gray-900 border-l border-white/10 p-5 sm:p-7 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
