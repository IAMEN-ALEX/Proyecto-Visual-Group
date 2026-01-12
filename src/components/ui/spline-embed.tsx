"use client";

import React from "react";
import Iridescence from "./iridescence";

const SplineEmbed: React.FC = () => {
    // State for Iframe loading (script loaded)
    const [isIframeLoaded, setIsIframeLoaded] = React.useState(false);
    // State for Visual readiness (scene rendered) - adds buffer time
    const [isReadyVisible, setIsReadyVisible] = React.useState(false);

    const [shouldLoad, setShouldLoad] = React.useState(false);
    const [showFallback, setShowFallback] = React.useState(true);

    React.useEffect(() => {
        // Check if device is mobile (tailored for performance)
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (isMobile) {
            // On mobile, we purely stick to Iridescence (never load Spline)
            return;
        }

        // Defer loading of heavy 3D scene until main content is interactive
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 1500); // Reduced slightly as we have a secondary buffer now

        return () => clearTimeout(timer);
    }, []);

    // Handle iframe load
    const handleIframeLoad = () => {
        setIsIframeLoaded(true);
        // Add artificial delay to allow Spline WebGL to render first frame
        // This prevents the "grey flash" of the uninitialized canvas
        setTimeout(() => {
            setIsReadyVisible(true);
        }, 1500);
    };

    // Unmount fallback after transition to free GPU for Spline
    React.useEffect(() => {
        if (isReadyVisible) {
            const timer = setTimeout(() => {
                setShowFallback(false);
            }, 1500); // Wait for fade out transition (sync with CSS duration)
            return () => clearTimeout(timer);
        }
    }, [isReadyVisible]);

    return (
        <div className="w-full h-full relative bg-slate-950">
            {/* Mobile/Loading Active Fallback: Iridescence */}
            {showFallback && (
                <div className={`absolute inset-0 z-0 ${isReadyVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-[1500ms] will-change-opacity`}>
                    <Iridescence
                        color={[0.5, 0.1, 0.9]} // Consistent Purple
                        mouseReact={false} // Auto-animate on mobile
                        amplitude={0.1}
                        speed={1.0}
                    />
                </div>
            )}

            {/* Gradient Overlay for better text readability on top of Iridescence */}
            <div className="absolute inset-0 bg-slate-950/30 z-0 pointer-events-none" />

            {/* Deferred Iframe */}
            {shouldLoad && (
                <iframe
                    src="https://my.spline.design/liquidspiral-nviH2pKdBh6xHHtYsD5kdGvH/"
                    className={`w-full h-full border-0 absolute inset-0 z-10 
                        transition-opacity duration-[2000ms] ease-in-out pointer-events-none 
                        ${isReadyVisible ? 'opacity-100' : 'opacity-0'}`}
                    title="Spline 3D Scene"
                    onLoad={handleIframeLoad}
                    allow="fullscreen; clipboard-read; clipboard-write; acceleration; gyroscope"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    style={{ backgroundColor: 'transparent' }} // Force transparent background
                />
            )}
        </div>
    );
};

export default SplineEmbed;
