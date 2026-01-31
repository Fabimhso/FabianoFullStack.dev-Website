import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// IOHK-inspired "Digital Neural" Particle System
const Particles = () => {
    const count = 5000
    const mesh = useRef()
    const lightRef = useRef()

    // Generate particles with color variation (Red/Purple/Cyan)
    const particles = useMemo(() => {
        const temp = []
        const colors = []
        const colorOptions = [
            new THREE.Color('#ff1f1f'), // Primary Red
            new THREE.Color('#a800ff'), // Secondary Purple
            new THREE.Color('#00f2ff'), // Accent Cyan
            new THREE.Color('#ffffff')  // White sparks
        ]

        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100

            // Assign random color from palette
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
            colors.push(color.r, color.g, color.b)

            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return { temp, colors: new Float32Array(colors) }
    }, [count])

    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame((state) => {
        if (mesh.current) {
            // Slow constant rotation
            mesh.current.rotation.y += 0.0005
            mesh.current.rotation.z += 0.0002
        }

        particles.temp.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            t = particle.t += speed / 3 // Slower, heavier movement

            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )

            // Dynamic scaling
            const scale = (s > 0.5 ? 1.2 : 0.4)
            dummy.scale.set(scale, scale, scale)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <>
            <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1} color="#ff1f1f" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <sphereGeometry args={[0.05, 8, 8]}> {/* Low poly sphere for performance/style */}
                    <instancedBufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
                </sphereGeometry>
                <meshBasicMaterial vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
            </instancedMesh>
        </>
    )
}

// Background Network with "Flowing Light"
const NetworkBackground = () => {
    const linesGeometry = useMemo(() => {
        const points = []
        const particleCount = 100 // Fewer nodes for cleaner network
        const r = 40 // Radius of the network sphere
        const nodes = []

        // Generate nodes
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.acos(THREE.MathUtils.randFloatSpread(2))
            const phi = Math.random() * Math.PI * 2
            const x = r * Math.sin(theta) * Math.cos(phi)
            const y = r * Math.sin(theta) * Math.sin(phi)
            const z = r * Math.cos(theta)
            nodes.push(new THREE.Vector3(x, y, z))
        }

        // Create connections
        nodes.forEach((node, i) => {
            // Connect to 3 nearest neighbors
            const neighbors = nodes
                .map((n, index) => ({ dist: node.distanceTo(n), index }))
                .filter(n => n.index !== i)
                .sort((a, b) => a.dist - b.dist)
                .slice(0, 3)

            neighbors.forEach(n => {
                points.push(node)
                points.push(nodes[n.index])
            })
        })

        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return geometry
    }, [])

    const linesRef = useRef()

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.y -= 0.001 // Rotate opposite to particles

            // Animate opacity/color to simulate "flowing light"
            const time = state.clock.getElapsedTime()
            // We can't easily animate vertex colors on a basic LineSegments without custom shader or attributes update loop
            // For performance and effect, we'll pulse the overall material and let rotation do the visual work
            const pulse = (Math.sin(time) + 1) / 2 // 0 to 1
            linesRef.current.material.opacity = 0.1 + (pulse * 0.1) // Subtle pulse
        }
    })

    return (
        <lineSegments ref={linesRef} geometry={linesGeometry}>
            <lineBasicMaterial color="#a800ff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
        </lineSegments>
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
                return prev + (Math.random() * 3) // Random increments for "data loading" feel
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const displayProgress = Math.min(100, Math.floor(progress))

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 80], fov: 60 }} gl={{ antialias: true, alpha: false }}>
                <color attach="background" args={['#050505']} />

                {/* Fog to give depth/void feel */}
                <fog attach="fog" args={['#050505', 50, 150]} />

                <Particles />
                <NetworkBackground />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>

            {/* UI Overlay - IOHK / Brutalist Style */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none'
            }}>
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', // Left aligned
                                width: '300px'
                            }}
                        >
                            <div style={{
                                fontFamily: "'Courier New', monospace",
                                fontSize: '0.9rem',
                                color: 'var(--primary)',
                                marginBottom: '5px',
                                textTransform: 'uppercase'
                            }}>
                                Initialize Protocol...
                            </div>
                            {/* Brutalist Progress Bar */}
                            <div style={{ width: '100%', height: '2px', background: '#333', position: 'relative', marginBottom: '10px' }}>
                                <motion.div
                                    style={{ width: '100%', height: '100%', background: 'var(--primary)' }}
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: displayProgress / 100, originX: 0 }}
                                    transition={{ ease: "linear", duration: 0.1 }}
                                />
                            </div>
                            <h1 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '4rem',
                                color: '#fff',
                                lineHeight: 1,
                                margin: 0
                            }}>
                                {displayProgress.toString().padStart(3, '0')}%
                            </h1>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} // Custom bezier for "tech" feel
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                display: 'inline-block',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '2rem 4rem',
                                background: 'rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <p style={{
                                    fontFamily: "'Courier New', monospace",
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.2rem',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase'
                                }}>
                                    System Ready
                                </p>
                                <h1 style={{
                                    fontSize: '3.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: '#fff',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '-2px'
                                }}>
                                    FABIANO<span style={{ color: 'var(--primary)' }}>FULLSTACK</span>.DEV
                                </h1>
                                <div style={{ width: '50px', height: '2px', background: 'var(--secondary)', margin: '1.5rem auto' }} />

                                <div style={{ pointerEvents: 'auto' }}>
                                    <button
                                        onClick={onEnter}
                                        style={{
                                            background: '#fff',
                                            color: '#000',
                                            border: 'none',
                                            padding: '1rem 2.5rem',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)', // Sci-fi Shape
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--primary)'
                                            e.target.style.color = '#fff'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#fff'
                                            e.target.style.color = '#000'
                                        }}
                                    >
                                        Enter Experience
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Intro
