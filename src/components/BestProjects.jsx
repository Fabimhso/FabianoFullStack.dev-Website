import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from 'react-icons/fa';

const bestProjects = [
    {
        name: "Open-CI-CD-Pipeline",
        link: "https://github.com/Fabimhso/Open-CI-CD-Pipeline",
        isGithub: true,
        status: "Público",
        desc: "Pipeline de CI/CD open source desenvolvido para automatizar entregas com foco em segurança, infraestrutura como código (IaC) e testes contínuos.",
        color: "#00f2ff"
    },
    {
        name: "Core-Infrastructure-Monitoring",
        link: "https://github.com/Fabimhso/Core-Infrastructure-Monitoring",
        isGithub: true,
        status: "Público",
        desc: "Solução open source para monitoramento avançado de infraestrutura, focada em métricas de performance, análise de logs e sistema de alertas em tempo real.",
        color: "#ffdd00"
    },
    {
        name: "EzOps",
        link: "https://github.com/Fabimhso/EzOps",
        isGithub: true,
        status: "Público",
        desc: "Plataforma inovadora composta por uma CLI inteligente e um painel Web, desenvolvida para simplificar e automatizar as tarefas repetitivas de engenheiros DevOps e MLOps, com forte foco em segurança e conteinerização.",
        color: "#a800ff"
    }
];

const BestProjects = () => {
    return (
        <section className="section-padding" style={{ paddingBottom: '100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Projetos <span className="gradient-text">Open Source</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {bestProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, borderColor: project.color }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            {/* Glow Effect */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '150px',
                                height: '150px',
                                background: project.color,
                                filter: 'blur(80px)',
                                opacity: 0.1,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }} />



                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        color: project.color,
                                        background: `rgba(255,255,255,0.03)`,
                                        padding: '12px',
                                        borderRadius: '12px',
                                        display: 'flex'
                                    }}>
                                        <FaProjectDiagram />
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        margin: 0,
                                        color: 'var(--text-main)'
                                    }}>
                                        {project.name}
                                    </h3>
                                </div>

                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '2rem',
                                }}>
                                    {project.desc}
                                </p>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    padding: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: `1px solid ${project.color}40`,
                                    borderRadius: '8px',
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = project.color;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                }}
                            >
                                {project.isGithub ? <FaGithub size={18} /> : <FaExternalLinkAlt size={16} />}
                                Acessar Projeto
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default BestProjects;
