'use client';

import { PROFILE } from '@/constants/constants';

export default function About() {
    return (
        <section id="about" className="flex flex-col justify-center items-center">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 floating">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/30 glow">
                            <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                                <img src={PROFILE} className="w-full h-full object-cover rounded-full"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 fade-in-up">
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6"><span className="gradient-text">About Me</span></h2>
                        <div className="space-y-4 text-lg text-slate-300">
                            <p>
                                Former electrical engineer and enterprise software engineer turned remote sensing researcher at Boston University.
                                Research in land cover and land use change with interests in global food supply chain and wildlife restoration.
                                Avid drone aerial videographer, sci-fi reader, and intramural sports competitor.
                            </p>
                            <br />
                            <p className="mb-6 text-[var(--gt-color)]">
                                Seeking a Summer 2026 remote sensing research or internship position in land cover change and satellite derived products to support my interests.
                                Please get in touch via my <a href="https://www.linkedin.com/in/alexanderfache/" target="_blank" className="font-bold underline">LinkedIn</a>.
                                Current research <a href="#research" className="font-bold underline">below</a>.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}