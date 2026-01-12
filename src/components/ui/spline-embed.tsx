"use client";

import React from "react";

const SplineEmbed: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* Placeholder / Loading State */}
            <div
                className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            />

            <iframe
                src="https://my.spline.design/liquidspiral-nviH2pKdBh6xHHtYsD5kdGvH/"
                className={`w-full h-full border-0 absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                title="Spline 3D Scene"
                onLoad={() => setIsLoaded(true)}
                allow="fullscreen; clipboard-read; clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-popups"
            />
        </div>
    );
};

export default SplineEmbed;
