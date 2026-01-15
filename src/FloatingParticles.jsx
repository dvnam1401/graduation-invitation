import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        // Define counts for each type based on device
        const counts = {
            dust: isMobile ? 20 : 50, // Increased count
            petal: isMobile ? 3 : 6,
            sparkle: isMobile ? 6 : 12 // Increased count
        };

        const generateParticles = () => {
            const allParticles = [];
            let i = 0;

            // Type A: Paper Dust (Main Layer)
            for (let j = 0; j < counts.dust; j++) {
                allParticles.push({
                    id: i++,
                    type: 'dust',
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 5 + 5, // Increased: 5-10px
                    duration: Math.random() * 15 + 20, // 20-35s
                    delay: Math.random() * 5,
                    opacity: Math.random() * 0.2 + 0.55, // Increased: 0.55-0.75
                });
            }

            // Type B: Soft Petals (Secondary)
            for (let j = 0; j < counts.petal; j++) {
                allParticles.push({
                    id: i++,
                    type: 'petal',
                    x: Math.random() > 0.5 ? Math.random() * 30 : Math.random() * 30 + 70, // Keep to sides
                    y: Math.random() * 100,
                    size: Math.random() * 8 + 12, // Increased: 12-20px
                    duration: Math.random() * 15 + 25, // 25-40s
                    delay: Math.random() * 10,
                    rotation: Math.random() * 360,
                    opacity: Math.random() * 0.15 + 0.35, // Increased: 0.35-0.5
                });
            }

            // Type C: Sparkles (Dots)
            for (let j = 0; j < counts.sparkle; j++) {
                allParticles.push({
                    id: i++,
                    type: 'sparkle',
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 3, // Increased: 3-5px
                    duration: Math.random() * 4 + 4, // 4-8s (blink cycle)
                    delay: Math.random() * 5,
                    opacity: 0, // Starts invisible
                });
            }

            return allParticles;
        };

        setParticles(generateParticles());
    }, []);

    const getParticleStyle = (p) => {
        const base = {
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            position: 'absolute',
        };

        if (p.type === 'dust') {
            return {
                ...base,
                backgroundColor: '#f2c27b', // Stronger warm gold
                borderRadius: '50%',
                filter: 'blur(0.5px)', // Reduced blur
                opacity: p.opacity,
            };
        } else if (p.type === 'petal') {
            return {
                ...base,
                backgroundColor: '#e6ccb2', // Slightly deeper beige
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', // Organic blob
                filter: 'blur(1px)', // Reduced blur
                opacity: p.opacity,
            };
        } else if (p.type === 'sparkle') {
            return {
                ...base,
                backgroundColor: '#d9a441', // Deep gold
                borderRadius: '50%',
                boxShadow: '0 0 3px #d9a441', // Glow matched to color
                opacity: 0,
            };
        }
    };

    const getAnimateProps = (p) => {
        if (p.type === 'dust') {
            return {
                y: [0, -100, 0], // Slow drift
                x: [0, Math.random() * 50 - 25, 0],
            };
        } else if (p.type === 'petal') {
            return {
                y: [0, 150], // Drift down
                x: [0, Math.random() * 60 - 30],
                rotate: [p.rotation, p.rotation + 90],
            };
        } else if (p.type === 'sparkle') {
            return {
                opacity: [0, 0.8, 0], // Higher peak opacity
                scale: [0.8, 1.2, 0.8],
            };
        }
    };

    const getTransitionProps = (p) => {
        if (p.type === 'dust') {
            return {
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                delay: p.delay,
            };
        } else if (p.type === 'petal') {
            return {
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
            };
        } else if (p.type === 'sparkle') {
            return {
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
                times: [0, 0.5, 1] // Peak at middle
            };
        }
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    style={getParticleStyle(particle)}
                    animate={getAnimateProps(particle)}
                    transition={getTransitionProps(particle)}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
