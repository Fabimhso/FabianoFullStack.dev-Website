import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}>
                        Construindo <span className="gradient-text">Qualidade</span><br />
                        em <span className="gradient-text">Software</span>.
                    </h1>

                    <p style={{ maxWidth: '600px', color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                        Engenheiro Full-Stack especializado em construir aplicações robustas, especialista em IA.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contato"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                color: 'white',
                                padding: '16px 40px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px -10px var(--primary-dim)'
                            }}
                        >
                            Iniciar Proposta
                        </motion.a>

                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem', marginLeft: '1rem' }}>
                            <motion.a whileHover={{ y: -3, color: 'var(--primary)' }} href="https://github.com/Fabimhso" target="_blank" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }}><FaGithub /></motion.a>
                            <motion.a whileHover={{ y: -3, color: 'var(--primary)' }} href="https://www.linkedin.com/in/fabianooliveiraoficial" target="_blank" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }}><FaLinkedin /></motion.a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;
