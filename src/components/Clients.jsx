import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaBolt, FaMobileAlt, FaLaptopCode, FaChartLine, FaShieldAlt, FaServer, FaDatabase } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiNextdotjs, SiFirebase, SiGooglecloud, SiPython, SiGoland, SiDocker, SiPostgresql, SiMysql, SiLinux, SiGitlab } from 'react-icons/si';

const clients = [
    {
        name: "FullStore",
        icon: <FaBolt />,
        desc: "Desenvolvi a infraestrutura core (fullstore.io), autenticação DNS (SPF/DKIM/DMARC), pipelines de dados com bot em Python e chatbot com ML.",
        tags: [
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Python", icon: <SiPython /> },
            { name: "DNS Sec", icon: <FaShieldAlt /> },
            { name: "SQL", icon: <FaDatabase /> },
            { name: "React", icon: <SiReact /> }
        ],
        color: "#a800ff"
    },
    {
        name: "Alo Sistemas",
        icon: <FaMobileAlt />,
        desc: "Auditoria de segurança, mitigação de vulnerabilidades e escalabilidade de infraestrutura para o software Alô ERP com IA.",
        tags: [
            { name: "DevSecOps", icon: <FaShieldAlt /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Golang", icon: <SiGoland /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Linux", icon: <SiLinux /> }
        ],
        color: "#ff1f1f"
    },
    {
        name: "Sebrae (SuperNova)",
        icon: <FaLaptopCode />,
        desc: "Cofundador e responsável pela arquitetura Back-End e implementação de pipelines seguros de DevSecOps para a plataforma Adaptmind.",
        tags: [
            { name: "DevSecOps", icon: <FaShieldAlt /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Cloud", icon: <SiGooglecloud /> },
            { name: "Python", icon: <SiPython /> }
        ],
        color: "#00f2ff"
    },
    {
        name: "Eduardo Mesquita Advogados",
        icon: <FaGavel />,
        desc: "Desenvolvi a IA SuaSecretaria.app, automação inteligente e triagem automatizada com NLP para o escritório.",
        tags: [
            { name: "Python", icon: <SiPython /> },
            { name: "FastAPI", icon: <SiPython /> },
            { name: "Cloud AI", icon: <SiGooglecloud /> },
            { name: "React", icon: <SiReact /> }
        ],
        color: "#d4af37"
    },
    {
        name: "Alterdata Software",
        icon: <FaChartLine />,
        desc: "Suporte e manutenção de bancos de dados MySQL/PostgreSQL, infraestrutura Windows Server, Docker e cultura DevOps.",
        tags: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "DevOps", icon: <FaServer /> }
        ],
        color: "#ffdd00"
    },
    {
        name: "Rikz Company",
        icon: <FaLaptopCode />,
        desc: "Atuei como Analista DevOps: pipelines GitLab CI com redução de 55% no tempo de execução, otimização de performance (62% para 98%) e infraestrutura DevSecOps.",
        tags: [
            { name: "GitLab CI", icon: <SiGitlab /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Linux", icon: <SiLinux /> },
            { name: "DevSecOps", icon: <FaShieldAlt /> },
            { name: "Python", icon: <SiPython /> }
        ],
        color: "#c0c0c0"
    }
];

const Clients = () => {
    return (
        <section className="section-padding" style={{ paddingBottom: '100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Com quem já <span className="gradient-text">trabalhei</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, borderColor: client.color }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            {/* Glow Effect */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '150px',
                                height: '150px',
                                background: client.color,
                                filter: 'blur(80px)',
                                opacity: 0.1,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    color: client.color,
                                    background: `rgba(255,255,255,0.03)`,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    display: 'flex'
                                }}>
                                    {client.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    margin: 0,
                                    color: 'var(--text-main)'
                                }}>
                                    {client.name}
                                </h3>
                            </div>

                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: '2rem',
                                minHeight: '3em' // Align cards
                            }}>
                                {client.desc}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {client.tags.map((tag, j) => (
                                    <span key={j} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.8rem',
                                        padding: '6px 12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '20px',
                                        color: 'var(--text-dim)',
                                        transition: 'color 0.2s'
                                    }}>
                                        <span style={{ color: client.color }}>{tag.icon}</span>
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Clients;
