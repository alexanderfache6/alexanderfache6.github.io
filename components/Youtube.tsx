'use client';

export default function Youtube() {
    return (
        <section id="youtube" className="gradient-bg flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center fade-in-up"><span className="gradient-text">YouTube</span></h2>
                <br />

                <div className="glass-card p-8">
                    <div className="mb-8 text-center">
                        <p className="text-slate-300 mb-4">Follow my channel (albeit sporadic postings) for drone tutorials, builds, and flights.</p>
                        <a href="https://www.youtube.com/@AlexFache" target="_blank" className="btn-secondary inline-block">YouTube @AlexFache</a>
                        <p className="text-slate-300 mb-4">Some fun videos below.</p>
                    </div>
                    <br />

                     {/* TODO */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qjk2rEYNKb8?si=GWDiAYFkQ8Upcb_E?autoplay=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JG019mdAncQ?si=4Wvqbw31Bzd-T5ZG?autoplay=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/y03S0TfaqKw?si=qBtBS0MpBFmlcfxj?autoplay=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RlmGSs8XlH8?si=dZb6Ca_DE8itVAV1?autoplay=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}