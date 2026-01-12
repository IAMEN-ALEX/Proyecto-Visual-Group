"use client";

import { Card } from "@/components/ui/card";
import React from "react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <Card className="group relative flex flex-col items-center text-center p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            {/* Animated gradient border glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Glass panel with premium effect */}
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 p-8 flex flex-col items-center">
                {/* Top light reflection */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Icon container with glow */}
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

                {/* Bottom light accent */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </Card>
    );
}
