import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Intro from './components/Intro'

import { Routes, Route } from 'react-router-dom'
import AllProjects from './components/AllProjects'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
    const [showIntro, setShowIntro] = useState(() => {
        // Cooldown Check (60 seconds)
        const lastView = localStorage.getItem('intro_last_view')
        if (lastView) {
            const diff = Date.now() - parseInt(lastView)
            if (diff < 60000) return false
        }
        return true
    })

    // Update timestamp if showing
    React.useEffect(() => {
        if (showIntro) {
            localStorage.setItem('intro_last_view', Date.now().toString())
        }
    }, [showIntro])

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {showIntro ? (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
                    >
                        <Intro onEnter={() => setShowIntro(false)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Navbar />
                        {/* Background gradients */}
                        <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%' }} />
                            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%' }} />
                        </div>

                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <Projects />
                                    <About />
                                    <Experience />
                                    <Contact />
                                </>
                            } />
                            <Route path="/projetos" element={<AllProjects />} />
                        </Routes>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
