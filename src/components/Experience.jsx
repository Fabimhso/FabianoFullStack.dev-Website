import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software & Infrastructure Engineer | Zoho Specialist",
        company: "FullStore",
        period: "2025 - 2026",
        desc: "Arquitetura e infraestrutura core (fullstore.io), autenticação DNS rigorosa (SPF, DKIM, DMARC) para proteção de domínio, automações e pipelines de dados com bot em Python, modelagem de banco de dados SQL e chatbot com ML (ZIA) com 98% de precisão."
    },
    {
        role: "Scholarship - Back-End & DevSecOps Engineer",
        company: "Sebrae (Programa SuperNova)",
        period: "2026",
        desc: "Bolsista do programa SEBRAE SuperNova focado em engenharia e escalabilidade de startups; cofundador e responsável pela arquitetura de back-end e implementação de práticas DevSecOps da plataforma Adaptmind."
    },
    {
        role: "DevSecOps & Full-Stack Software Engineer",
        company: "Alo Sistemas",
        period: "2026",
        desc: "Validação de segurança, identificação e mitigação de vulnerabilidades, além de arquitetura e escalabilidade do software Alô ERP com integração de IA."
    },
    {
        role: "Scholarship – Project Lead & ML Engineer | AI Back-End",
        company: "Feso (Alnitak Vision AI)",
        period: "2025 - 2026",
        desc: "Vencedor do Prêmio 'Ideias Inovadoras' com bolsa de fomento para liderar o time de desenvolvimento, arquitetura back-end e visão computacional avançada com eye-tracking para acessibilidade."
    },
    {
        role: "Residência / Especialização em Engenharia de ML & MLOps",
        company: "FDTE (USP)",
        period: "2025 - 2026",
        desc: "Desenvolvimento de pipelines de dados e MLOps otimizados (redução de 70% no tempo de preparação), implementação de modelos preditivos, LLMs com RAG e Few-Shot Prompting, e visão computacional."
    },
    {
        role: "Analista DevOps",
        company: "Rikz Company",
        period: "2023 - 2025",
        desc: "Suporte e evolução de aplicações em Linux com Docker, Node.js, Python e Bash. Implantação de pipelines em GitLab CI com templates reutilizáveis (redução de 55% no tempo de execução), otimização de performance web (de 62% para 98%), resolução de incidentes críticos em APIs e bancos de dados, e arquitetura DevSecOps completa para plataforma iGaming."
    },
    {
        role: "Analista de Banco de Dados & Infraestrutura",
        company: "Alterdata Software",
        period: "2022",
        desc: "Suporte e manutenção de bancos MySQL e PostgreSQL, infraestrutura Windows Server, Docker, gerenciamento de redes/DNS e implementação de cultura DevOps."
    },
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
