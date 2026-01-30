import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Golang/Gin", "Node.js/Nest.js", "Python/Django/FastAPI", "React.js/Next.js",
    "Integração IA/LLM", "Docker/Kubernetes", "GCP (Certificado)", "RPA"
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
        institution: "UNOPAR",
        desc: "1º lugar no vestibular."
    }
];

const About = () => {
    return (
        <section id="sobre" className="section-padding" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* SKILLS */}
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Tecnologias <span className="gradient-text">Principais</span></h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-main)',
                                    padding: '10px 20px',
                                    borderRadius: '100px',
                                    fontSize: '0.9rem',
                                    cursor: 'default'
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* EDUCATION */}
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Formação <span className="gradient-text">Acadêmica</span></h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {education.map((edu, i) => (
                            <div key={i} style={{
                                borderLeft: '2px solid var(--glass-border)',
                                paddingLeft: '1.5rem',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute', left: '-6px', top: '0',
                                    width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)'
                                }} />
                                <h3 style={{ fontSize: '1.2rem' }}>{edu.title}</h3>
                                <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
