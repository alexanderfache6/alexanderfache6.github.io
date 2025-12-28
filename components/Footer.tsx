'use client';

import React from 'react';

import { NAME } from "@/constants/constants";

import { Github } from "@deemlol/next-icons";
import { Linkedin } from "@deemlol/next-icons";
import { Youtube } from "@deemlol/next-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/alexanderfache/',
            icon: (<Linkedin size={24} color="#FFFFFF" />)
        },
        {
            name: 'GitHub',
            url: 'https://github.com/alexanderfache6',
            icon: (<Github size={24} color="#FFFFFF" />)
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@AlexFache',
            icon: (<Youtube size={24} color="#FFFFFF" />)
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[var(--bg-tertiary)] border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-indigo-400 transition-all hover:scale-110"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* horizontal divider */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} {NAME}. All rights reserved.
                        </p>

                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group"
                        >
                            Back to top
                            <svg
                                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
