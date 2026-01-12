"use client";

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const touch = e.touches[0];
        const rect = divRef.current.getBoundingClientRect();

        // Only trigger if inside the card
        if (
            touch.clientX >= rect.left &&
            touch.clientX <= rect.right &&
            touch.clientY >= rect.top &&
            touch.clientY <= rect.bottom
        ) {
            setPosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
            setOpacity(1);
        } else {
            setOpacity(0);
        }
    };

    const handleLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleLeave}
            className="group relative flex h-full rounded-2xl border border-white/10 bg-slate-950/50 overflow-hidden"
        >
            {/* Spotlight Gradient - Driven by state for both Mouse & Touch */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(147, 51, 234, 0.45), transparent 40%)`
                }}
            />

            {/* Existing Card Content with Glass Effect */}
            <Card className="relative h-full w-full border-0 bg-transparent p-8 flex flex-col items-center text-center">
                {/* Top light reflection */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

                <div className="relative mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 p-4 ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                    <div className="relative z-10">
                        {icon}
                    </div>
                </div>

                <h3 className="mb-3 font-serif text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {description}
                </p>
            </Card>
        </div>
    );
}
