// components/MatrixPreloader.tsx

import React, { useEffect, useRef } from 'react';

const MatrixPreloader: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Canvas ko puri screen ka size dein
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Characters jo screen par girenge
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops: number[] = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            // Har frame par screen ko halka sa fade karein taaki trail effect bane
            ctx.fillStyle = 'rgba(2, 12, 27, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#64ffda'; // Accent color
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        const interval = setInterval(draw, 30);

        // Cleanup function
        return () => clearInterval(interval);

    }, []);

    return (
        <div className="fixed inset-0 bg-dark-navy z-[100] flex items-center justify-center">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
            {/* Animation ke upar text dikhane ke liye */}
            <div className="relative z-10 font-mono text-2xl text-accent animate-pulse">
                Welcome...
            </div>
        </div>
    );
};

export default MatrixPreloader;