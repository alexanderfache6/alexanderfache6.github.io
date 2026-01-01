'use client';

import { RESUME } from "@/constants/constants";

export default function Resume() {
    return (
        <section id="resume" className="gradient-bg flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up"><span className="gradient-text">Resume</span></h2>
                <br />

                <div className="glass-card p-8">
                    <div className="mb-8 text-center">
                        <p className="text-slate-300 mb-4">Download my full resume or view it below.</p>
                        <a href={RESUME} download className="btn-primary inline-block">Download Resume</a>
                    </div>
                    <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '800px' }}>
                        <iframe src={RESUME} className="w-full h-full" title="Resume PDF"/>
                    </div>
                </div>

            </div>
        </section>
    );
}
