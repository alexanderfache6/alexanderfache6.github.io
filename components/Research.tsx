'use client';

import React from 'react';
import { PAPER1, POSTER1, POSTER2 } from '@/constants/constants';

export default function Research() {
    return (
        <section id="research" className="gradient-bg flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up"><span className="gradient-text">Research</span></h2>
                <br />

                <div className="space-y-8">
                    {/*<div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                        <div className="glass-card p-8">
                            <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Primary Focus</h4>
                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="glass-card p-8">
                            <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                                <h4 className="text-xl font-semibold text-purple-400 mb-2">Secondary Interests</h4>
                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />*/}

                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-6 text-[var(--bu-color)]">Current Remote Sensing Research at Boston University</h3>
                        <div className="space-y-6 text-center">
                            <p className="text-slate-500 text-sm mb-3">2025 - present</p>
                            <ul className="text-slate-300 space-y-2 text-left">
                                <li>• Shrub/woody expansion in western United States</li>
                                <li>• Where is there overlap between woody expnsion and shifting wildlife grazing areas?</li>
                                <li>• Attribution of damage to grasslands: shifting wildlife populations, dominant livestock, invasive species, direct climate contributors?</li>
                                <li>• Suitability index balancing wildlife and livestock biomass requirements, rangeland space, agricultural needs?</li>
                            </ul>
                        </div>
                    </div>
                    <br />

                    <div className="glass-card p-8">
                        <h3 className="text-3xl font-bold mb-6  text-[var(--gt-color)]">Prior Robotics Research at Georgia Tech</h3>
                        <div className="space-y-6">
                            <div className="pb-6 border-b border-slate-700">
                                <h4 className="text-lg font-semibold text-white mb-2">Cooperative Exploration of Unknown Environments Using a Robotic Snake-Turtlebot Leader-Follower Pair</h4>
                                <p className="text-slate-500 text-sm mb-3">2019 - 2020</p>
                                <div className="flex gap-4">
                                    <a href={POSTER2} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Poster</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe
                                        src={POSTER2}
                                        className="w-full h-full"
                                        title="Poster"
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="space-y-6">
                            <div className="pb-6 border-b border-slate-700">
                                <h4 className="text-lg font-semibold text-white mb-2">Marsupially-Aided Robotic Snake Exploration and Navigation of Cluttered Environments</h4>
                                <p className="text-slate-500 text-sm mb-3">2018 - 2019</p>
                                <p className="text-sm mb-2 text-left">Publication: A. Faché, et al., "Marsupially-Aided Robotic Snake Exploration and Navigation of Cluttered Environments," in Proc. Nat. Conf. Undergraduate Res., Kennesaw, GA, USA, Oct. 2019, pp. 526-536.</p>
                                <div className="flex gap-4">
                                    <a href={PAPER1} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Paper</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe
                                        src={PAPER1}
                                        className="w-full h-full"
                                        title="Paper"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <a href={POSTER1} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Poster</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe
                                        src={POSTER1}
                                        className="w-full h-full"
                                        title="Poster"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
