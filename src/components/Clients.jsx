import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaBolt, FaMobileAlt, FaShoppingBag, FaLaptopCode, FaChartLine, FaWhatsapp } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiNextdotjs, SiFirebase, SiStripe, SiGooglecloud, SiTypescript, SiJavascript, SiPython, SiGoland, SiElectron } from 'react-icons/si';

const clients = [
    {
        name: "Eduardo Mesquita Advogados",
        icon: <FaGavel />,
        desc: "Desenvolvi a IA SuaSecretaria.app, uma secretaria virtual para advogados.",
        tags: [
            { name: "React", icon: <SiReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Python", icon: <SiPython /> },
            { name: "IA", icon: <FaLaptopCode /> }
        ],
        color: "#d4af37" // Gold
    },
    {
        name: "Juliana Lima Escritório",
        icon: <FaGavel />,
        desc: "Desenvolvi um sistema de gestão de processos para advogados, com automação de documentos e IA.",
        tags: [
            { name: "React", icon: <SiReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Python", icon: <SiPython /> },
            { name: "CRM", icon: <FaChartLine /> },
            { name: "Cloud", icon: <SiGooglecloud /> }
        ],
        color: "#c0c0c0" // Silver
    },
    {
        name: "Rikz Company",
        icon: <FaLaptopCode />,
        desc: "Desenvolvi o RIKZMetrics, um dashboard integrado para gestão de métricas de marketing digital.",
        tags: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Golang", icon: <SiGoland /> },
            { name: "Python", icon: <SiPython /> },
            { name: "UI/UX", icon: <FaLaptopCode /> }
        ],
        color: "#00f2ff" // Cyan
    },
    {
        name: "Rota Elétrica",
        icon: <FaBolt />,
        desc: "Dashboard administrativo para gestão de frotas, sistema PDV e automação de serviços.",
        tags: [
            { name: "React", icon: <SiReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Electron", icon: <SiElectron /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Dashboard", icon: <FaChartLine /> }
        ],
        color: "#ffdd00" // Yellow
    },
    {
        name: "Alô Mobile",
        icon: <FaMobileAlt />,
        desc: "Sistema de gestão de estoque e vendas para lojas de celulares.",
        tags: [
            { name: "React Native", icon: <SiReact /> },
            { name: "Golang", icon: <SiGoland /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Firebase", icon: <SiFirebase /> }
        ],
        color: "#ff1f1f" // Red
    },
    {
        name: "Loja TrimTrim",
        icon: <FaShoppingBag />,
        desc: "Plataforma de vendas online. Utilizei Stripe, React, API do WhatsApp e Python.",
        tags: [
            { name: "Stripe", icon: <SiStripe /> },
            { name: "React", icon: <SiReact /> },
            { name: "WhatsApp API", icon: <FaWhatsapp /> },
            { name: "Python", icon: <SiPython /> }
        ],
        color: "#a800ff" // Purple
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
