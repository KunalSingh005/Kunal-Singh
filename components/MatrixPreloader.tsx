// components/MatrixPreloader.tsx

import React, { useEffect, useRef } from 'react';

const MatrixPreloader: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) {
            return; // Agar canvas taiyar nahi hai, to aage mat badho
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const alphabet = 'アァカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウゥクスツヌフムユュルABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops: number[] = Array.from({ length: Math.ceil(columns) }).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(2, 12, 27, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#64ffda';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        const intervalId = setInterval(draw, 33);

        // Jab component hatega, to interval ko band kar do
        return () => clearInterval(intervalId);

    }, []); // Yeh effect sirf ek baar chalega

    return (
        <div className="fixed inset-0 bg-dark-navy z-[100] flex items-center justify-center">
            <canvas ref={canvasRef}></canvas>
            <div className="absolute font-mono text-2xl text-accent animate-pulse z-10">
                Initializing...
            </div>
        </div>
    );
};

export default MatrixPreloader;