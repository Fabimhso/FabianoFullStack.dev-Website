import React from 'react';
import { motion } from 'framer-motion';
import {
    SiGoland, SiPython, SiNodedotjs,
    SiDocker, SiKubernetes, SiGooglecloud, SiAmazonaws, SiPostgresql,
    SiRedis, SiLinux, SiGit, SiOpenai, SiCisco, SiMysql, SiGnubash
} from 'react-icons/si';
import { FaServer, FaCode, FaCloud, FaDatabase, FaRobot, FaInfinity, FaShieldAlt, FaNetworkWired, FaLock } from 'react-icons/fa';

const skillCategories = [
    {
        title: "DevOps & Nuvem",
        icon: <FaCloud />,
        desc: "Arquitetura escalável, automação de infraestrutura, CI/CD e orquestração de containers.",
        skills: [
            { name: "Docker", icon: <SiDocker style={{ color: '#2496ED' }} /> },
            { name: "Kubernetes", icon: <SiKubernetes style={{ color: '#326CE5' }} /> },
            { name: "GCP", icon: <SiGooglecloud style={{ color: '#4285F4' }} /> },
            { name: "AWS", icon: <SiAmazonaws style={{ color: '#FF9900' }} /> },
            { name: "Linux", icon: <SiLinux style={{ color: '#FCC624' }} /> },
            { name: "CI/CD", icon: <FaInfinity style={{ color: '#4caf50' }} /> },
            { name: "Bash", icon: <SiGnubash style={{ color: '#4EAA25' }} /> },
            { name: "Git / GitHub", icon: <SiGit style={{ color: '#F05032' }} /> },
        ]
    },
    {
        title: "DevSecOps & Segurança",
        icon: <FaShieldAlt />,
        desc: "Segurança contínua, auditoria de vulnerabilidades, DNS security e infraestrutura de redes.",
        skills: [
            { name: "DevSecOps", icon: <FaShieldAlt style={{ color: '#E0234E' }} /> },
            { name: "DNS Sec (SPF/DKIM/DMARC)", icon: <FaNetworkWired style={{ color: '#00ADD8' }} /> },
            { name: "Cisco Networking", icon: <SiCisco style={{ color: '#1BA0D7' }} /> },
            { name: "Vulnerability Audit", icon: <FaLock style={{ color: '#ff1f1f' }} /> },
            { name: "Cloud Security & IAM", icon: <SiGooglecloud style={{ color: '#4285F4' }} /> },
            { name: "Firewalls & Redes", icon: <FaNetworkWired style={{ color: '#FCC624' }} /> },
        ]
    },
    {
        title: "MLOps & Inteligência Artificial",
        icon: <FaRobot />,
        desc: "Pipelines de dados e ML, ciclo de vida de IA, engenharia de prompt e visão computacional.",
        skills: [
            { name: "MLOps Pipelines", icon: <FaInfinity style={{ color: '#339933' }} /> },
            { name: "Python", icon: <SiPython style={{ color: '#3776AB' }} /> },
            { name: "LLM & Prompt Eng", icon: <SiOpenai style={{ color: '#412991' }} /> },
            { name: "RAG & Context Eng", icon: <FaDatabase style={{ color: '#E10098' }} /> },
            { name: "Visão Computacional", icon: <FaRobot style={{ color: '#00f2ff' }} /> },
            { name: "Machine Learning", icon: <SiPython style={{ color: '#009688' }} /> },
        ]
    },
    {
        title: "Back-End",
        icon: <FaServer />,
        desc: "APIs resilientes, scripts de automação, gestão e otimização de bancos de dados.",
        skills: [
            { name: "Python", icon: <SiPython style={{ color: '#3776AB' }} /> },
            { name: "Node.js", icon: <SiNodedotjs style={{ color: '#339933' }} /> },
            { name: "Golang", icon: <SiGoland style={{ color: '#00ADD8' }} /> },
            { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#336791' }} /> },
            { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
            { name: "Redis", icon: <SiRedis style={{ color: '#DC382D' }} /> },
            { name: "SQL Pipelines", icon: <FaDatabase style={{ color: '#4285F4' }} /> },
        ]
    }
];

const education = [
    {
        type: "Especialização / Residência",
        title: "Engenharia de ML & MLOps",
        institution: "FDTE - Fundação para o Desenvolvimento Tecnológico da Engenharia (USP)",
        desc: "Experiência em todo o ciclo de vida de produtos de dados e IA: data pipelines, MLOps, LLMs, RAG, Few-Shot Prompting, NLP e visão computacional."
    },
    {
        type: "Bacharelado",
        title: "Ciência da Computação",
        institution: "Fundação Educacional Serra dos Órgãos (FESO)",
        desc: "Ganhador do Prêmio 'Ideias Inovadoras' com bolsa de fomento para desenvolvimento e escala de projeto."
    },
    {
        type: "Bolsa Internacional",
        title: "International English Language Program",
        institution: "University of Pennsylvania (Penn) · Santander Open Academy",
        desc: "Bolsista Full Ride selecionado para o programa acadêmico nos Estados Unidos."
    }
];

const certifications = [
    {
        title: "GCP Foundations",
        issuer: "Google Cloud Platform",
        badge: "Cloud Infra",
        icon: <SiGooglecloud style={{ color: '#4285F4' }} />,
        color: "#4285F4",
        desc: "Fundamentos de computação em nuvem, infraestrutura escalável, gerenciamento de recursos e segurança no ecossistema Google Cloud."
    },
    {
        title: "Cisco CCNA",
        issuer: "Cisco Networking Academy",
        badge: "Associate",
        icon: <SiCisco style={{ color: '#1BA0D7' }} />,
        color: "#1BA0D7",
        desc: "Arquitetura e fundamentos de redes corporativas, roteamento IP, switching, conectividade e serviços de infraestrutura."
    },
    {
        title: "Cisco CCST",
        issuer: "Cisco Networking Academy",
        badge: "Networking",
        icon: <SiCisco style={{ color: '#1BA0D7' }} />,
        color: "#1BA0D7",
        desc: "Suporte técnico especializado em infraestrutura de redes, diagnóstico de conectividade, protocolos e resolução de incidentes."
    },
    {
        title: "Cisco CCCAC",
        issuer: "Cisco Networking Academy",
        badge: "Cybersecurity",
        icon: <SiCisco style={{ color: '#1BA0D7' }} />,
        color: "#1BA0D7",
        desc: "Segurança de redes e defesa em nuvem, controle de tráfego, análise de vulnerabilidades e proteção de infraestruturas."
    },
    {
        title: "Cisco PCEP",
        issuer: "Cisco / Python Institute",
        badge: "Python Core",
        icon: <SiPython style={{ color: '#3776AB' }} />,
        color: "#3776AB",
        desc: "Certified Entry-Level Python Programmer: automação de scripts, algoritmos, manipulação de dados e programação para infraestrutura."
    }
];

const About = () => {
    return (
        <section id="sobre" className="section-padding" style={{ paddingBottom: '100px', paddingTop: '100px', maxWidth: '1400px' }}>

            {/* SKILLS SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '6rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Tecnologias que <span className="gradient-text">domino</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: 'var(--bg-card-hover)' }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                fontSize: '2rem',
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                background: 'rgba(255, 31, 31, 0.1)',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px'
                            }}>
                                {cat.icon}
                            </div>

                            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{cat.title}</h3>

                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                                {cat.desc}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {cat.skills.map((skill, j) => (
                                    <div key={j} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 0.8rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '8px',
                                        fontSize: '0.85rem',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* EDUCATION SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '6rem' }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Formação <span className="gradient-text">Acadêmica</span>
                </h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {education.map((edu, i) => (
                        <div key={i} style={{
                            background: 'linear-gradient(90deg, var(--bg-card) 0%, transparent 100%)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--primary)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{edu.title}</h3>
                                    <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>{edu.institution}</p>
                                </div>
                                <span style={{
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: 'var(--text-dim)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>
                                    {edu.type}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.8rem' }}>{edu.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* CERTIFICATIONS SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Certificações <span className="gradient-text">Profissionais</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -5, borderColor: cert.color }}
                            style={{
                                background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(20, 20, 20, 0.6) 100%)',
                                padding: '1.8rem',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Subtle background glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '120px',
                                height: '120px',
                                background: cert.color,
                                filter: 'blur(70px)',
                                opacity: 0.08,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }} />

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                                    <div style={{
                                        fontSize: '1.8rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--glass-border)',
                                        width: '48px',
                                        height: '48px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '10px'
                                    }}>
                                        {cert.icon}
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: cert.color,
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: `1px solid ${cert.color}40`,
                                        padding: '3px 8px',
                                        borderRadius: '4px',
                                        fontWeight: 600
                                    }}>
                                        {cert.badge}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>{cert.title}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.8rem' }}>{cert.issuer}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{cert.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
