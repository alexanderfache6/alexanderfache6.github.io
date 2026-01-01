'use client';

import React, { useEffect, useState } from 'react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ['about', 'research', 'resume', 'youtube'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Research', href: '#research' },
        { label: 'Resume', href: '#resume' },
        // { label: 'Projects', href: '#projects' },
        { label: 'YouTube', href: '#youtube' },
        // { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[var(--bg-primary)]/90 backdrop-blur-lg border-b border-slate-800/50 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold mb-4"><span className="gradient-text">Alexander Fache</span></a> {/* TODO */}

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={`text-sm font-medium transition-all hover:text-indigo-400 ${activeSection === item.href.substring(1)
                                    ? 'text-indigo-400'
                                    : 'text-slate-300'
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
