import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    { role: "Engenheiro de Software / IA (Fundador)", company: "Alnitak Vision AI", period: "2025 - Atual", desc: "Liderando inovação em IA." },
    { role: "Engenheiro de Software / IA (Contrato)", company: "Escritório Jurídico Eduardo Mesquita", period: "2025 - 2025", desc: "Soluções de IA para Legal Tech." },
    { role: "Engenheiro de Software Estagiário", company: "FullStore", period: "2025 - Atual", desc: "Desenvolvimento Full-Stack." },
    { role: "Engenheiro Full-Stack (Freelancer)", company: "FabianoFullStack.dev", period: "2023 - 2024", desc: "Entrega de soluções de software personalizadas." },
    { role: "Engenheiro Full-Stack", company: "Rikz Company", period: "2022 - 2023", desc: "Desenvolvimento de aplicações web de ponta a ponta." },
    { role: "Analista de Banco de Dados", company: "Alterdata Software", period: "2022", desc: "Gestão e otimização de bancos de dados." },
    { role: "Desenvolvedor Pawno", company: "Servidor GTA SAMP", period: "2012 - 2015", desc: "Experiência inicial com scripting de jogos." },
];

const Experience = () => {
    return (
        <section id="experiencia" className="section-padding" style={{ paddingTop: '100px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Jornada <span className="gradient-text">Profissional</span>
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                            borderLeft: '2px solid var(--glass-border)',
                            paddingLeft: '2rem',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute', left: '-6px', top: '0',
                            width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)',
                            boxShadow: '0 0 10px var(--primary)'
                        }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{exp.role}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>{exp.company}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '2px 8px', borderRadius: '4px' }}>{exp.period}</span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
