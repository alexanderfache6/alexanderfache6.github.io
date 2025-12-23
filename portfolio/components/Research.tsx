'use client';

import React from 'react';

export default function Research() {
    return (
        <section id="research" className="bg-[var(--bg-secondary)]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up">
                    <span className="gradient-text">Research</span>
                </h2>

                <div className="space-y-8">
                    {/* Research Introduction */}
                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-4 text-white">Research Interests</h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            My research focuses on the intersection of <span className="text-indigo-400 font-semibold">machine learning</span>,
                            {' '}<span className="text-purple-400 font-semibold">distributed systems</span>, and
                            {' '}<span className="text-pink-400 font-semibold">scalable computing</span>. I'm particularly interested
                            in developing novel algorithms and systems that can efficiently train and deploy large-scale AI models
                            in resource-constrained environments.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Primary Focus</h4>
                                <ul className="text-slate-300 space-y-2">
                                    <li>• Distributed Machine Learning</li>
                                    <li>• Neural Architecture Search</li>
                                    <li>• Efficient Model Training</li>
                                    <li>• Federated Learning</li>
                                </ul>
                            </div>
                            <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                                <h4 className="text-xl font-semibold text-purple-400 mb-2">Secondary Interests</h4>
                                <ul className="text-slate-300 space-y-2">
                                    <li>• Edge Computing</li>
                                    <li>• Privacy-Preserving ML</li>
                                    <li>• AutoML Systems</li>
                                    <li>• Model Compression</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Current Research */}
                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-6 text-white">Current Research Projects</h3>

                        <div className="space-y-6">
                            <div className="border-l-4 border-indigo-500 pl-6">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Adaptive Gradient Compression for Distributed Training
                                </h4>
                                <p className="text-slate-400 mb-3">
                                    Developing novel compression techniques that dynamically adapt to model characteristics
                                    and network conditions to minimize communication overhead in distributed training scenarios.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded">In Progress</span>
                                    <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded">Distributed Systems</span>
                                    <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded">Deep Learning</span>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Energy-Efficient Neural Architecture Search
                                </h4>
                                <p className="text-slate-400 mb-3">
                                    Exploring methods to discover neural network architectures that optimize for both accuracy
                                    and energy efficiency, particularly for deployment on edge devices and mobile platforms.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">In Progress</span>
                                    <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded">AutoML</span>
                                    <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded">Green AI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-6 text-white">Selected Publications</h3>

                        <div className="space-y-6">
                            <div className="pb-6 border-b border-slate-700">
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    "Efficient Distributed Training of Large Language Models through Adaptive Gradient Compression"
                                </h4>
                                <p className="text-slate-400 text-sm mb-2">
                                    <span className="font-semibold">John Doe</span>, Jane Smith, Bob Johnson
                                </p>
                                <p className="text-slate-500 text-sm mb-3">
                                    International Conference on Machine Learning (ICML) 2024
                                </p>
                                <p className="text-slate-400 mb-3">
                                    We present a novel gradient compression technique that reduces communication overhead
                                    in distributed training by up to 40% while maintaining model convergence properties.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                                        Paper →
                                    </a>
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                                        Code →
                                    </a>
                                </div>
                            </div>

                            <div className="pb-6 border-b border-slate-700">
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    "AutoScale: Evolutionary Neural Architecture Search for Resource-Constrained Environments"
                                </h4>
                                <p className="text-slate-400 text-sm mb-2">
                                    <span className="font-semibold">John Doe</span>, Alice Brown
                                </p>
                                <p className="text-slate-500 text-sm mb-3">
                                    Neural Information Processing Systems (NeurIPS) 2023
                                </p>
                                <p className="text-slate-400 mb-3">
                                    An automated neural architecture search method that discovers models optimized for
                                    both accuracy and computational efficiency on edge devices.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                                        Paper →
                                    </a>
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                                        Code →
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    "Privacy-Preserving Federated Learning with Differential Privacy Guarantees"
                                </h4>
                                <p className="text-slate-400 text-sm mb-2">
                                    Jane Smith, <span className="font-semibold">John Doe</span>, Charlie Davis
                                </p>
                                <p className="text-slate-500 text-sm mb-3">
                                    IEEE Symposium on Security and Privacy 2023
                                </p>
                                <p className="text-slate-400 mb-3">
                                    A federated learning framework that provides formal differential privacy guarantees
                                    while maintaining competitive model performance across distributed clients.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                                        Paper →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Goals */}
                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-6 text-white">Research Goals</h3>
                        <div className="text-slate-300 space-y-4 text-lg leading-relaxed">
                            <p>
                                My long-term research goal is to develop <span className="text-indigo-400 font-semibold">democratized AI systems</span> that
                                make advanced machine learning accessible to researchers and practitioners with limited computational resources.
                            </p>
                            <p>
                                I envision a future where cutting-edge AI capabilities can run efficiently on edge devices,
                                enabling privacy-preserving, low-latency applications in healthcare, education, and other critical domains.
                            </p>
                            <p>
                                Through my work, I aim to bridge the gap between theoretical advances in machine learning and
                                practical, deployable systems that create real-world impact while being mindful of energy
                                consumption and environmental sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
