'use client';

import React from 'react';

export default function About() {
    return (
        <section id="about" className="gradient-bg grid-pattern">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Profile Image */}
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 floating">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/30 glow">
                            <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                                <span className="text-8xl font-bold text-white">JD</span>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="flex-1 fade-in-up">
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <div className="space-y-4 text-lg text-slate-300">
                            <p>
                                Hi! I'm John Doe, a passionate software engineer and researcher
                                with a focus on building innovative solutions at the intersection of technology and research.
                            </p>
                            <p>
                                With expertise in full-stack development, machine learning, and distributed systems,
                                I thrive on solving complex problems and turning ideas into reality. My work combines
                                rigorous academic research with practical engineering to create impactful applications.
                            </p>
                            <p>
                                Currently, I'm exploring cutting-edge technologies in AI/ML, cloud computing, and
                                scalable system architecture. I'm always excited to collaborate on projects that push
                                the boundaries of what's possible.
                            </p>

                            {/* Skills
                            <div className="pt-4">
                                <h3 className="text-xl font-semibold text-white mb-4">Technical Expertise</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Python', 'TypeScript', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 glass-card text-sm font-medium text-indigo-300 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
