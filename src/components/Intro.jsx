import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'

// --- VISUAL COMPONENTS ---

// IOHK-inspired "Digital Neural" Particle System
const Particles = ({ collapse }) => {
    const count = 5000
    const mesh = useRef()
    const lightRef = useRef()

    const particles = useMemo(() => {
        const temp = []
        const colors = []
        const colorOptions = [
            new THREE.Color('#ff1f1f'),
            new THREE.Color('#a800ff'),
            new THREE.Color('#00f2ff'),
            new THREE.Color('#ffffff')
        ]

        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
            colors.push(color.r, color.g, color.b)
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return { temp, colors: new Float32Array(colors) }
    }, [count])

    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.0005
            mesh.current.rotation.z += 0.0002
        }

        particles.temp.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle

            // GRAVITY EFFECT ON COLLAPSE
            if (collapse) {
                particle.yFactor -= 20 * delta * (Math.random() + 0.5) // Fall down
                particle.speed *= 1.05 // Accelerate chaos
            }

            t = particle.t += speed / 3

            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + particle.yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )

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
                <sphereGeometry args={[0.05, 8, 8]}>
                    <instancedBufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
                </sphereGeometry>
                <meshBasicMaterial vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
            </instancedMesh>
        </>
    )
}

const NetworkMaterial = shaderMaterial(
    {
        uTime: 0,
        uLightPos: new THREE.Vector3(0, 0, 0),
        uColorBase: new THREE.Color('#220033'),
        uColorActive: new THREE.Color('#ff0033')
    },
    `
    varying vec3 vPosition;
    void main() {
      vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    `
    uniform float uTime;
    uniform vec3 uLightPos;
    uniform vec3 uColorBase;
    uniform vec3 uColorActive;
    varying vec3 vPosition;

    void main() {
      float dist = distance(vPosition, uLightPos);
      float radius = 45.0; 
      float intensity = 1.0 - smoothstep(5.0, radius, dist);
      float mixFactor = pow(intensity, 0.4);
      vec3 finalColor = mix(uColorBase, uColorActive, mixFactor);
      float alpha = 0.1 + (intensity * 0.9);
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
)
extend({ NetworkMaterial })

const NetworkBackground = ({ collapse }) => {
    const linesGeometry = useMemo(() => {
        const points = []
        const particleCount = 120
        const r = 45
        const nodes = []

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.acos(THREE.MathUtils.randFloatSpread(2))
            const phi = Math.random() * Math.PI * 2
            const x = r * Math.sin(theta) * Math.cos(phi)
            const y = r * Math.sin(theta) * Math.sin(phi)
            const z = r * Math.cos(theta)
            nodes.push(new THREE.Vector3(x, y, z))
        }

        nodes.forEach((node, i) => {
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
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [])

    const materialRef = useRef()
    const ref = useRef()

    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime()
        if (materialRef.current) {
            materialRef.current.uTime = t
            // Position matches DataStream (synced manually)
            materialRef.current.uLightPos.set(
                Math.sin(t * 0.5) * 30,
                Math.cos(t * 0.3) * 30,
                Math.sin(t * 0.7) * 20
            )
        }

        if (collapse && ref.current) {
            ref.current.rotation.x += delta * 0.5
            ref.current.position.y -= delta * 50 // FALL
        }
    })

    return (
        <lineSegments ref={ref} geometry={linesGeometry}>
            {/* @ts-ignore */}
            <networkMaterial ref={materialRef} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
        </lineSegments>
    )
}

const DataStream = ({ collapse }) => {
    const groupRef = useRef()

    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime()
        if (groupRef.current) {
            groupRef.current.position.x = Math.sin(t * 0.5) * 30
            groupRef.current.position.y = Math.cos(t * 0.3) * 30
            groupRef.current.position.z = Math.sin(t * 0.7) * 20

            if (collapse) {
                groupRef.current.position.y -= delta * 60 // Falls faster
            }
        }
    })

    return (
        <group ref={groupRef}>
            <pointLight intensity={8} distance={80} decay={2} color="#ff0033" />
            <mesh>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial color="#ff0033" transparent opacity={1} toneMapped={false} />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.6, 16, 16]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={1} toneMapped={false} />
            </mesh>
            <mesh>
                <sphereGeometry args={[3.5, 32, 32]} />
                <meshBasicMaterial color="#ff0033" transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
            </mesh>
            <mesh>
                <sphereGeometry args={[7, 32, 32]} />
                <meshBasicMaterial color="#ff0000" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
            </mesh>
        </group>
    )
}

// Audio Helper: Plays a specific slice of audio
const playAudioClip = (file, volume, start = 0, end = null) => {
    const audio = new Audio(file)
    audio.volume = volume

    // Wait for metadata to ensure currentTime can be set
    audio.onloadedmetadata = () => {
        audio.currentTime = start
        audio.play().catch(e => console.warn("Audio play failed", e))

        if (end !== null && end > start) {
            const durationMs = (end - start) * 1000
            setTimeout(() => {
                // Quick fade out prevents clicking
                const fade = setInterval(() => {
                    if (audio.volume > 0.05) {
                        audio.volume -= 0.05
                    } else {
                        audio.pause()
                        clearInterval(fade)
                    }
                }, 20)
            }, durationMs)
        }
    }
}

