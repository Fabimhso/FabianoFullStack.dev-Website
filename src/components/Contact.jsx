import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contato" className="section-padding" style={{ paddingBottom: '120px', paddingTop: '100px', textAlign: 'center' }}>
            <div style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                padding: '5rem 2rem',
                borderRadius: '20px',
                border: '1px solid var(--glass-border)'
            }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Vamos trabalhar <span className="gradient-text">juntos</span></h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Tem um projeto em mente? Estou aceitando novas oportunidades de freelance e consultas full-time.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contact@fabianofullstack.dev" // Email fictício
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'var(--text-main)',
                        color: 'var(--bg-dark)',
                        padding: '16px 40px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1.1rem'
                    }}
                >
                    <FaPaperPlane /> Diga Olá
                </motion.a>
            </div>

            <footer style={{ marginTop: '5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} FabianoFullStack.dev. Todos os direitos reservados.</p>
                <p>Feito com React.js & cafeína premium.</p>
            </footer>
        </section>
    );
};

export default Contact;
