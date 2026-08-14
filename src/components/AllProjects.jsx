import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaRobot, FaArrowLeft, FaTrophy, FaGlobe, FaServer, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        title: "Alnitak Vision AI",
        subtitle: "Acessibilidade & IA · Prêmio FESO",
        tier: "gold",
        icon: <FaCrown />,
        desc: "Projeto campeão do IDEIAS INOVADORAS da Universidade FESO com bolsa de fomento. Visa possibilitar pessoas tetraplégicas a interagirem com o computador através de Eye-tracking, convertendo o movimento ocular em comandos de cursor.",
        link: "#",
        tech: ["Python", "OpenCV", "Electron.js", "Node.js", "AI/ML"]
    },
    {
        title: "Adaptmind",
        subtitle: "Sebrae SuperNova · DevSecOps",
        tier: "silver",
        icon: <FaShieldAlt />,
        desc: "Plataforma desenvolvida no programa SEBRAE SuperNova para aceleração e escala de startups. Arquitetura resiliente de back-end com implementação de pipelines e segurança contínua DevSecOps.",
        link: "#",
        tech: ["Node.js", "DevSecOps", "CI/CD", "Cloud", "Python"]
    },
    {
        title: "Alô ERP & Sistemas",
        subtitle: "DevSecOps & Cloud POS",
        tier: "bronze",
        icon: <FaGlobe />,
        desc: "Auditoria e validação de segurança, mitigação de vulnerabilidades e escalabilidade de infraestrutura para sistema ERP e PDV automatizado com IA.",
        link: "#",
        tech: ["Python", "Golang", "Firebase", "Linux", "DevSecOps"]
    },
    {
        title: "FullStore Platform & Infra",
        subtitle: "Infraestrutura & DNS Security",
        tier: "default",
        icon: <FaServer />,
        desc: "Infraestrutura corporativa web (fullstore.io), autenticação DNS rigorosa (SPF, DKIM, DMARC) contra spoofing e phishing, pipelines de dados com bot em Python e chatbot com ML (ZIA).",
        link: "#",
        tech: ["React.js", "Node.js", "Python", "SQL", "DNS Sec"]
    },
    {
        title: "BirdOps.app",
        subtitle: "Orquestração DevOps & AIOps",
        tier: "default",
        icon: <FaServer />,
        desc: "Projeto de orquestração de dados, observabilidade e automação para otimização de fluxos de trabalho DevOps e AIOps.",
        link: "#",
        tech: ["Golang", "Gin", "Docker", "DevOps", "AIOps"]
    },
    {
        title: "SuaSecretária.app",
        subtitle: "Automação & IA Jurídica",
        tier: "default",
        icon: <FaTrophy />,
        desc: "Automação inteligente para gestão jurídica e atendimento. Chatbot com NLP para triagem de clientes e agendamento automático.",
        link: "#",
        tech: ["React.js", "Python", "FastAPI", "Google Cloud AI"]
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
