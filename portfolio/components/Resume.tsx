'use client';

import React from 'react';

export default function Resume() {
    return (
        <section id="resume" className="gradient-bg">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up">
                    <span className="gradient-text">Resume</span>
                </h2>

                <div className="glass-card p-8">
                    <div className="mb-8 text-center">
                        <p className="text-slate-300 mb-4">
                            Download my full resume or view it below
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-primary inline-block"
                        >
                            Download PDF
                        </a>
                    </div>

                    {/* PDF Embed */}
                    <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '800px' }}>
                        <iframe
                            src="/resume.pdf"
                            className="w-full h-full"
                            title="Resume PDF"
                        />
                    </div>

                    {/* Fallback text version */}
                    <div className="mt-8 text-slate-300">
                        <p className="text-sm text-center text-slate-500">
                            If the PDF doesn't load, please download it using the button above.
                            <br />
                            <span className="text-xs">Note: Place your resume.pdf file in the /public folder</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
