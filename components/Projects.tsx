'use client';

import React, { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Drone YouTube Channel and Tutorials',
        description: 'Developed drone build tutorials and flights for QAV250, S500, DJI Air3S drones.',
        image: 'drone.png',
        tags: ['YouTube', 'DaVinci Resolve'],
        demo: 'https://www.youtube.com/@AlexFache'
    },
    {
        id: 2,
        title: 'Property Management via Aerial Drone Imaging, Image Processing, and Change Detection',
        description: 'Created data integration pipeline for collecting, cleaning, aligning captures images. Ran anomaly detection to locate unnatural objects covering grass fields; grass health scoring to determine impact on grass degradation.',
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        tags: ['Python', 'Jupyter Notebook', 'Parrot Anafi', 'Pix4D', 'cv2', 'PIL', 'skimage'],
        demo: 'https://alexanderfache6.github.io/dronezz/'
    }
];

 {/* TODO */}
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="gradient-bg flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up">
                    <span className="gradient-text">Projects</span>
                </h2>
                <br />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-card p-6 cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <iframe
                                src={project.image}
                                className="w-full h-48 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl"
                                title="Resume PDF"
                            />

                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>
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
                            x
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
                        <br />

                        {/* Tags */}
                        <div className="mb-6">
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
                        <br />

                        {/* Links */}
                        <div className="flex gap-4">
                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    GitHub
                                </a>
                            )}
                            {selectedProject.demo && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
