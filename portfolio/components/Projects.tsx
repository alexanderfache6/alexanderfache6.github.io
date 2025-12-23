'use client';

import React, { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    shortDesc: string;
    image: string;
    tags: string[];
    details: string;
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Distributed ML Training System',
        shortDesc: 'Scalable distributed training framework for large language models',
        description: 'A high-performance distributed training system that enables efficient training of large-scale machine learning models across multiple GPUs and nodes.',
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        tags: ['Python', 'PyTorch', 'CUDA', 'Distributed Systems'],
        details: 'This project implements a novel approach to distributed training that reduces communication overhead by 40% while maintaining model accuracy. Key features include dynamic gradient compression, adaptive learning rate scheduling, and fault-tolerant checkpoint management. The system has been successfully deployed to train models with over 10B parameters.',
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        id: 2,
        title: 'Real-time Analytics Dashboard',
        shortDesc: 'Enterprise-grade analytics platform with real-time data visualization',
        description: 'A full-stack analytics platform that processes millions of events per second and provides real-time insights through interactive visualizations.',
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        tags: ['TypeScript', 'React', 'Node.js', 'Apache Kafka', 'TimescaleDB'],
        details: 'Built with a microservices architecture, this platform handles real-time data ingestion using Apache Kafka, processes streams with custom analytics engine, and delivers insights through a responsive React dashboard. Features include customizable widgets, real-time alerts, and historical data analysis with sub-second query performance on billions of records.',
        github: 'https://github.com',
    },
    {
        id: 3,
        title: 'Neural Architecture Search',
        shortDesc: 'Automated ML model design using evolutionary algorithms',
        description: 'Research project exploring automated neural architecture search to discover optimal network topologies for specific tasks.',
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        tags: ['Python', 'TensorFlow', 'Genetic Algorithms', 'AutoML'],
        details: 'This research implements a novel evolutionary algorithm that automatically discovers neural network architectures optimized for specific datasets and tasks. The system has discovered architectures that outperform hand-designed models on several benchmark datasets while requiring 30% fewer parameters. Published findings in a top-tier ML conference.',
    },
    {
        id: 4,
        title: 'Cloud Resource Optimizer',
        shortDesc: 'AI-powered cloud cost optimization and resource allocation',
        description: 'Intelligent system that analyzes cloud usage patterns and automatically optimizes resource allocation to reduce costs.',
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        tags: ['Go', 'Kubernetes', 'AWS', 'Machine Learning'],
        details: 'Leverages machine learning to predict workload patterns and automatically scale resources accordingly. Integrates with major cloud providers (AWS, GCP, Azure) and achieves average cost reduction of 35% while maintaining SLA requirements. Features include predictive auto-scaling, rightsizing recommendations, and anomaly detection.',
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        id: 5,
        title: 'Collaborative Code Review Platform',
        shortDesc: 'AI-assisted code review tool for engineering teams',
        description: 'Modern code review platform with AI-powered suggestions and team collaboration features.',
        image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
        details: 'Combines traditional code review workflows with AI-powered analysis to catch bugs, suggest improvements, and enforce coding standards. Features include inline comments, automated testing integration, code quality metrics, and machine learning models trained on thousands of code reviews to provide context-aware suggestions.',
    },
    {
        id: 6,
        title: 'Blockchain Verification System',
        shortDesc: 'Decentralized identity verification using blockchain technology',
        description: 'Secure and transparent identity verification system built on blockchain for enterprise applications.',
        image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        tags: ['Solidity', 'Ethereum', 'Web3.js', 'IPFS'],
        details: 'A decentralized application that enables secure, private, and verifiable identity management. Uses zero-knowledge proofs for privacy-preserving verification and IPFS for distributed data storage. Successfully implemented for credential verification in educational institutions and professional certifications.',
        github: 'https://github.com',
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up">
                    <span className="gradient-text">Featured Projects</span>
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-card p-6 cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image Placeholder */}
                            <div
                                className="w-full h-48 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl"
                                style={{ background: project.image }}
                            >
                                {project.title.substring(0, 2).toUpperCase()}
                            </div>

                            {/* Project Info */}
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                {project.shortDesc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="px-2 py-1 text-xs bg-slate-700 text-slate-400 rounded">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-3xl"
                        >
                            ×
                        </button>

                        {/* Project Image */}
                        <div
                            className="w-full h-64 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-4xl"
                            style={{ background: selectedProject.image }}
                        >
                            {selectedProject.title.substring(0, 2).toUpperCase()}
                        </div>

                        {/* Project Details */}
                        <h3 className="text-3xl font-bold mb-4 gradient-text">
                            {selectedProject.title}
                        </h3>

                        <p className="text-slate-300 mb-4 text-lg">
                            {selectedProject.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-2">Details</h4>
                            <p className="text-slate-400 leading-relaxed">
                                {selectedProject.details}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    View on GitHub
                                </a>
                            )}
                            {selectedProject.demo && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
