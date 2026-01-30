import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            {/* Background gradients */}
            <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%' }} />
            </div>

            <Hero />
            <Projects />
            <About />
            <Experience />
            <Contact />
        </div>
    )
}

export default App
