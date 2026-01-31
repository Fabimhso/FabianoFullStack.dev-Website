import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Chaos/Neural Particle System
const Particles = () => {
    const count = 4000
    const mesh = useRef()

    // Generate random particles in a sphere/cloud formation
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    // Dummy object for instanced mesh
    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame((state) => {
        // Add some subtle rotation to the whole system
        if (mesh.current) {
            mesh.current.rotation.y += 0.001
            mesh.current.rotation.z += 0.0005
        }

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle

            // Update time
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            // Update position based on a chaotic/trigonometric formula
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )

            // Scale particles primarily for depth perception
            const scale = (s > 0.5 ? 1.5 : 0.5) * 1.5 // slightly larger
            dummy.scale.set(scale, scale, scale)

            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <>
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <sphereGeometry args={[0.07, 10, 10]} /> {/* Small spheres for particles */}
                <meshBasicMaterial color="#00f2ff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
            </instancedMesh>
        </>
    )
}

// Background "Connecting Lines" or Glow
const Glow = () => {
    return (
        <Sphere args={[100, 10, 10]} scale={1.5}>
            <meshBasicMaterial color="#a800ff" wireframe transparent opacity={0.03} side={THREE.BackSide} />
        </Sphere>
    )
}

const Intro = ({ onEnter }) => {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    // Fake Loading Sequence
    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setLoading(false)
                    return 100
                }
                return prev + 1
            })
        }, 30) // Speed of loading
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 100], fov: 75 }} gl={{ antialias: true, alpha: false }}>
                <color attach="background" args={['#050505']} />
                <Particles />
                <Glow />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>

            {/* UI Overlay */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#fff',
                width: '100%',
                pointerEvents: 'none'
            }}>
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', letterSpacing: '3px' }}>
                                CARREGANDO SISTEMA
                            </h2>
                            <div style={{ width: '300px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                <motion.div
                                    style={{ width: '100%', height: '100%', background: 'var(--accent)' }}
                                    initial={{ x: '-100%' }}
                                    animate={{ x: `${progress - 100}%` }}
                                    transition={{ ease: "linear", duration: 0.1 }}
                                />
                            </div>
                            <p style={{ marginTop: '10px', fontFamily: 'monospace', color: 'var(--accent)' }}>{progress}%</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 style={{
                                fontSize: '4rem',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-heading)',
                                textShadow: '0 0 20px rgba(0, 242, 255, 0.5)'
                            }}>
                                SISTEMA <span style={{ color: 'var(--primary)' }}>INICIALIZADO</span>
                            </h1>
                            <p style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-muted)',
                                marginBottom: '3rem',
                                letterSpacing: '2px'
                            }}>
                                BEM VINDO AO FabianoFullStack.dev
                            </p>

                            <div style={{ pointerEvents: 'auto' }}>
                                <button
                                    onClick={onEnter}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid var(--accent)',
                                        color: 'var(--accent)',
                                        padding: '1rem 3rem',
                                        fontSize: '1.2rem',
                                        cursor: 'pointer',
                                        borderRadius: '4px',
                                        transition: 'all 0.3s ease',
                                        marginTop: '20px',
                                        fontFamily: 'var(--font-body)',
                                        letterSpacing: '1px',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'var(--accent)'
                                        e.target.style.color = '#000'
                                        e.target.style.boxShadow = '0 0 30px var(--accent)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent'
                                        e.target.style.color = 'var(--accent)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                >
                                    ENTRAR
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Intro