// "THE EAGLE" - Complex Procedural Wireframe
const DigitalEagle = ({ trigger }) => {
    const group = useRef()
    const [active, setActive] = useState(false)

    // Sequence timing logic

    // Sequence timing logic
    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(() => setActive(true), 300)

            // Audio: Screech (User: 2s to 8s)
            playAudioClip('/audio/eagle_screech.mp3', 0.6, 2, 8)

            // Audio: Wings (Looping texture)
            const wings = new Audio('/audio/wings_flap.mp3')
            wings.volume = 0.4
            wings.playbackRate = 1.2
            wings.loop = true
            wings.play().catch(e => console.warn("Audio play failed", e))
            // Stop wings on impact
            setTimeout(() => wings.pause(), 1700)

            return () => clearTimeout(timer)
        }
    }, [trigger])

    // Flight Animation
    useFrame((state, delta) => {
        if (active && group.current) {
            // Speed matched to timing (230 units/s)
            group.current.position.z += delta * 260

            // Complex Flapping Animation
            const t = state.clock.elapsedTime
            const flapSpeed = 12
            const baseFlap = Math.sin(t * flapSpeed)

            // Access Wing Groups (indices based on structure below)
            const leftWing = group.current.children[1]
            const rightWing = group.current.children[2]

            // Articulated movement
            leftWing.rotation.z = baseFlap * 0.4
            leftWing.rotation.y = baseFlap * 0.2

            rightWing.rotation.z = -baseFlap * 0.4
            rightWing.rotation.y = -baseFlap * 0.2

            // Banking effect
            group.current.rotation.z = Math.sin(t * 2) * 0.1

            // Head Look (Dynamic)
            // group.current.children[0].children[1].lookAt(0, 0, 80) // Optional dynamic look
        }
    })

    // Wing Builder
    const Wing = ({ side }) => {
        const feathers = []
        const count = 16 // More feathers
        const dir = side === 'left' ? 1 : -1

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 0.7
            feathers.push(
                <mesh key={i} position={[dir * (2 + i * 1.0), 0, i * 0.3]} rotation={[0, 0, dir * (Math.PI / 2 - angle * 0.6)]}>
                    <coneGeometry args={[0.3, 14, 2]} />
                    <meshBasicMaterial color={i < 8 ? "#ff1f1f" : "#ffffff"} wireframe wireframeLinewidth={1.5} toneMapped={false} />
                </mesh>
            )
        }
        return <group>{feathers}</group>
    }

    if (!active) return null

    return (
        <group ref={group} position={[0, 0, -200]} rotation={[0, 0, 0]}> {/* Y=0 to hit center camera */}

            {/* --- BODY & HEAD --- */}
            <group rotation={[Math.PI / 2, 0, 0]}>
                {/* Torso - Abstract Ribcage */}
                <mesh>
                    <cylinderGeometry args={[1.5, 3, 7, 6, 2, true]} />
                    <meshBasicMaterial color="#ffffff" wireframe wireframeLinewidth={1} toneMapped={false} />
                </mesh>

                {/* HEAD GROUP - Detailed */}
                <group position={[0, 5, 0.5]} rotation={[-0.2, 0, 0]}>
                    {/* Skull - Faceted */}
                    <mesh>
                        <dodecahedronGeometry args={[1.8, 0]} />
                        <meshBasicMaterial color="#ffffff" wireframe wireframeLinewidth={1.5} toneMapped={false} />
                    </mesh>

                    {/* Brow Ridge */}
                    <mesh position={[0, 0.5, 0.8]} rotation={[0.5, 0, 0]} scale={[1.2, 0.5, 1]}>
                        <boxGeometry args={[1.5, 1, 1]} />
                        <meshBasicMaterial color="#ffffff" wireframe toneMapped={false} />
                    </mesh>

                    {/* Beak - Curved Upper */}
                    <mesh position={[0, -0.5, 1.5]} rotation={[0.5, 0, 0]}>
                        <coneGeometry args={[0.6, 2.5, 4]} />
                        <meshBasicMaterial color="#ff1f1f" wireframe toneMapped={false} />
                    </mesh>
                    {/* Beak - Hook */}
                    <mesh position={[0, -1.5, 1.8]} rotation={[-2.5, 0, 0]}>
                        <coneGeometry args={[0.3, 1.5, 3]} />
                        <meshBasicMaterial color="#ff1f1f" wireframe toneMapped={false} />
                    </mesh>

                    {/* GLOWING EYES */}
                    <group position={[0, 0.2, 1]}>
                        {/* Right Eye */}
                        <mesh position={[0.8, 0, 0]}>
                            <sphereGeometry args={[0.25, 8, 8]} />
                            <meshBasicMaterial color="#ff0000" toneMapped={false} />
                            <pointLight color="#ff0000" distance={10} intensity={2} decay={1} />
                        </mesh>
                        {/* Left Eye */}
                        <mesh position={[-0.8, 0, 0]}>
                            <sphereGeometry args={[0.25, 8, 8]} />
                            <meshBasicMaterial color="#ff0000" toneMapped={false} />
                            <pointLight color="#ff0000" distance={10} intensity={2} decay={1} />
                        </mesh>
                    </group>
                </group>

                {/* Tail */}
                <group position={[0, -4, 0]}>
                    {[...Array(7)].map((_, i) => (
                        <mesh key={i} rotation={[0, 0, (i - 3) * 0.2]} position={[0, -2, 0]}>
                            <coneGeometry args={[0.4, 8, 2]} />
                            <meshBasicMaterial color="#a800ff" wireframe />
                        </mesh>
                    ))}
                </group>
            </group>

            {/* --- WINGS --- */}
            <group position={[-1.5, 1, 0]}>
                <Wing side="left" />
            </group>

            <group position={[1.5, 1, 0]}>
                <Wing side="right" />
            </group>

        </group>
    )
}

