'use client';

import React, { useEffect, useState } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = 'Software Engineer & Researcher';
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const typingSpeed = 100;

        const typeWriter = () => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        };

        typeWriter();

        // Blinking cursor
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg grid-pattern">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="fade-in-up">
                    {/* Greeting */}
                    <p className="text-indigo-400 text-lg md:text-xl font-medium mb-4">
                        Hi, my name is
                    </p>

                    {/* Name */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="gradient-text">John Doe</span>
                    </h1>

                    {/* Typing Animation */}
                    <div className="h-16 md:h-20 mb-8">
                        <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
                            {text}
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        I build innovative solutions at the intersection of <span className="text-indigo-400">machine learning</span>,{' '}
                        <span className="text-purple-400">distributed systems</span>, and{' '}
                        <span className="text-pink-400">scalable computing</span>.
                        Passionate about pushing the boundaries of what's possible with technology.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all font-semibold"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors">
                        <span className="text-sm font-medium">Scroll Down</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
