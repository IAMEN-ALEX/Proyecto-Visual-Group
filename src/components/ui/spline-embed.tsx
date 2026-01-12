"use client";

import React from "react";
import Iridescence from "./iridescence";

const SplineEmbed: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* Mobile/Loading Active Fallback: Iridescence */}
            <div className={`absolute inset-0 z-0 ${isLoaded ? 'md:opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
                <Iridescence
                    color={[0.5, 0.1, 0.9]} // Consistent Purple
                    mouseReact={false} // Auto-animate on mobile
                    amplitude={0.1}
                    speed={1.0}
                />
            </div>

            {/* Gradient Overlay for better text readability on top of Iridescence */}
            <div className="absolute inset-0 bg-slate-950/30 z-0 pointer-events-none" />


            <iframe
                src="https://my.spline.design/liquidspiral-nviH2pKdBh6xHHtYsD5kdGvH/"
                className={`w-full h-full border-0 absolute inset-0 z-10 transition-opacity duration-1000 hidden md:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                title="Spline 3D Scene"
                onLoad={() => setIsLoaded(true)}
                allow="fullscreen; clipboard-read; clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-popups"
            />
        </div>
    );
};

export default SplineEmbed;
