import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CyberGalaxy = () => {
    const pointsRef = useRef();
    const particlesCount = 10000;
    
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        
        const colorInside = new THREE.Color('#ff003c'); // Red / Cyber
        const colorOutside = new THREE.Color('#6b00ff'); // Purple
        
        for(let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            
            // Galaxy spiral math
            const radius = Math.random() * 15;
            const branchAngle = ((i % 4) / 4) * Math.PI * 2; // 4 branches
            const spinAngle = radius * 0.3;
            
            const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (15 - radius);
            const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (15 - radius);
            const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (15 - radius);

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i3+1] = randomY * 0.3 - 2; // Flattened Y and slightly lowered
            positions[i3+2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
            
            // Mixed Colors
            const mixedColor = colorInside.clone().lerp(colorOutside, radius / 15);
            colors[i3] = mixedColor.r;
            colors[i3+1] = mixedColor.g;
            colors[i3+2] = mixedColor.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state) => {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={particlesCount} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} vertexColors={true} transparent opacity={0.8} sizeAttenuation={true} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
};

const CyberCore = () => {
    const ref = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = t * 0.2;
        ref.current.rotation.y = t * 0.3;
        
        const s = 1 + Math.sin(t * 2) * 0.03;
        innerRef.current.scale.set(s, s, s);
    });
    
    return (
        <group position={[0, -2, 0]}>
            <mesh ref={ref}>
                <icosahedronGeometry args={[3, 2]} />
                <meshStandardMaterial color="#ff003c" wireframe={true} emissive="#ff003c" emissiveIntensity={0.5} transparent opacity={0.15} />
            </mesh>
            <mesh ref={innerRef}>
                <sphereGeometry args={[2.2, 32, 32]} />
                <meshStandardMaterial color="#000000" emissive="#6b00ff" emissiveIntensity={0.8} />
            </mesh>
        </group>
    );
};

const AboutMe = () => {
    return (
        <section id="sobre-mim" style={{ position: 'relative', width: '100%', minHeight: '80vh', overflow: 'hidden', padding: '6rem 2rem' }}>
            {/* 3D Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#ff003c" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6b00ff" />
                    
                    <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
                    
                    <CyberGalaxy />
                    <CyberCore />

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                </Canvas>
            </div>

            <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                maxWidth: '800px', 
                margin: '0 auto', 
                background: 'rgba(5, 5, 10, 0.6)', 
                backdropFilter: 'blur(8px)',
                padding: '3rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 0, 60, 0.2)',
                boxShadow: '0 0 40px rgba(255, 0, 60, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: '4rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                        Um pouco mais <span className="gradient-text">sobre mim</span>
                    </h2>
                    
                    <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8',
                        marginBottom: '1.5rem'
                    }}>
                        A tecnologia sempre despertou minha curiosidade. Aos 8 anos de idade, já era fascinado por computadores. Aos 12, comecei a aprender programação por conta própria e, aos 16, conquistei meu primeiro trabalho na área.
                    </p>
                    
                    <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8'
                    }}>
                        Adquirindo experiência e gosto na área de infraestrutura desde cedo, resolvi me consolidar como <strong>DevOps</strong>. Unindo a paixão pela inovação tecnológica, ciência e pesquisa, me especializei em ML na USP e juntei ao meu trabalho, me tornando também um <strong>MLOps</strong>. Tendo executado mais de 20 projetos MLOps e DevOps.
                    </p>

                    <div style={{ 
                        display: 'flex', 
                        gap: '1rem', 
                        justifyContent: 'center', 
                        marginTop: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        {['DevOps', 'Cloud', 'DevSecOps', 'MLOps'].map((tag, i) => (
                            <span key={i} style={{
                                background: 'rgba(255, 0, 60, 0.05)',
                                border: '1px solid rgba(255, 0, 60, 0.3)',
                                padding: '0.5rem 1.2rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: '#ff003c',
                                fontWeight: 'bold',
                                letterSpacing: '1px'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
