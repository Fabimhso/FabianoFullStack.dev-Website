import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaBrain, FaLaptopCode } from 'react-icons/fa';

const skillCategories = [
    {
        title: "Back-End",
        icon: <FaServer />,
        skills: ["Golang (Gin)", "Node.js (Nest.js)", "Python (Django/FastAPI/Flask)"]
    },
    {
        title: "Front-End",
        icon: <FaLaptopCode />,
        skills: ["React.js", "Next.js", "CSS", "Tailwind/Styled"]
    },
    {
        title: "Engenharia de IA",
        icon: <FaBrain />,
        skills: ["LLM Integration", "RPA Automation", "IA Engineering", "Python"]
    },
    {
        title: "Infraestrutura",
        icon: <FaCloud />,
        skills: ["GCP", "Docker", "Kubernetes", "CI/CD"]
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
        <section id="sobre" className="section-padding" style={{ paddingBottom: '100px', paddingTop: '100px' }}>

            {/* SKILLS SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '6rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Stack <span className="gradient-text">Tecnológico</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                        >
                            <div style={{
                                fontSize: '2rem',
                                color: 'var(--primary)',
                                background: 'var(--primary-dim)',
                                width: '60px', height: '60px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '12px',
                                marginBottom: '0.5rem'
                            }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem' }}>{cat.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {cat.skills.map((skill, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-muted)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '4px 10px',
                                        borderRadius: '20px'
                                    }}>
                                        {skill}
                                    </span>
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
