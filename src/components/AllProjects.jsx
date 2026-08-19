import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaRobot, FaArrowLeft, FaTrophy, FaGlobe, FaServer, FaShieldAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        title: "Alnitak Vision AI",
        subtitle: "Acessibilidade & IA · Prêmio FESO",
        tier: "gold",
        icon: <FaCrown />,
        desc: "Projeto campeão do IDEIAS INOVADORAS da Universidade FESO com bolsa de fomento. Visa possibilitar pessoas tetraplégicas a interagirem com o computador através de Eye-tracking, convertendo o movimento ocular em comandos de cursor.",
        link: "https://github.com/Fabimhso/AlnitakVision",
        isGithub: true,
        status: "Privado",
        tech: ["Python", "OpenCV", "Electron.js", "Node.js", "AI/ML"]
    },
    {
        title: "Adaptmind",
        subtitle: "Sebrae SuperNova · DevSecOps",
        tier: "silver",
        icon: <FaShieldAlt />,
        desc: "Plataforma desenvolvida no programa SEBRAE SuperNova para aceleração e escala de startups. Arquitetura resiliente de back-end com implementação de pipelines e segurança contínua DevSecOps.",
        link: "#",
        isGithub: false,
        status: "Privado",
        tech: ["Node.js", "DevSecOps", "CI/CD", "Cloud", "Python"]
    },
    {
        title: "Alô ERP & Sistemas",
        subtitle: "DevSecOps & Cloud POS",
        tier: "bronze",
        icon: <FaGlobe />,
        desc: "Auditoria e validação de segurança, mitigação de vulnerabilidades e escalabilidade de infraestrutura para sistema ERP e PDV automatizado com IA.",
        link: "https://alomobile.com.br/erp/",
        isGithub: false,
        status: "Público",
        tech: ["Python", "Golang", "Firebase", "Linux", "DevSecOps"]
    },
    {
        title: "FullStore Platform & Infra",
        subtitle: "Infraestrutura & DNS Security",
        tier: "default",
        icon: <FaServer />,
        desc: "Infraestrutura corporativa web (fullstore.io), autenticação DNS rigorosa (SPF, DKIM, DMARC) contra spoofing e phishing, pipelines de dados com bot em Python e chatbot com ML (ZIA).",
        link: "https://fullstore.io",
        isGithub: false,
        status: "Público",
        tech: ["React.js", "Node.js", "Python", "SQL", "DNS Sec"]
    },
    {
        title: "BirdOps.app",
        subtitle: "Orquestração DevOps & AIOps",
        tier: "default",
        icon: <FaServer />,
        desc: "Projeto de orquestração de dados, observabilidade e automação para otimização de fluxos de trabalho DevOps e AIOps.",
        link: "#",
        isGithub: false,
        status: "Privado",
        tech: ["Golang", "Gin", "Docker", "DevOps", "AIOps"]
    },
    {
        title: "SuaSecretária.app",
        subtitle: "Automação & IA Jurídica",
        tier: "default",
        icon: <FaTrophy />,
        desc: "Automação inteligente para gestão jurídica e atendimento. Chatbot com NLP para triagem de clientes e agendamento automático.",
        link: "https://SuaSecretaria.netlify.app",
        isGithub: false,
        status: "Público",
        tech: ["React.js", "Python", "FastAPI", "Google Cloud AI"]
    },
    {
        title: "EzOps",
        subtitle: "DevOps & MLOps CLI",
        tier: "default",
        icon: <FaServer />,
        desc: "Plataforma inovadora composta por uma CLI inteligente e um painel Web, desenvolvida para simplificar e automatizar as tarefas repetitivas de engenheiros DevOps e MLOps, com forte foco em segurança e conteinerização.",
        link: "https://github.com/Fabimhso/EzOps",
        isGithub: true,
        status: "Público",
        tech: ["CLI", "Web", "Docker", "DevSecOps", "MLOps"]
    },
    {
        title: "Web3Oracle",
        subtitle: "Web3 & Data Integration",
        tier: "default",
        icon: <FaGlobe />,
        desc: "Solução voltada para o ecossistema Web3, construindo oráculos e integrações de dados descentralizados.",
        link: "https://github.com/Fabimhso/Web3Oracle",
        isGithub: true,
        status: "Privado",
        tech: ["Web3", "Oracle", "Data Integration"]
    },
    {
        title: "01portal",
        subtitle: "News Portal & GCP Infra",
        tier: "default",
        icon: <FaGlobe />,
        desc: "Um portal de notícias de tecnologia, feito com Node.js, React.js e infraestrutura no Google Cloud Platform (GCP).",
        link: "https://github.com/Fabimhso/01portal",
        isGithub: true,
        status: "Privado",
        tech: ["Node.js", "React.js", "GCP", "Linux"]
    },
    {
        title: "emotioncopy.ai",
        subtitle: "AI Copywriter & DevOps",
        tier: "default",
        icon: <FaRobot />,
        desc: "Criado com Vue.js e Node.js com trabalho DevOps completo. Plataforma desenvolvida do zero com um sistema de IA (Gemma da Meta) que gera copies para marketing em redes sociais, gestão de tráfego, blogs, etc.",
        link: "https://github.com/Fabimhso/emotioncopy.ai",
        isGithub: true,
        status: "Privado",
        tech: ["Vue.js", "Node.js", "DevOps", "AI/ML"]
    },
    {
        title: "Web Vuln Scanner",
        subtitle: "Security & Vulnerability Scanner",
        tier: "default",
        icon: <FaShieldAlt />,
        desc: "Um scanner de vulnerabilidades que verifica a presença de headers de segurança em sites e implementa checagens básicas de segurança, como detecção de SQL Injection.",
        link: "https://github.com/Fabimhso/WebVulnScanner",
        isGithub: true,
        status: "Privado",
        tech: ["Security", "Web", "SQL Injection", "Scanner"]
    },
    {
        title: "Sistema IDS",
        subtitle: "Intrusion Detection System",
        tier: "default",
        icon: <FaShieldAlt />,
        desc: "IDS que monitora uma rede e detecta comportamentos anômalos ou padrões que possam indicar um ataque, como DDoS ou tentativas de intrusão. Funciona com captura e análise de pacotes com bibliotecas como Scapy ou Pyshark.",
        link: "https://github.com/Fabimhso/SistemaIDS",
        isGithub: true,
        status: "Privado",
        tech: ["Python", "Scapy", "Pyshark", "Security", "Networking"]
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
                                                border: `1px solid ${style.color}40`,
                                                borderRadius: '8px',
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                transition: 'all 0.2s',
                                                marginTop: '1.5rem',
                                                pointerEvents: project.link === "#" ? 'none' : 'auto',
                                                opacity: project.link === "#" ? 0.5 : 1
                                            }}
                                            onMouseOver={(e) => {
                                                if (project.link !== "#") e.currentTarget.style.background = style.color;
                                            }}
                                            onMouseOut={(e) => {
                                                if (project.link !== "#") e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            }}
                                        >
                                            {project.isGithub ? <FaGithub size={18} /> : <FaExternalLinkAlt size={16} />}
                                            Acessar Projeto
                                        </a>
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
