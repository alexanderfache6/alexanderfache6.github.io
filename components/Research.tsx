'use client';

import { POSTER_Cooperative, PAPER_Marsupially, POSTER_Marsupially } from '@/constants/constants';

export default function Research() {

    const bu_tags = ['Sentinel 2', 'Western United States', 'Rangeland Analysis Platform'];
    const gt_cooperative_tags = ['Turtlebot', 'Robotic Snake', 'ROS', 'SLAM'];
    const gt_marsupially_tags = ['Turtlebot', 'Robotic Snake', 'ROS', 'SLAM', 'Motion Primitives'];

    return (
        <section id="research" className="gradient-bg flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up"><span className="gradient-text">Research</span></h2>
                <br />

                <div className="space-y-10">
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
                        <div className="space-y-6">
                            <p className="text-slate-500 text-sm mb-3">2025 - present</p>
                            <ul className="text-slate-300 space-y-2 text-left list-disc list-inside">
                                <li>Shrub/woody expansion in the Western United States</li>
                                <li>Where is there overlap between woody expansion and shifting wildlife grazing areas?</li>
                                <li>Attribution of damage to grasslands: shifting wildlife populations, dominant livestock, invasive species, direct climate contributors?</li>
                                <li>Suitability index balancing wildlife and livestock biomass requirements, rangeland space, agricultural needs?</li>
                            </ul>
                            <ul className="flex flex-wrap gap-3 justify-center my-8">
                                {bu_tags.map((tag, index) => (
                                    <li key={index} className="px-10 py-2 bg-slate-800 text-slate-200 rounded-full border border-slate-600 text-sm font-medium cursor-default">{tag}</li>
                                ))}
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
                                <ul className="flex flex-wrap gap-3 justify-center my-8">
                                    {gt_cooperative_tags.map((tag, index) => (
                                        <li key={index} className="px-10 py-2 bg-slate-800 text-slate-200 rounded-full border border-slate-600 text-sm font-medium cursor-default">{tag}</li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    <a href={POSTER_Cooperative} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Poster</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe
                                        src={POSTER_Cooperative}
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
                                <ul className="flex flex-wrap gap-3 justify-center my-8">
                                    {gt_marsupially_tags.map((tag, index) => (
                                        <li key={index} className="px-10 py-2 bg-slate-800 text-slate-200 rounded-full border border-slate-600 text-sm font-medium cursor-default">{tag}</li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    <a href={PAPER_Marsupially} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Paper</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe src={PAPER_Marsupially} className="w-full h-full" title="Paper"/>
                                </div>
                                <div className="flex gap-4">
                                    <a href={POSTER_Marsupially} download className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">Download Poster</a>
                                </div>
                                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '850px' }}>
                                    <iframe src={POSTER_Marsupially} className="w-full h-full" title="Poster"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
