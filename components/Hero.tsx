'use client';

import { NAME, TITLE } from "@/constants/constants";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="fade-in-up">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"><span className="gradient-text">{NAME}</span></h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">{TITLE}</h2>
                    <br/>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#about" className="btn-primary">View My Work</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
