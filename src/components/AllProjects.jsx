import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaRobot, FaNewspaper, FaArrowLeft, FaTrophy, FaGlobe, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        title: "Alnitak Vision AI",
        subtitle: "Acessibilidade & IA",
        tier: "gold",
        icon: <FaCrown />,
        desc: "Projeto campeão do IDEIAS INOVADORAS da Universidade FESO. Visa possibilitar pessoas tetraplégicas a interagirem com o computador através de Eye-tracking. Utiliza visão computacional avançada para converter o movimento ocular em comandos de cursor.",
        link: "#",
        tech: ["Python", "OpenCV", "Electron.js", "Node.js"]
    },
    {
        title: "EmotionCopy.AI",
        subtitle: "Marketing Inteligente",
        tier: "silver",
        icon: <FaRobot />,
        desc: "Um projeto que utiliza Inteligência Artificial para gerar copies persuasivas e personalizadas para utilização em mídias sociais e campanhas de marketing, otimizando o engajamento e conversão.",
        link: "#",
        tech: ["Python", "FastAPI", "Node.js", "React.js"]
    },
    {
        title: "01 Portal",
        subtitle: "Portal de Notícias",
        tier: "bronze",
        icon: <FaNewspaper />,
        desc: "Um portal de notícias sobre tecnologia e inovação, focado em trazer as últimas novidades do mundo tech. Feito em 2021, conseguiu obter mais de 2 mil visitas orgânicas por mês graças a uma estratégia eficiente de SEO e conteúdo relevante.",
        link: "#",
        tech: ["React.js", "Node.js", "React Native"]
    },
    {
        title: "SuaSecretária.app",
        subtitle: "Gestão Jurídica",
        tier: "default",
        icon: <FaTrophy />,
        desc: "Automação inteligente para gestão jurídica e atendimento. Chatbot com NLP para triagem de clientes e agendamento automático.",
        link: "#",
        tech: ["React.js", "Python", "FastAPI", "Google API AI"]
    },
    {
        title: "Remot3.dev",
        subtitle: "Vagas Web3",
        tier: "default",
        icon: <FaGlobe />,
        desc: "Plataforma conectando talentos a oportunidades globais na Web3. Smart contracts para pagamentos seguros e verificados.",
        link: "#",
        tech: ["Next.js", "React.js", "Node.js"]
    },
    {
        title: "BirdOps.app",
        subtitle: "Orquestração DevOps/AIOps",
        tier: "default",
        icon: <FaServer />,
        desc: "Projeto de orquestração de dados para melhor otimização de trabalhos devops/aiops.",
        link: "#",
        tech: ["Golang", "Gin", "React.js", "Next.js"]
    }
];

const getTierStyles = (tier) => {
    switch (tier) {
        case 'gold':
            return {
                border: '2px solid #FFD700',
                boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
                color: '#FFD700',
                gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)'
            };
        case 'silver':
            return {
                border: '2px solid #C0C0C0',
                boxShadow: '0 0 15px rgba(192, 192, 192, 0.3)',
                color: '#C0C0C0',
                gradient: 'linear-gradient(135deg, rgba(192, 192, 192, 0.1) 0%, transparent 100%)'
            };
        case 'bronze':
            return {
                border: '2px solid #CD7F32',
                boxShadow: '0 0 15px rgba(205, 127, 50, 0.3)',
                color: '#CD7F32',
                gradient: 'linear-gradient(135deg, rgba(205, 127, 50, 0.1) 0%, transparent 100%)'
            };
        default:
            return {
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'none',
                color: 'var(--primary)',
                gradient: 'var(--bg-card-hover)'
            };
    }
};

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding" style={{ paddingBottom: '100px', paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <FaArrowLeft /> Voltar
                    </Link>
                    <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
                        Todos os <span className="gradient-text">Projetos</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {allProjects.map((project, i) => {
                        const style = getTierStyles(project.tier);
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '20px',
                                    border: style.border,
                                    boxShadow: style.boxShadow,
                                    padding: '2rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                            >
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    background: style.gradient, zIndex: 0, pointerEvents: 'none'
                                }} />

                                <div style={{ zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '1rem'
                                    }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            color: style.color,
                                            filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))'
                                        }}>
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>

                                    <p style={{
                                        color: style.color,
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontSize: '0.8rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {project.subtitle}
                                    </p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                        {project.desc}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '5px',
                                                padding: '0.3rem 0.6rem',
                                                fontSize: '0.8rem',
                                                color: 'var(--text-muted)'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
