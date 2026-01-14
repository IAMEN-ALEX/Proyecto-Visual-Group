"use client";

import React, { useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / (rect.height / 2)) * -12; // Increased tilt for more drama
        const rotateY = (mouseX / (rect.width / 2)) * 12;

        setRotate({ x: rotateX, y: rotateY });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setRotate({ x: 0, y: 0 });
    }, []);

    return (
        <div
            className="group h-full perspective-[2000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: rotate.x === 0 ? "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)" : "transform 0.1s ease-out"
                }}
                className="relative flex h-full rounded-xl border border-purple-500/20 bg-slate-900/40 backdrop-blur-3xl transition-all duration-700 preserve-3d group-hover:border-purple-400/50 group-hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)] overflow-hidden"
            >
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none rounded-xl"
                    style={{ backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
                />

                {/* Holographic 3D Layers */}
                <div className="absolute inset-0 translate-z-[-15px] rounded-xl bg-purple-500/[0.03] border border-purple-500/10 pointer-events-none" />
                <div className="absolute inset-0 translate-z-[-30px] rounded-xl bg-purple-500/[0.01] border border-purple-500/5 pointer-events-none" />

                {/* Corner HUD Markers (Purple Neon) */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-400/60 transition-all duration-500 group-hover:border-purple-300 translate-z-[20px]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-400/60 transition-all duration-500 group-hover:border-purple-300 translate-z-[20px]" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-400/60 transition-all duration-500 group-hover:border-purple-300 translate-z-[20px]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-400/60 transition-all duration-500 group-hover:border-purple-300 translate-z-[20px]" />

                {/* Sharp Purple Laser Sweep */}
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-2000 ease-in-out pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent skew-x-[-35deg] translate-z-[25px] blur-[1px]" />
                </div>

                {/* Holographic Purple Neon Spotlights */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-radial-gradient from-purple-500/30 via-transparent to-transparent rounded-full blur-[60px] pointer-events-none group-hover:from-purple-400/40 transition-all duration-1000 translate-z-[-10px]" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-radial-gradient from-purple-600/20 via-transparent to-transparent rounded-full blur-[60px] pointer-events-none group-hover:from-purple-400/30 transition-all duration-1000 translate-z-[-10px]" />

                {/* Floating Content with Extreme Parallax */}
                <Card className="relative h-full w-full border-0 bg-transparent p-8 flex flex-col items-center text-center z-10 preserve-3d">
                    {/* Floating Icon with Purple Halo Glow */}
                    <div
                        style={{ transform: `translateZ(60px)` }}
                        className="relative mb-8 transition-all duration-500 ease-out group-hover:scale-110"
                    >
                        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="relative z-10 rounded-2xl bg-slate-900/60 p-6 border border-purple-400/40 backdrop-blur-3xl shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:border-purple-300 transition-all duration-500">
                            <div className="text-purple-400 group-hover:text-white transition-colors duration-500 scale-125">
                                {icon}
                            </div>
                        </div>
                    </div>

                    <h3
                        style={{ transform: `translateZ(40px)` }}
                        className="mb-4 font-serif text-2xl font-bold tracking-widest text-white group-hover:text-purple-300 transition-all duration-500"
                    >
                        {title}
                    </h3>

                    <p
                        style={{ transform: `translateZ(20px)` }}
                        className="text-purple-100/60 leading-relaxed text-base group-hover:text-purple-100 transition-colors duration-500"
                    >
                        {description}
                    </p>

                    {/* Laser Scanner Line (Bottom - Purple) */}
                    <div
                        style={{ transform: `translateZ(5px)` }}
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-1000 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    />
                </Card>
            </div>
        </div>
    );
}
