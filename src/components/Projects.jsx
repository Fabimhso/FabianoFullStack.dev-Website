import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaTrophy, FaGlobe } from 'react-icons/fa';

const projects = [
    {
        title: "Alnitak Vision AI",
        subtitle: "Projeto Premiado",
        tier: "gold",
        icon: <FaCrown />,
        desc: "Inovação em visão computacional e inteligência artificial avançada.",
        link: "#"
    },
    {
        title: "SuaSecretária.app",
        subtitle: "Em uso por +200 escritórios",
        tier: "silver",
        icon: <FaTrophy />,
        desc: "Automação inteligente para gestão jurídica e atendimento.",
        link: "#"
    },
    {
        title: "Remot3.dev",
        subtitle: "Vagas remotas web3",
        tier: "bronze",
        icon: <FaGlobe />,
        desc: "Plataforma conectando talentos a oportunidades globais na Web3.",
        link: "#"
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
            return {};
    }
};

const Projects = () => {
    return (
        <section id="projetos" className="section-padding" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
                Projetos em <span className="gradient-text">Destaque</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                marginBottom: '4rem'
            }}>
                {projects.map((project, i) => {
                    const style = getTierStyles(project.tier);
                    return (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
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
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: style.gradient, zIndex: 0, pointerEvents: 'none'
                            }} />

                            <div style={{ zIndex: 1 }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: style.color,
                                    marginBottom: '1rem',
                                    filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))'
                                }}>
                                    {project.icon}
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
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div style={{ textAlign: 'center' }}>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-dim)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        position: 'relative',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '16px 50px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        boxShadow: '0 0 20px var(--primary-dim)'
                    }}
                >
                    <span style={{ position: 'relative', zIndex: 2 }}>Ver mais</span>

                    {/* Shine Effect */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                            transform: 'skewX(-20deg)',
                            zIndex: 1
                        }}
                    />
                </motion.button>
            </div>

        </section>
    );
};

export default Projects;
