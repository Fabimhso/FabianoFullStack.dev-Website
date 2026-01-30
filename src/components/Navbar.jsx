import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Início', href: '#' },
        { title: 'Sobre', href: '#sobre' },
        { title: 'Jornada', href: '#experiencia' },
        { title: 'Contato', href: '#contato' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: scrolled ? '15px 0' : '30px 0',
            background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="section-padding" style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <a href="#" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Fabiano<span className="gradient-text">FullStack</span>.dev
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.href} style={{
                            color: 'var(--text-main)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            transition: 'color 0.2s'
                        }} className="nav-link">
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
        }
        @media (max-width: 768px) {
            .mobile-toggle { display: block !important; }
        }
      `}</style>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--bg-card)',
                            overflow: 'hidden',
                            borderBottom: '1px solid var(--glass-border)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                            {navLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '1rem 0',
                                        color: 'var(--text-main)',
                                        textDecoration: 'none',
                                        fontSize: '1.2rem',
                                        borderBottom: '1px solid var(--glass-border)'
                                    }}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
