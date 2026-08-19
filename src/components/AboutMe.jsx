import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, OrbitControls, Trail } from '@react-three/drei';

// Componente para planetas orbitando
const OrbitingPlanet = ({ radius, speed, size, color, offset = 0 }) => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + offset;
        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.z = Math.sin(t) * radius;
    });
    return (
        <Trail width={1} length={4} color={color} attenuation={(t) => t * t}>
            <mesh ref={ref}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
        </Trail>
    );
};

// Bandeira do brasil circular simulada
const BrazilFlagSphere = () => {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.005;
        ref.current.rotation.x += 0.002;
    });
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={ref} position={[3, 0, -2]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                {/* Simulating Brazil colors */}
                <meshStandardMaterial color="#009c3b" roughness={0.3} metalness={0.8} wireframe />
                <mesh>
                    <sphereGeometry args={[1.4, 16, 16]} />
                    <meshStandardMaterial color="#ffdf00" roughness={0.1} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="#002776" />
                </mesh>
            </mesh>
        </Float>
    );
}

// "Águias" abstratas (pequenos cones voando)
const AbstractBird = ({ speed, offsetRadius }) => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        ref.current.position.x = Math.sin(t) * offsetRadius;
        ref.current.position.y = Math.cos(t * 1.5) * (offsetRadius / 2);
        ref.current.position.z = Math.cos(t) * offsetRadius;
        ref.current.rotation.y = t;
        ref.current.rotation.z = Math.sin(t * 5) * 0.5; // bater de asas simulado
    });
    return (
        <mesh ref={ref}>
            <coneGeometry args={[0.1, 0.4, 4]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
        </mesh>
    );
};

const AboutMe = () => {
    return (
        <section id="sobre-mim" style={{ position: 'relative', width: '100%', minHeight: '80vh', overflow: 'hidden', padding: '6rem 2rem' }}>
            {/* 3D Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    
                    <BrazilFlagSphere />
                    
                    <OrbitingPlanet radius={4} speed={0.5} size={0.3} color="#00f2ff" offset={0} />
                    <OrbitingPlanet radius={6} speed={0.3} size={0.5} color="#a800ff" offset={Math.PI} />
                    <OrbitingPlanet radius={8} speed={0.2} size={0.4} color="#ffdd00" offset={Math.PI / 2} />

                    <AbstractBird speed={0.8} offsetRadius={5} />
                    <AbstractBird speed={1.2} offsetRadius={7} />
                    <AbstractBird speed={0.5} offsetRadius={4} />

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                maxWidth: '800px', 
                margin: '0 auto', 
                background: 'rgba(10, 10, 10, 0.6)', 
                backdropFilter: 'blur(10px)',
                padding: '3rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
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
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.5rem 1.2rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-main)'
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
