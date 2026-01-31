import React from 'react';
import { motion } from 'framer-motion';
import {
    SiGoland, SiPython, SiNodedotjs, SiReact, SiNextdotjs, SiTypescript, SiJavascript,
    SiDocker, SiKubernetes, SiGooglecloud, SiAmazonaws, SiPostgresql,
    SiRedis, SiLinux, SiGit, SiGraphql, SiNestjs, SiDjango, SiFlask, SiOpenai
} from 'react-icons/si';
import { FaServer, FaCode, FaCloud, FaDatabase, FaRobot, FaInfinity } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Back-End & IA",
        icon: <FaServer />,
        desc: "Desenvolvimento de APIs robustas, microsserviços e integração de modelos de IA.",
        skills: [
            { name: "Golang", icon: <SiGoland style={{ color: '#00ADD8' }} /> },
            { name: "Node.js", icon: <SiNodedotjs style={{ color: '#339933' }} /> },
            { name: "Nest.js", icon: <SiNestjs style={{ color: '#E0234E' }} /> },
            { name: "Python", icon: <SiPython style={{ color: '#3776AB' }} /> },
            { name: "Django", icon: <SiDjango style={{ color: '#092E20' }} /> },
            { name: "Flask", icon: <SiFlask style={{ color: '#000000' }} /> },
            { name: "FastAPI", icon: <SiPython style={{ color: '#009688' }} /> },
            { name: "LLM Integration", icon: <SiOpenai style={{ color: '#412991' }} /> },
            { name: "RPA", icon: <FaRobot style={{ color: '#555555' }} /> },
            { name: "gRPC", icon: <FaServer style={{ color: '#244c5a' }} /> },
        ]
    },
    {
        title: "Front-End",
        icon: <FaCode />,
        desc: "Interfaces modernas, responsivas e amigáveis com foco em UX/UI.",
        skills: [
            { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
            { name: "React.js", icon: <SiReact style={{ color: '#61DAFB' }} /> },
            { name: "Next.js", icon: <SiNextdotjs style={{ color: 'white' }} /> },
            { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
            { name: "HTML5/CSS3", icon: <FaCode style={{ color: '#E34F26' }} /> },
        ]
    },
    {
        title: "DevOps & Infraestrutura",
        icon: <FaCloud />,
        desc: "Arquitetura escalável, containerização e orquestração em nuvem.",
        skills: [
            { name: "Docker", icon: <SiDocker style={{ color: '#2496ED' }} /> },
            { name: "Kubernetes", icon: <SiKubernetes style={{ color: '#326CE5' }} /> },
            { name: "GCP", icon: <SiGooglecloud style={{ color: '#4285F4' }} /> },
            { name: "AWS", icon: <SiAmazonaws style={{ color: '#FF9900' }} /> },
            { name: "Linux", icon: <SiLinux style={{ color: '#FCC624' }} /> },
            { name: "CI/CD", icon: <FaInfinity style={{ color: '#4caf50' }} /> },
            { name: "Git", icon: <SiGit style={{ color: '#F05032' }} /> },
        ]
    },
    {
        title: "Dados & Ferramentas",
        icon: <FaDatabase />,
        desc: "Gestão eficiente de dados e boas práticas de versionamento.",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#336791' }} /> },
            { name: "Redis", icon: <SiRedis style={{ color: '#DC382D' }} /> },
            { name: "GraphQL", icon: <SiGraphql style={{ color: '#E10098' }} /> },
            { name: "Git/GitHub", icon: <SiGit style={{ color: '#F05032' }} /> },
        ]
    }
];

const education = [
    {
        type: "Bacharelado",
        title: "Ciência da Computação",
        institution: "Fundação Educacional Serra dos Órgãos (FESO)",
        desc: "Melhor universidade da região serrana do Rio de Janeiro."
    },
    {
        type: "Especialização",
        title: "Engenharia de IA & ML",
        institution: "Universidade de São Paulo (USP)",
        desc: "Melhor universidade da América Latina."
    },
    {
        type: "Técnico",
        title: "Redes de Computadores",
        institution: "Universidade Norte do Paraná",
        desc: "1º lugar no vestibular."
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
            <div>
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
            </div>
        </section>
    );
};

export default About;
