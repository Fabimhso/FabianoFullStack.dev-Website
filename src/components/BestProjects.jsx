import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram } from 'react-icons/fa';

const bestProjects = [
    {
        name: "EzOps",
        link: "https://github.com/Fabimhso/EzOps",
        isGithub: true,
        status: "Público",
        desc: "Plataforma inovadora composta por uma CLI inteligente e um painel Web, desenvolvida para simplificar e automatizar as tarefas repetitivas de engenheiros DevOps e MLOps, com forte foco em segurança e conteinerização.",
        color: "#a800ff"
    },
    {
        name: "Web3Oracle",
        link: "https://github.com/Fabimhso/Web3Oracle",
        isGithub: true,
        status: "Privado",
        desc: "Solução voltada para o ecossistema Web3, construindo oráculos e integrações de dados descentralizados.",
        color: "#ff1f1f"
    },
    {
        name: "01portal",
        link: "https://github.com/Fabimhso/01portal",
        isGithub: true,
        status: "Privado",
        desc: "Um portal de notícias de tecnologia, feito com Node.js, React.js e infraestrutura no Google Cloud Platform (GCP).",
        color: "#00f2ff"
    },
    {
        name: "emotioncopy.ai",
        link: "https://github.com/Fabimhso/emotioncopy.ai",
        isGithub: true,
        status: "Privado",
        desc: "Criado com Vue.js e Node.js com trabalho DevOps completo. Plataforma desenvolvida do zero com um sistema de IA (Gemma da Meta) que gera copies para marketing em redes sociais, gestão de tráfego, blogs, etc.",
        color: "#d4af37"
    },
    {
        name: "SuaSecretaria",
        link: "https://SuaSecretaria.netlify.app",
        isGithub: false,
        status: "Público",
        desc: "Secretária IA humanizada 24/7 para advogados que agenda, vende e converte leads automaticamente enquanto você dorme.",
        color: "#ffdd00"
    },
    {
        name: "AloMobile ERP",
        link: "https://alomobile.com.br/erp/",
        isGithub: false,
        status: "Público",
        desc: "Sistema ERP da Alô Sistemas integrado com IA. O projeto incluiu auditoria de segurança, mitigação de vulnerabilidades e escalabilidade de infraestrutura.",
        color: "#c0c0c0"
    },
    {
        name: "Alnitak Vision AI",
        link: "https://github.com/Fabimhso/AlnitakVision",
        isGithub: true,
        status: "Privado",
        desc: "Projeto campeão do Ideias Inovadoras FESO. Utiliza visão computacional avançada com eye-tracking para permitir que pessoas tetraplégicas controlem o computador.",
        color: "#4285F4"
    },
    {
        name: "Web Vuln Scanner",
        link: "https://github.com/Fabimhso/WebVulnScanner",
        isGithub: true,
        status: "Privado",
        desc: "Um scanner de vulnerabilidades que verifica a presença de headers de segurança em sites e implementa checagens básicas de segurança, como detecção de SQL Injection.",
        color: "#EA4335"
    },
    {
        name: "Sistema IDS",
        link: "https://github.com/Fabimhso/SistemaIDS",
        isGithub: true,
        status: "Privado",
        desc: "IDS que monitora uma rede e detecta comportamentos anômalos ou padrões que possam indicar um ataque, como DDoS ou tentativas de intrusão. Funciona com captura e análise de pacotes com bibliotecas como Scapy ou Pyshark.",
        color: "#34A853"
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
                    Meus melhores <span className="gradient-text">projetos</span>
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

                            {/* Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                background: project.status === 'Público' ? 'rgba(46, 213, 115, 0.1)' : 'rgba(255, 71, 87, 0.1)',
                                color: project.status === 'Público' ? '#2ed573' : '#ff4757',
                                border: `1px solid ${project.status === 'Público' ? 'rgba(46, 213, 115, 0.3)' : 'rgba(255, 71, 87, 0.3)'}`,
                                zIndex: 10,
                                letterSpacing: '1px'
                            }}>
                                {project.status.toUpperCase()}
                            </div>

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