// Camera Shake Rig
const CameraRig = ({ shake }) => {
    useFrame(({ camera, clock }) => {
        if (shake) {
            const t = clock.elapsedTime
            // Perlin-ish noise shake
            camera.position.x = Math.sin(t * 50) * 1.5
            camera.position.y = Math.cos(t * 45) * 1.5
            camera.position.z = 80 + Math.sin(t * 60) * 2 // slight Z shudder

            // Rotation shake
            camera.rotation.z = Math.sin(t * 40) * 0.02
        }
    })
    return null
}

const Intro = ({ onEnter }) => {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const [exiting, setExiting] = useState(false)
    const [flash, setFlash] = useState(false)

    // Fake Loading Sequence
    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setLoading(false)
                    return 100
                }
                return prev + (Math.random() * 3) // Random increments
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const handleEnter = () => {
        setExiting(true)

        // Sequence Timing matches user request
        // 0s: Earthquake Starts
        // 0.3s: Eagle Spawns
        // 1.7s: IMPACT FLASH (User setting)

        setTimeout(() => {
            setFlash(true) // TRIGGER FLASH
            // Audio: Flashbang (User: 0.4s start)
            playAudioClip('/audio/flashbang.mp3', 0.8, 0.8, null)
        }, 1700)

        setTimeout(() => {
            onEnter() // SWITCH SITES
        }, 2000)
    }

    const displayProgress = Math.min(100, Math.floor(progress))

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 80], fov: 60 }} gl={{ antialias: true, alpha: false }}>
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 50, 350]} />

                <CameraRig shake={exiting} />
                <Particles collapse={exiting} />
                <NetworkBackground collapse={exiting} />
                <DataStream collapse={exiting} />
                <DigitalEagle trigger={exiting} />

                <OrbitControls enableZoom={false} autoRotate={!exiting} autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>

            {/* IMPACT FLASH OVERLAY */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'red',
                opacity: flash ? 1 : 0,
                transition: 'opacity 0.1s ease-out',
                pointerEvents: 'none',
                zIndex: 10001
            }} />

            {/* White Flash fade-out helper */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'white',
                opacity: flash ? 0.8 : 0,
                transition: 'opacity 0.2s ease-out',
                pointerEvents: 'none',
                zIndex: 10002,
                mixBlendMode: 'overlay'
            }} />

            {/* UI Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 10000
            }}>
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
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
                        !exiting && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} // Fade out on exit click
                                transition={{ duration: 0.5 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    display: 'inline-block',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: 'clamp(1rem, 5vw, 2rem) clamp(1rem, 5vw, 4rem)', // Responsive padding
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(10px)',
                                    maxWidth: '90vw', // Prevent overflow
                                    boxSizing: 'border-box'
                                }}>
                                    <p style={{
                                        fontFamily: "'Courier New', monospace",
                                        color: 'var(--text-muted)',
                                        fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', // Responsive font
                                        letterSpacing: '0.2rem',
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        System Ready
                                    </p>
                                    <h1 style={{
                                        fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', // Reduced size to prevent overflow
                                        fontFamily: 'var(--font-heading)',
                                        color: '#fff',
                                        marginBottom: '0.5rem',
                                        letterSpacing: '-2px',
                                        lineHeight: '1.2'
                                    }}>
                                        FABIANO<span style={{ color: 'var(--primary)' }}>FULLSTACK</span>.DEV
                                    </h1>
                                    <div style={{ width: '50px', height: '2px', background: 'var(--secondary)', margin: '1.5rem auto' }} />

                                    <div style={{ pointerEvents: 'auto' }}>
                                        <button
                                            onClick={handleEnter}
                                            style={{
                                                background: '#fff',
                                                color: '#000',
                                                border: 'none',
                                                padding: '1rem 2.5rem',
                                                fontSize: 'clamp(0.8rem, 3vw, 1rem)', // Responsive button text
                                                fontFamily: 'var(--font-heading)',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
                                                transition: 'all 0.2s ease',
                                                whiteSpace: 'nowrap'
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
                        )
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Intro
